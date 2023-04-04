import React, {useEffect, useState} from "react";
import ReactPlayer from 'react-player';
import githubLogo from '../Photos/githubLogo.png'
import YouTube from 'react-youtube';

function ProjectCard({ project, classType }) {
    const [languages, setLanguages] = useState("")
    const url = project.link



    useEffect(() => {
        if (project.language2 !== null) {
            setLanguages(project.language1 + ", " + project.language2)
        } else{
            setLanguages(project.language1)
        }
    },[])




    return (
        <div className={classType}>
            <h2>{project.title}</h2>
            <p><u>Language(s):</u> {languages}</p>
            <p><u>Description:</u> {project.description}</p>           
            <p><u>Development dates:</u> {project.date_started} - {project.date_finished}</p>
            <a href={project.github}>
                <img className="githubLogo" src={githubLogo} />
            </a>
            <br />
            {/* <a className="projectLink" href={project.link}>Demo Video</a> */}

            {/* <ReactPlayer
                url={project.link}
                width="40%"
                height="40%"
                controls
            /> */}
            <YouTube videoId={url} controls />
            {/* <video src={project.link} controls /> */}

        </div>
    )
}

export default ProjectCard;
import React from "react";
import ReactPlayer from 'react-player';

function ProjectCard({ project }) {

    const url = project.link

    return (
        <>
            <h3>{project.title}</h3>
            {/* <ReactPlayer
                url={project.link}
                width="40%"
                height="40%"
                controls
            /> */}
            <iframe src={url}></iframe>
            {/* <video src={project.link} controls /> */}
        </>
    )
}

export default ProjectCard;
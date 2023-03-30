import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";



function Projects(){
    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetch("/projects")
        .then(resp => resp.json())
        .then(data => setProjects(data))
    },[])

    let projectElements = projects.map(project => {
        return(<ProjectCard key={project.title} project={project}/>)
    })


    return(
        <>
            {projectElements.reverse()}
        </>
    )
}

export default Projects;
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import loadGif from "../Photos/Loading Gif.gif"



function Projects() {
    const [projects, setProjects] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [classType, setClassType] = useState("projectCardLoading")


    function loadingPage() {
        setTimeout(() => {
            setLoaded(true)
            setClassType("projectCard")
        }, 3000)

    }


    useEffect(() => {
        fetch("/projects")
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
            })
        loadingPage()

    }, [])





    let projectElements = projects.map(project => {
        return (<ProjectCard classType={classType} key={project.title} project={project} />)
    })




    return (
        <>{
            loaded ?
                null
                : <>
                    <h2>Loading...</h2>
                    <img src={loadGif} alt="loading" id="loadingGif" />
                </>
        }
            {projectElements.reverse()}
        </>

    )
}

export default Projects;
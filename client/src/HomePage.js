import React, {useState, useEffect} from "react";
import FeaturedProjectCard from "./FeaturedItems/FeaturedProjectCard";
import FeaturedBlogCard from "./FeaturedItems/FeaturedBlogCard";

function HomePage() {
    const [featBlog, setFeatBlog] = useState({})
    const [featProj, setFeatProj] = useState({})

    useEffect(() => {
        fetch("/featuredblog")
        .then(resp => resp.json())
        .then(data => setFeatBlog(data))
        fetch("featuredproject")
        .then(resp=>resp.json())
        .then(data => setFeatProj(data))
    }, [])

    return (
        <div className="homeText">
            <h1>Welcome to the personal website of Harrison!</h1>
            <h4>Harrison is a former TV Producer transitioning into a career in technology. </h4>
            <h2>Featured Blog</h2>
            <FeaturedBlogCard post={featBlog}/>
            <h2>Featured Project</h2>
            <FeaturedProjectCard project={featProj}/>
        </div>
    )
}

export default HomePage;
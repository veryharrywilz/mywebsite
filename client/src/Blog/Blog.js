import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PostBlog from "./PostBlog";

function Blog({user}) {
    const [blogData, setBlogData] = useState([])
    const [checkUser, setCheckUser] = useState(false)


    useEffect(() => {
        fetch("/blogs")
            .then(resp => resp.json())
            .then(data => {
                setBlogData(data)
            })
            if(user !== {} && user.username === "VeryHarryWilz"){
                setCheckUser(true)
            }
    }, [])

    const blogElements = blogData.map((post) => {
        return (
            <BlogCard key={post.id} post={post} />
        )
    })



    return (
        <>
            <h1>Blog</h1>
            {checkUser ?
            <PostBlog /> : null}
            {blogElements}
        </>
    )
}

export default Blog;
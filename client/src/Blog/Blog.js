import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PostBlog from "./PostBlog";

function Blog() {
    const [blogData, setBlogData] = useState([])


    useEffect(() => {
        fetch("/blogs")
            .then(resp => resp.json())
            .then(data => {
                setBlogData(data)
            })
    }, [])

    const blogElements = blogData.map((post) => {
        return (
            <BlogCard key={post.id} post={post} />
        )
    })



    return (
        <>
            <h1>Blog</h1>
            <PostBlog />
            {blogElements}
        </>
    )
}

export default Blog;
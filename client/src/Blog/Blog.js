import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PostBlog from "./PostBlog";

function Blog({ user }) {
    const [blogData, setBlogData] = useState([])
    const [checkUser, setCheckUser] = useState(false)


    useEffect(() => {
        fetch("/blogs")
            .then(resp => resp.json())
            .then(data => {
                setBlogData(data)
            })
        if (user !== null) {
            if (user.username === "VeryHarryWilz")
                setCheckUser(true)
        }
    }, [])


    function handleSearch(e) {
        e.preventDefault()
        fetch(`/searchblogs`, {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                search: e.target.category.value
            })
        })
        .then(resp => resp.json())
        .then(data => setBlogData(data))
    }



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
            <p>
                Search posts...</p>
                <form onSubmit={e => handleSearch(e)}>
                    <select name="category">
                        <option>Coding</option>
                        <option>Coffee</option>
                        <option>Gaming</option>
                        <option>Biking</option>
                        <option>StarWars</option>
                        <option>Misc</option>
                    </select>
                    <button type="submit">Search</button>
                </form>
            
            {blogElements}
        </>
    )
}

export default Blog;
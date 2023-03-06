import React, {useState} from "react";

function PostBlog() {
    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")
    const [newImage, setNewImage] = useState("")
    const newBlogData = {
        title: newTitle,
        content: newContent,
        image: newImage
    }

    function handleBlogPost(e){
        e.preventDefault()
        fetch("/blogs", {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(newBlogData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }


    return(
        <div className="blogCard">
        <h6>Create New Blog</h6>
        <form onSubmit={e => handleBlogPost(e)}>
            <input type="text" placeholder="Blog Title" onChange={e => setNewTitle(e.target.value)}></input>
            <br />
            <input type="text" placeholder="Type your blog here..." onChange={e => setNewContent(e.target.value)}></input>
            <br />
            <input type="text" placeholder="Paste image link here (optional)" onChange={e => setNewImage(e.target.value)}></input>
            <br />
            <button type="submit">Create Blog</button>
        </form>
        
        </div>
    )
}

export default PostBlog;
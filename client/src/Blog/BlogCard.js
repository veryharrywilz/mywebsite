import React from "react";

function BlogCard({post}) {
    return(
        <div className="blogCard">
            <h3>{post.title}</h3>
            <p>{post.created_at}</p>
            <p>{post.content}</p>
            <img className="blogImage" src={post.image}/>
        </div>
    )
}

export default BlogCard;
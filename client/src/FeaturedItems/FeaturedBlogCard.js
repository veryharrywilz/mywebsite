import React from "react";

function FeaturedBlogCard({post}) {
    return(
        <div className="featuredBlogCard">
            <h3>{post.title}</h3>
            <p>{post.created_at}</p>
            <p>{post.content}</p>
            <img className="blogImage" src={post.image}/>
            <p>Category: {post.category}</p>
        </div>
    )
}

export default FeaturedBlogCard;
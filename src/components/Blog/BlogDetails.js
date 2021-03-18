import React from "react";

const BlogDetails = ({match}) => {
    return (
        <div>
            <h1>Blog Details: {match.params.id}</h1>
        </div>
    )
}

export default BlogDetails;
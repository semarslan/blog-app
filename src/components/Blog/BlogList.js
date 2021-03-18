import React from "react";
import {Link} from "react-router-dom";

const BlogList = () => {
    return (
        <div>
            <h1>Blog List</h1>
            <Link to={"/blogs/1"}>Blog 1</Link>
            <Link to={"/blogs/2"}>Blog 2</Link>
        </div>
    )
}

export default BlogList;
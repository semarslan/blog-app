import React from "react";
import {connect} from "react-redux";
import BlogDetailsItem from "./BlogDetailsItem";


const BlogDetails = (props) => {
    return (
            // <BlogDetailsItem id={props.blog.id} description={props.blog.description} title={props.blog.title}/>
        <BlogDetailsItem {...props.blog} />
    )
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((blog) => {
            return blog.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(BlogDetails);
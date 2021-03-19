import React from 'react';
import BlogForm from "./BlogForm";
import {connect} from 'react-redux'
import {editBlog} from "../../actions/blogs";


const EditBlog = (props) => {

    const edit = (blog) => {
        props.dispatch(editBlog(props.blog.id, blog));
        props.history.push('/blogs');
    }

    return (
        <div>
            <h1>Edit Blog</h1>
            <BlogForm
                blog={props.blog}
                onSubmit = {edit}
            />
        </div>
    );
};

const mapSateToProps = (state, props) => {
    return {
        blog: state.blogs.find((b) => {
            return b.id === props.match.params.id
        })
    }
}
export default connect(mapSateToProps)(EditBlog);
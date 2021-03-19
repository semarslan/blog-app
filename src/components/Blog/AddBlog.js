import React from 'react';
import BlogForm from "./BlogForm";
import {connect} from 'react-redux';
import {addBlog} from "../../actions/blogs";

const AddBlog = (props) => {

    const add = (blog) => {
        props.dispatch(addBlog(blog));
        props.history.push('/blogs');
    }

    return (
        <div>
            <h1>Add Blog</h1>
            <BlogForm onSubmit={add} />
        </div>
    );
};

//gönderilecek bir props a ihtiyaç yok bu nedenle connect boş gidiyor.
export default connect()(AddBlog);
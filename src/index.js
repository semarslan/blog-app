import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addBlog, editBlog, removeBlog} from "./actions/blogs";


const store = configureStore();

// store.subscribe(() => {
//     console.log(store.getState())
// })

const blog1 = store.dispatch(addBlog({title: 'dffd', description: 'dfsdf', dateAdded: 0}))
const blog2 = store.dispatch(addBlog({title: 'dffd2', description: 'dfsdf2', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'dffd3', description: 'dfsdf3', dateAdded: Date.now()}))
store.dispatch(addBlog({title: '4', description: '4', dateAdded: Date.now()}))


store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, {title: 'update blog 2'}))



ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

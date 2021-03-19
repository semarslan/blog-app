import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../components/Home/Header";
import Home from "../components/Home/Home";
import BlogList from "../components/Blog/BlogList";
import BlogDetails from "../components/Blog/BlogDetails";
import Contact from "../components/Home/Contact";
import NotFound from "../components/Home/NotFound";
import AddBlog from "../components/Blog/AddBlog";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path={"/"} component={Home} exact/>
                    <Route path={"/blogs"} component={BlogList} exact/>
                    <Route path={"/create"} component={AddBlog}/>
                    <Route path={"/blogs/:id"} component={BlogDetails}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;
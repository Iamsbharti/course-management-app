import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import AuthorPage from "./AuthorPage";
import ManageAuthorPage from "../components/ManageAuthorPage";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/authors" component={AuthorPage} />
        <Redirect from="/about-page" to="/about" />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/author/:id" component={ManageAuthorPage} />
        <Route path="/author" component={ManageAuthorPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;

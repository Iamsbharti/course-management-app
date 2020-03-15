import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Course Administration</h1>
      <p>React,flux and React-Router fro ultra responsive web app</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}
export default HomePage;

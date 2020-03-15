import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2 style={{ color: "red" }}>404: Page Not Found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
export default PageNotFound;

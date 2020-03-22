import React from "react";

function AboutPage() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is a react-app creted with help of create-react-app project.</p>
      <p>It supports following functionalities</p>
      <ul>
        <li>
          Display Course Details from a mock database by making an API-call to
          JSON Server
        </li>
        <li>Add & Delete an additional course</li>
        <li>Redirect to 404 Page when incorrect URL is entered</li>
      </ul>
    </div>
  );
}

export default AboutPage;

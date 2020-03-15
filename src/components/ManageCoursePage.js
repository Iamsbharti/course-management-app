import React from "react";
import { Prompt } from "react-router-dom";
function ManageCoursePage(props) {
  return (
    <>
      <h1>Manage Course Page</h1>
      <Prompt when={true} message="Are you sure to leave?" />
      {props.match.params.slug}
    </>
  );
}
export default ManageCoursePage;

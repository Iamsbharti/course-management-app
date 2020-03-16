import React, { useState } from "react";
import CourseForm from "./CourseFom";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
function ManageCoursePage(props) {
  console.log("props-submit:" + props);
  const [course, setCourse] = useState({
    title: "",
    id: null,
    slug: "",
    category: "",
    authorId: null
  });
  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value //[composed property]
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved!");
    });
  }
  return (
    <>
      <h1>Manage Course Page</h1>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
export default ManageCoursePage;

import React, { useState } from "react";
import CourseForm from "./CourseFom";
function ManageCoursePage(props) {
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
  return (
    <>
      <h1>Manage Course Page</h1>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
}
export default ManageCoursePage;

import React, { useState, useEffect } from "react";
import CourseForm from "./CourseFom";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    title: "",
    id: null,
    slug: "",
    category: "",
    authorId: null
  });

  useEffect(() => {
    const slug = props.match.params.slug; //from the path /courses/:slug
    courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
  }, [props.match.params.slug]);

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value //[composed property]
    });
  }
  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title Is Required";
    if (!course.authorId) _errors.authorId = "Author ID is Required";
    if (!course.category) _errors.category = "Category is Required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved!");
    });
  }
  return (
    <>
      <h1>Manage Course Page</h1>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
export default ManageCoursePage;

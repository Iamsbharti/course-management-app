import React, { useState, useEffect } from "react";
import CourseForm from "./CourseFom";
import courseStores from "../stores/courseStores";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStores.getCourses());
  const [course, setCourse] = useState({
    title: "",
    id: null,
    slug: "",
    category: "",
    authorId: null
  });

  useEffect(() => {
    courseStores.addChangeListener(onChange);
    const slug = props.match.params.slug; //from the path /courses/:slug
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStores.getCoursesBySlug(slug));
    }
    return () => courseStores.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStores.getCourses());
  }

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
    courseActions.saveCourse(course).then(() => {
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

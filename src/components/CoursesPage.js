import React, { useState, useEffect } from "react";
import courseStores from "../stores/courseStores";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStores.getCourses());
  useEffect(() => {
    courseStores.addChangeListener(onChange);
    if (courseStores.getCourses().length === 0) loadCourses();

    return () => courseStores.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStores.getCourses());
  }

  return (
    <>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;

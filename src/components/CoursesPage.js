import React, { useState, useEffect } from "react";
import courseStores from "../stores/courseStores";
import authorStores from "../stores/authorStores";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import {
  loadCourses,
  deleteCourse,
  loadAuthors
} from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStores.getCourses());
  const [authors, setAuthors] = useState(authorStores.getAuthors());

  useEffect(() => {
    courseStores.addChangeListener(onChange);
    if (courseStores.getCourses().length === 0) loadCourses();
    if (authorStores.getAuthors().length === 0) loadAuthors();

    return () => courseStores.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStores.getCourses());
    setAuthors(authorStores.getAuthors());
  }

  return (
    <>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList
        courses={courses}
        deleteCourse={deleteCourse}
        authors={authors}
      />
    </>
  );
}

export default CoursesPage;

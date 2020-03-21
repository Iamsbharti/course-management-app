import React, { useState, useEffect } from "react";
import courseStores from "../stores/courseStores";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import {
  loadCourses,
  deleteCourse,
  loadAuthors
} from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStores.getCourses());
  const [authors, setAuthors] = useState(courseStores.getAuthors());

  useEffect(() => {
    courseStores.addChangeListener(onChange);
    if (courseStores.getCourses().length === 0) loadCourses();
    if (courseStores.getAuthors().length === 0) loadAuthors();

    return () => courseStores.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStores.getCourses());
    setAuthors(courseStores.getAuthors());
  }

  console.log("Courses:" + courses.map(course => console.log(course)));
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

import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as courseApi from "../api/courseApi";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //Hey dispatcher tell all the stores that a course was created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}

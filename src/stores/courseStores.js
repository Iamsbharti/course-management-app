import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];
class CourseStore extends EventEmitter {
  //Add listner
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  //RemoveListener
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  //Emit
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    console.log(_courses.map(c => console.log(c)));
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

//Register the store with action
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        course => course.id !== parseInt(action.id),
        10
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;

    default:
    //do nothing
  }
});

export default store;

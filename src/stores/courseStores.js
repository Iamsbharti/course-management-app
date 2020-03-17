import { EventEmitter } from "events";

const CHANGE_EVENT = "change";
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
}

const store = new CourseStore();
export default store;

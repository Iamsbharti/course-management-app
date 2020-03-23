import { EventEmitter } from "events";
import actionTypes from "../actions/actionTypes";
import Dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";
let _authors = [];
class AuthorStores extends EventEmitter {
  //Add Listener
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  //Remove Listener
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  //Emmit Change
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  //return authors when store is called
  getAuthors() {
    return _authors;
  }
  getAuthorById(id) {
    return _authors.find(author => author.id === parseInt(id, 10));
  }
}
const store = new AuthorStores();
//Register this author store with Dispatcher
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      store.emitChange();
      break;
    case actionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      store.emitChange();
      break;
    case actionTypes.UPDATE_AUTHOR:
      _authors = _authors.map(author =>
        author.id === action.author.id ? action.author : author
      );
      store.emitChange();
      break;

    case actionTypes.DELETE_AUTHOR:
      _authors = _authors.filter(
        author => author.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    default:
    //Do nothing
  }
});

export default store;

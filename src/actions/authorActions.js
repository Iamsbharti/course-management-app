import actionTypes from "./actionTypes";
import * as authorsApi from "../api/authorApi";
import dispatcher from "../appDispatcher";
import { toast } from "react-toastify";

export function loadAuthors() {
  return authorsApi.getAuthors().then(authors => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors: authors
    });
  });
}

export function saveAuthor(author) {
  return authorsApi.saveAuthor(author).then(savedAuthor => {
    dispatcher.dispatch({
      actionType: author.id
        ? actionTypes.UPDATE_AUTHOR
        : actionTypes.CREATE_AUTHOR,
      author: savedAuthor
    });
  });
}

export function deleteAuthor(id) {
  return authorsApi.deleteAuthor(id).then(() => {
    deleteAuthorNotification();
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_AUTHOR,
      id: id
    });
  });
}

export function deleteAuthorNotification() {
  toast.warn("Author Deleted");
}

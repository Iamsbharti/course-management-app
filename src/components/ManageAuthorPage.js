import React, { useState, useEffect } from "react";
import authorStores from "../stores/authorStores";
import { loadAuthors, saveAuthor } from "../actions/authorActions";
import { toast } from "react-toastify";
import AuthorForm from "./AuthorForm";

function ManageAuthorPage(props) {
  const [authors, setAuthors] = useState(authorStores.getAuthors());
  const [errors, setErrors] = useState({});
  const [author, setAuthor] = useState({
    id: null,
    name: ""
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Add Listener
    authorStores.addChangeListener(onChange);
    const id = props.match.params.id;
    if (authors.length === 0) {
      loadAuthors();
    } else if (id) {
      //check for course based on slug if not found redirect to PageNot Found
      const _course_slug = authorStores.getAuthorById(id);
      if (_course_slug !== undefined) {
        setAuthor(authorStores.getAuthorById(id));
        setIsLoading(true);
      } else {
        props.history.push("/PageNotFound");
      }
    }
    return () => authorStores.removeChangeListener(onChange);
  }, [authors.length, props.match.params.id, props]);

  function onChange() {
    setAuthors(authorStores.getAuthors());
  }

  function handleChange({ target }) {
    setAuthor({
      ...author,
      [target.name]: target.value
    });
  }
  function formIsValid() {
    const _errors = {};
    if (!author.id) _errors.id = "Id is Required";
    if (!author.name) _errors.name = "Author Name is Required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    console.log(author);
    saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Course Saved!");
    });
  }
  return (
    <div>
      <h1>Manage Authors Form</h1>
      {isLoading && (
        <AuthorForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          author={author}
          errors={errors}
        />
      )}
    </div>
  );
}
export default ManageAuthorPage;

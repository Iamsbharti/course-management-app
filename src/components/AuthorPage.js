import React, { useState, useEffect } from "react";
import authorStores from "../stores/authorStores";
import { loadAuthors, deleteAuthor } from "../actions/authorActions";
import AuthorList from "./AuthorList";
import { Link } from "react-router-dom";
function AuthorPage() {
  const [authors, setAuthors] = useState(authorStores.getAuthors());

  useEffect(() => {
    authorStores.addChangeListener(onChange);
    if (authorStores.getAuthors().length === 0) loadAuthors();
    return () => authorStores.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setAuthors(authorStores.getAuthors());
  }
  return (
    <div>
      <h1>Authors</h1>
      <Link to="/author" className="btn btn-primary">
        Add Author
      </Link>
      <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
    </div>
  );
}

export default AuthorPage;

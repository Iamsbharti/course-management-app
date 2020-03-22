import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthorList(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Author Id</th>
            <th>Author Name</th>
          </tr>
        </thead>
        <tbody>
          {props.authors.map(author => {
            return (
              <tr key={author.id}>
                <td>
                  <Link to={`/author/${author.id}`}>{author.id}</Link>
                </td>
                <td>{author.name}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.deleteAuthor(author.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
AuthorList.propTypes = {
  deleteAuthor: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
export default AuthorList;

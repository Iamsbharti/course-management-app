import React, { useState, useEffect } from "react";
import courseStores from "../../stores/courseStores";
import { loadAuthors } from "../../actions/courseActions";
import PropTypes from "prop-types";

function DropDown(props) {
  console.log(props);
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  const [authors, setAuthors] = useState(courseStores.getAuthors());

  useEffect(() => {
    courseStores.addChangeListener(onChange);
    if (courseStores.getAuthors().length === 0) loadAuthors();
    return () => courseStores.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setAuthors(courseStores.getAuthors());
  }

  return (
    <div className={wrapperClass}>
      <div className="field">
        <label htmlFor={props.id}>{props.label}</label>
        <select
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        >
          {authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}
DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};
DropDown.defaultProps = {
  error: ""
};
export default DropDown;

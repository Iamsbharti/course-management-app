import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        error={props.errors.title}
        onChange={props.onChange}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            onChange={props.onChange}
            className="form-control"
          >
            <option value="" />
            <option value="1">Scott Allen</option>
            <option value="2">Cory House</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        label="Category"
        name="category"
        value={props.course.category}
        error={props.errors.category}
        id="category"
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}
CourseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
};
export default CourseForm;

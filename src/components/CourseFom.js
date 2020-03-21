import React from "react";
import TextInput from "./common/TextInput";
import DropDown from "./common/DropDown";
import PropTypes from "prop-types";

function CourseForm(props) {
  console.log(props);
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

      <DropDown
        id="author"
        name="authorId"
        label="Author"
        value={props.course.authorId || ""}
        error={props.errors.authorId}
        onChange={props.onChange}
      />
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

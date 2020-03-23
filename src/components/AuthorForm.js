import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function AuthorForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        
        <TextInput
          id="name"
          name="name"
          label="Author's Name"
          value={props.author.name}
          onChange={props.onChange}
          error={props.errors.name}
        />
        <button className="btn btn-primary">Save Author</button>
      </form>
    </div>
  );
}

AuthorForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
};
export default AuthorForm;

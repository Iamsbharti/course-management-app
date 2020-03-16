import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            value={props.course.title}
            className="form-control"
            onChange={props.onChange}
          />
        </div>
      </div>
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
            <option value=""></option>
            <option value="1">Scott Allen</option>
            <option value="2">Cory House</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            name="category"
            value={props.course.category}
            id="category"
            className="form-control"
            onChange={props.onChange}
          />
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}
export default CourseForm;

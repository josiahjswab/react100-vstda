import React from "react";

const EditView = (props) => {
  return (
    <div className="col-md-8">
      <div className="panel">
        <div className="panel-body text-left">
          <h4 className="card-text">Edit</h4>
          <textarea
            className='update-todo-text'
            name="editDescription"
            value={props.editDescription}
            onChange={props.handleChange}
          />
          <h4 className="card-text">Priority</h4>
          <select
            className="update-todo-priority"
            name="editPriority"
            value={props.editPriority}
            onChange={props.handleChange}
          >
            <option value="">Priority</option>
            <option value="1">Low Priority</option>
            <option value="2">Mid Priority</option>
            <option value="3">High Priority</option>
          </select>
        </div>
        <div className="panel-footer center-block">
          <div className="text-right">
            <button
              className="btn btn-success update-todo"
              type="button"
              onClick={() =>
                props.handleSave(
                  props.editDescription,
                  props.editPriority,
                  props.id
                )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditView;

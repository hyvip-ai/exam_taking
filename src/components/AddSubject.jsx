import React from "react";

function AddSubject() {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Subject
        </span>
        <input
          id="subject"
          type="text"
          className="form-control"
          placeholder="Subject"
          aria-label="Subject"
          aria-describedby="basic-addon1"
        />
      </div>
    </React.Fragment>
  );
}

export default AddSubject;

import React from "react";
function AddQuestions() {
  return (
    <React.Fragment>
      <div className="input-group">
        <span className="input-group-text">
          Paste Your Questions Here <br />
          (Paste each Question with <br />
          comma(,) separator, <br /> Don't click enter)
        </span>
        <textarea
          id="question"
          className="form-control"
          aria-label="With textarea"
          placeholder="Enter Your Questions Here"
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default AddQuestions;

import React from "react";
function AddQuestions() {

  return (
    <React.Fragment>
      <div className="input-group">
        <span className="input-group-text">
          Pase Your Questions Here <br />
          (Pase each question with <br />
          comma(,) separator, <br /> Don't click enter)
        </span>
        <textarea
          id="question"
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default AddQuestions;

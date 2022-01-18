import React from "react";
import classes from "../styles/newTest.module.css";
import ExistingValue from "./ExistingValue";
function AddAnswerColumn({ data, setTestData, id }) {
  const clickHandler = () => {
    const answers = document.getElementById(`answers_${id}`).value.split(",");
    const correct_answer = document.getElementById(
      `correct_answer_${id}`
    ).value;
    const marks = Number(document.getElementById(`marks_${id}`).value);
    console.log(answers, correct_answer, marks);
    setTestData((prev) => {
      let copy = { ...prev };
      copy.test = [
        ...copy.test.map((item) => {
          return item.question === data.question
            ? {
                ...item,
                answers,
                correct_answer,
                marks,
              }
            : item;
        }),
      ];

      return copy;
    });
  };
  return (
    <div className={classes.answer_card}>
      <p>Question : {data.question}</p>
      <div className="input-group">
        <span className="input-group-text">
          Paste Your Answers Here <br />
          (Paste each Answer with <br />
          comma(,) separator, <br /> Don't click enter)
        </span>
        <textarea
          id={`answers_${id}`}
          className="form-control"
          aria-label="With textarea"
          placeholder="Enter Your Answers Here"
        ></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Correct Answer
        </span>
        <input
          id={`correct_answer_${id}`}
          type="text"
          className="form-control"
          placeholder="Enter Correct Answer Here"
          aria-label="correct_answer"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Marks
        </span>
        <input
          id={`marks_${id}`}
          type="text"
          className="form-control"
          placeholder="Enter The Marks Here"
          aria-label="Marks"
          aria-describedby="basic-addon1"
        />
      </div>
      <button onClick={clickHandler} className={classes.step_btn}>
        Add Answers
      </button>
      <ExistingValue data={data} />
    </div>
  );
}

export default AddAnswerColumn;

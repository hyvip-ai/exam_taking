import React from "react";

function ExistingValue({ data }) {
  console.log(data);
  return (
    <React.Fragment>
      {data.answers ? (
        <>
          <p>
            <b>Answers</b> : {data.answers}
          </p>
          <p>
            <b>Correct Answer</b> : {data.correct_answer}
          </p>
          <p>
            <b>Marks</b> : {data.marks}
          </p>
        </>
      ) : null}
    </React.Fragment>
  );
}

export default ExistingValue;

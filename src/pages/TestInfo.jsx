import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTestById } from "../functions/getAllList";
import { v4 as uuid } from "uuid";
import classes from "../styles/examinfo.module.css";
function TestInfo() {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);
  useEffect(() => {
    const data = getTestById(testId);
    setTestDetails({
      ...data[0],
    });
  }, [testId]);
  return (
    <React.Fragment>
      <h1 className={classes.heading}>Test Details</h1>
      {testDetails ? (
        <div className={classes.info_card}>
          <h3>This Test is about : <b>{testDetails.subject}</b></h3>
          <p>
            This test has <b>{testDetails.test.length}</b> questions (Details of the
            questions are as below){" "}
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {testDetails.test.map((item, index) => {
                return (
                  <tr key={uuid()}>
                    <td>{index + 1}</td>
                    <td>{item.marks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h6>
            Total Marks :
            <b>
            {testDetails.test.reduce((acc, item) => {
              return (acc += item.marks);
            }, 0)}
            </b>
          </h6>
          <button className="btn btn-outline-dark"><Link to={`/test/${testId}`}>Start Test</Link></button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
}

export default TestInfo;

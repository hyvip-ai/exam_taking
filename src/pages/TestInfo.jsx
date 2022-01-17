import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTestById } from "../functions/getAllList";
import { v4 as uuid } from "uuid";
function TestInfo() {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);
  useEffect(() => {
    const data = getTestById(testId);
    console.log(data);
    setTestDetails({
      ...data[0],
    });
  }, [testId]);
  return (
    <React.Fragment>
      <h1>Test Details</h1>
      {testDetails ? (
        <>
          <h3>This Test is about : {testDetails.subject}</h3>
          <p>
            This test has {testDetails.test.length} questions (Details of the
            questions are as below){" "}
          </p>
          <table>
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
            Total Marks :{" "}
            {testDetails.test.reduce((acc, item) => {
              return (acc += item.marks);
            }, 0)}
          </h6>
          <button className="btn btn-outline-dark">Start Test</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
}

export default TestInfo;

import React, { useEffect, useState } from "react";
import AddQuestions from "../components/AddQuestions";
import { v4 as uuid } from "uuid";
import AddSubject from "../components/AddSubject";
import capitalizeFirstLetter from '../functions/capitalize'
import classes from '../styles/newTest.module.css'
import AddAnswers from "../components/AddAnswers";
function NewTest() {
  const [testData, setTestData] = useState({ id: uuid() });
  useEffect(() => {
    console.log(testData);
  }, [testData]);
  const clickHandler = () => {
    let questionsArray = document.getElementById("question").value.split(',');
    questionsArray = questionsArray.map(item=>{return {question:item}})
    let subject = document.getElementById("subject").value
    subject = capitalizeFirstLetter(subject)
    console.log(questionsArray);
    console.log(subject);
    setTestData((prev)=>{
        return {
            ...prev,
            subject,
            test:questionsArray
        }
    })
  };
  return (
    <React.Fragment>
      <AddSubject/>
      <AddQuestions/>
      <button className={classes.step_btn} onClick={clickHandler}>Submit For Next Step</button>
      {
           testData.test?<AddAnswers test={testData.test} />:null
      }
    </React.Fragment>
  );
}

export default NewTest;

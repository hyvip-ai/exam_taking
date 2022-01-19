import React, { useEffect, useState } from "react";
import AddQuestions from "../components/AddQuestions";
import { v4 as uuid } from "uuid";
import AddSubject from "../components/AddSubject";
import capitalizeFirstLetter from '../functions/capitalize'
import classes from '../styles/newTest.module.css'
import AddAnswers from "../components/AddAnswers";
import {setToLocalStorage} from "../functions/getAllList"
import {useNavigate} from 'react-router-dom'
function NewTest() {
  const navigate = useNavigate()
  const [testData, setTestData] = useState({ id: uuid() });
  useEffect(() => {
    console.log(testData);
  }, [testData]);
  const clickHandler = () => {
    let questionsArray = document.getElementById("question").value.split(',');
    questionsArray = questionsArray.map(item=>{return {question:item}})
    let subject = document.getElementById("subject").value
    subject = capitalizeFirstLetter(subject)
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
           testData.test?<AddAnswers test={testData} setTestData={setTestData} />:null
      }
      {
        testData.test?.every((item)=>item.answers?true:false)?<button onClick={()=>{setToLocalStorage(testData);navigate(`/created/${testData.subject}/${testData.id}`)}} className={classes.step_btn}>Create New Test</button>:null
      }
    </React.Fragment>
  );
}

export default NewTest;

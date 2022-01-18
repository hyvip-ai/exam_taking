import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FancyHeading from "../components/FancyHeading";
import Heading from "../components/Heading";
import QuesButton from "../components/QuesButton";
import { getTestById , setUserAnswerToLocalStorage, getUserGivenAnswer} from "../functions/getAllList";
import { v4 as uuid } from "uuid";
import MarginTop from "../components/MarginTop";
import Navigation from "../components/Navigation";
import QuestionBlock from "../components/QuestionBlock";
import classes from "../styles/test.module.css"
import {shuffle} from "../functions/shuffle"
function TakeTest({setMarks}) {
  const navigate = useNavigate()
  const { testId } = useParams();
  const [visibleQues,setVisibleQues] = useState(1)
  const [question,setQuestion] = useState([])
  const [userAnswer,setUserAnswer] = useState(getUserGivenAnswer())
  const [correctAnswer,setCorrectAnswer] = useState([])
  useEffect(()=>{
    const data = getTestById(testId);
    data.test.map(item=>{
      shuffle(item.answers);
      return item
    })
  
    setQuestion([...data.test])
    let correct = []
    for(let item of data.test){
      correct.push(item.correct_answer)
    }
    setCorrectAnswer(correct)
  },[testId])
  useEffect(() => {
    const data = getTestById(testId);
    if(!userAnswer.length){
      setUserAnswer([...Array(data.test.length).keys()])
    }
    else{
      setUserAnswerToLocalStorage(userAnswer)
    }
  }, [testId,userAnswer]);
  const calculateMarks=()=>{
    let marks = correctAnswer.reduce((acc,item,index)=>{
      if(item === userAnswer[index]){
        return acc+=1
      }
      return acc
    },0)
    let total = question.reduce((acc,item)=>{
      return acc+=item.marks
    },0)
    setMarks({marks,total})
    console.log(marks,total)
    const password = prompt("Enter The Password !!!")
    if(password==='Admin'){
      navigate("/results")
    }
    else{
      alert("Wrong Password try Again !!!")
    }
  }

  return (
    <div>
      <MarginTop val={2} />
      <Heading data="Best Of Luck For Your Exam" />
      <FancyHeading data="Questions" />
      {question.length ? (
        <>
        
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
            {question.map((item, index) => {
              return <QuesButton num={index + 1} key={uuid()} active={(index+1)===visibleQues?true:false} setVisibleQues={setVisibleQues} />;
            })}
            </div>
            <MarginTop val={4} />
            <FancyHeading data={`Question ${visibleQues} (Marks:${question[visibleQues-1].marks})`} />
            <QuestionBlock data={question[visibleQues-1]} index={visibleQues-1} setUserAnswer={setUserAnswer} userAnswer={userAnswer}/>
            <Navigation setVisibleQues={setVisibleQues} max={question.length}/>
            <button className={classes.submit} onClick={calculateMarks}>Submit</button>
        </>
      ) : null}
      
    </div>
  );
}

export default TakeTest;

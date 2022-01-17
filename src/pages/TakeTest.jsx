import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FancyHeading from "../components/FancyHeading";
import Heading from "../components/Heading";
import QuesButton from "../components/QuesButton";
import { getTestById } from "../functions/getAllList";
import { v4 as uuid } from "uuid";
import MarginTop from "../components/MarginTop";
import Navigation from "../components/Navigation";
import QuestionBlock from "../components/QuestionBlock";
function TakeTest() {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);
  const [visibleQues,setVisibleQues] = useState(1)
  const [question,setQuestion] = useState()
  const [useAnswer,setUserAnswer] = useState([])
  const [correctAnswer,setCorrectAnswer] = useState([])
  useEffect(() => {
    const data = getTestById(testId);
    setTestDetails({
      ...data[0],
    });
    setQuestion([...data[0].test])
  }, [testId]);
  useEffect(()=>{
    console.log(visibleQues)
  },[visibleQues])
  return (
    <div>
      <Heading data="Best Of Luck For Your Exam" />
      <FancyHeading data="Questions" />
      {testDetails ? (
        <>
        
            <div style={{display:'flex',justifyContent:'center'}}>
            {testDetails.test.map((item, index) => {
              return <QuesButton num={index + 1} key={uuid()} active={(index+1)===visibleQues?true:false} setVisibleQues={setVisibleQues} />;
            })}
            </div>
            <MarginTop val={4} />
            <FancyHeading data={`Question ${visibleQues}`} />
            <QuestionBlock data={question[visibleQues-1]} />
            <Navigation setVisibleQues={setVisibleQues} max={testDetails.test.length}/>
        </>
      ) : null}
      
    </div>
  );
}

export default TakeTest;

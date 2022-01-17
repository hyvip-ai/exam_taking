import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import Heading from '../components/Heading'
import classes from "../styles/result.module.css"
import {clearUserAnswer} from "../functions/getAllList"
import {useNavigate} from 'react-router-dom'
import Percentage from '../components/Percentage'
function Result({marks}) {
    const navigate = useNavigate()
    useEffect(()=>{
        clearUserAnswer()
    },[])
    return (
        <div className={classes.result_card}>
            <Heading data={`Your Score is ${marks.marks} out of ${marks.total}`} />
            <Percentage marks={marks.marks} total={marks.total} />
            <button className={classes.home_btn} onClick={()=>{navigate("/")}}>Go Home</button>
        </div>
    )
}

export default Result

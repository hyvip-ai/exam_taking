import React from 'react'
import Heading from "../components/Heading"
import {useParams,useNavigate} from 'react-router-dom'
import classes from '../styles/newTest.module.css'
function CreationSuccess() {
    const navigate = useNavigate()
    const {subject,id} = useParams()
    return (
        <React.Fragment>
            <Heading data={`A new Test is created for subject : ${subject} with an id of ${id}`}/>
            <button className={classes.step_btn} onClick={()=>{navigate("/")}}>Go Home</button>
        </React.Fragment>
    )
}

export default CreationSuccess

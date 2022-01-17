import React from 'react'
import classes from "../styles/test.module.css"
function QuesButton({num,active,setVisibleQues}) {
    return (
        <button onClick={()=>{setVisibleQues(num)}} className={`${classes.ques_button} ${active?classes.active:null}`}>
            Question {num}
        </button>
    )
}

export default QuesButton

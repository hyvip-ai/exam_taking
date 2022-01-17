import React from  'react'
import {v4 as uuid} from 'uuid'
import classes from "../styles/test.module.css"
function QuestionBlock({data}) {
    console.log(data)
    return (
        <div className={ classes.question_block}>
            <p dangerouslySetInnerHTML={{__html:data.question}}>
               
            </p>
            <div>
                {
                    data.answers.map(item=>{
                        return (<div key={uuid()}>
                                <input type="radio" name="check" id={item} checked={item===data.correct_answer}/>
                                <label htmlFor={item} dangerouslySetInnerHTML={{__html:item}}></label>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default QuestionBlock

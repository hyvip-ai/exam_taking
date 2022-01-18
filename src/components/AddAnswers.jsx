import React from 'react'
import AddAnswerColumn from './AddAnswerColumn'
import {v4 as uuid} from 'uuid'
function AddAnswers({test,setTestData}) {
    return (
        <React.Fragment>
                {
                    test.test.map((item,index)=>{
                       return <AddAnswerColumn id={index} key={uuid()} data={item} setTestData={setTestData} />
                    })
                }
        </React.Fragment>
    )
}

export default AddAnswers

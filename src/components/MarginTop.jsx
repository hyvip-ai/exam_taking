import React from 'react'
import {v4 as uuid} from 'uuid'
function MarginTop({val}) {
    return (
        <>
         {
             [...Array(val).keys()].map(item=><br key={uuid()}/>)
         } 
        </>
    )
}

export default MarginTop

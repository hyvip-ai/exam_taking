import React from 'react'
import Heading from './Heading'

function Percentage({marks,total}) {

    return (
        <Heading data={`Percentage : ${(marks/total)*100}%`} />
    )
}

export default Percentage

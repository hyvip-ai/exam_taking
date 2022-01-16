import React from 'react'
import classes from '../styles/category.module.css'
function Heading({data}) {
    return (
        <>
            <h1 className={classes.heading}>
                {data}</h1>   
        </>
    )
}

export default Heading

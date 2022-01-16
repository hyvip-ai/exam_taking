import React from 'react'
import Heading from './Heading'
import TestId from './TestId'
import classes from '../styles/category.module.css'
function CategoryList({data}) {
    return (
        <React.Fragment>
               <div className={classes.my_card}>
               <Heading data={data.category} />
                <TestId data={data.idArray} />
               </div>
        </React.Fragment>
    )
}

export default CategoryList

import React from 'react'
import classes from "../styles/styles.module.css"
function FancyHeading({data}) {
    return (
        <p className={classes.fancyHead}>
            {
                data
            }
        </p>
    )
}

export default FancyHeading

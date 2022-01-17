import React from 'react'
import {Link} from 'react-router-dom'
import classes from '../styles/category.module.css'
function TestId({data}) {
    return (
        <React.Fragment>
            {
                data.map(item=>{
                    return <Link key={item} to={`/test/info/${item}`}>
                        <p className={classes.link}>
                            {item}
                        </p>
                    </Link>
                })
            }
        </React.Fragment>
    )
}

export default TestId

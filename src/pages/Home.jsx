import React from 'react'
import classes from "../styles/home.module.css"
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className={classes.home}>
            <button className='btn btn-outline-info'><Link to={"/all"}>Get all Test Id</Link></button>
            <button className='btn btn-outline-primary'><Link to={"/new"}>Create a New Test</Link></button>
        </div>
    )
}

export default Home

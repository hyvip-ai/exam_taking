import React,{useEffect, useState} from 'react'
import CategoryList from '../components/CategoryList'
import {getCategoriesFromLocalStorage} from "../functions/getAllList"
import {v4 as uuid} from 'uuid'
import Heading from '../components/Heading'
function All() {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        let data = getCategoriesFromLocalStorage()
        console.log(data)
        setCategories(prev=>{
            if(data){
                return [...prev,...data]
            }
            return [...prev]
        })
    },[])
    return (
        <React.Fragment>
                {
                   categories.length? categories.map(item=>{
                    return <CategoryList key={uuid()} data={item}/>
                }):<Heading data={"No Tests Presnsts At this moment please add some tests and try again"} />
                }
        </React.Fragment>
    )
}

export default All

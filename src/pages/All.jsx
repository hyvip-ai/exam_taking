import React,{useEffect, useState} from 'react'
import CategoryList from '../components/CategoryList'
import {getCategoriesFromLocalStorage} from "../functions/getAllList"
import {v4 as uuid} from 'uuid'
function All() {
    
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        let data = getCategoriesFromLocalStorage()
        console.log(data)
        setCategories(prev=>{
            return [...prev,...data]
        })
    },[])
    return (
        <React.Fragment>
                {
                    categories.map(item=>{
                        return <CategoryList key={uuid()} data={item}/>
                    })
                }
        </React.Fragment>
    )
}

export default All

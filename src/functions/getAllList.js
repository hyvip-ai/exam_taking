
function getTestFromLocalStorage(){
    let testData = JSON.parse(localStorage.getItem("test"))
    return testData
}

function getCategoriesFromLocalStorage(){
    let categories = JSON.parse(localStorage.getItem('categories'))
    return categories
}
function getTestById(id){
    let testData = JSON.parse(localStorage.getItem("test"))
    const requiredTest = testData.filter((item)=>{return item.id === id})
    return requiredTest
}
function setToLocalStorage(data){
    let previousCategories = JSON.parse(localStorage.getItem('categories')) || []
    console.log(previousCategories.some(item=>item.category === data.subject))
    let newCategories = []
    if(!previousCategories.some(item=>item.category === data.subject)){
        let categoryObject = {
            category:data.subject,
            idArray:[data.id]
        }
       newCategories = [...previousCategories,categoryObject]
    }
   else{
     
    newCategories = previousCategories.map(item=>{
        return item.category===data.subject?{...item,idArray:[...new Set([...item.idArray,data.id])]}:{...item}
    })
   
   }
    localStorage.setItem("categories",JSON.stringify(newCategories))

    let previousTest = JSON.parse(localStorage.getItem("test")) || []
    let newTest = []
    let includes = previousTest.some(item=>{
        return item.id === data.id
    })
    newTest = includes?[...previousTest]:[data]
    let newTestData = JSON.stringify(newTest)
    localStorage.setItem("test",newTestData)
}

export {getTestFromLocalStorage,setToLocalStorage,getCategoriesFromLocalStorage,getTestById}
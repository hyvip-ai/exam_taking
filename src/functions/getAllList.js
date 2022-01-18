function getCategoriesFromLocalStorage(){
    let categories = JSON.parse(localStorage.getItem('categories'))
    return categories
}
function getTestById(id){
    let testData = JSON.parse(localStorage.getItem("test"))
    const requiredTest = testData.filter((item)=>{return item.id === id})
    return requiredTest[0]
}
function setToLocalStorage(data){
    let previousCategories = JSON.parse(localStorage.getItem('categories')) || []
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
function setUserAnswerToLocalStorage(data){
    localStorage.setItem('answers',JSON.stringify(data))
}
function getUserGivenAnswer(){
    return JSON.parse(localStorage.getItem('answers'))|| []
}
function clearUserAnswer(){
    localStorage.removeItem('answers')
}
export {setToLocalStorage,getCategoriesFromLocalStorage,getTestById,setUserAnswerToLocalStorage,getUserGivenAnswer,clearUserAnswer}
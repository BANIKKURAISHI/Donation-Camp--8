
const getDonate=()=>{
    const storeDonate=localStorage.getItem('donateItem')
    if(storeDonate){
        return JSON.parse(storeDonate)
    }
    return[]
}






const saveDonate= id =>{
    const save=getDonate()
    save.push(id)
    localStorage.setItem('donateItem',JSON.stringify(save))


}


export {saveDonate,getDonate}
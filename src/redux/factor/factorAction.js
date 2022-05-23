const getAddres=(addres)=>{
    return{
        type:"GET_ADDRES",
        addres:addres
    }
}
const checkAddress=(addres)=>{
    return{
        type:"CHECKED_ADDRES",
        check:addres
    }
}
export {getAddres,checkAddress}
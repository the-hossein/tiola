const persianNumber = (number) => {
 
   
   const time=new Number(number).toLocaleString('fa-ir') 
    return time
};

export default persianNumber;

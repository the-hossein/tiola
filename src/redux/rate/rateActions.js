const chngeRate = (name, amount) => {
  return {
    type: "CHANGE_RATE",
    name: name,
    rate: amount
  };
};
const resetRate = () => {
    return {
      type: "RESER_RATE",
   
    };
  };
  
export { chngeRate,resetRate };

const writeTrue = () => {
  return {
    type: "WRITECM_TRUE"
  };
};
const writeFalse = () => {
  return {
    type: "WRITECM_FALSE"
  };
};

export { writeTrue, writeFalse };

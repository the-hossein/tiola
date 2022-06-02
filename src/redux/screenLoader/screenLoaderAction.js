const screenLoader = (status) => {
  return {
    type: "SCREEN_LOADER",
    status: status
  };
};
const loader = (status) => {
  return {
    type: "LOADER",
    status: status
  };
};
export { screenLoader, loader };

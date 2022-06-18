import React, { useEffect } from "react";

const Error405 = () => {
  useEffect(() => {
    window.location.reload();
  }, []);
  return <div></div>;
};

export default Error405;

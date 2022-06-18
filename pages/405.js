import React, { useEffect } from "react";
import ScreenLoader from "../src/tools/screenLoader/ScreenLoader";

const Error405 = () => {
  useEffect(() => {
    window.location.reload();
  }, []);
  return (
    <div>
      <ScreenLoader />
    </div>
  );
};

export default Error405;

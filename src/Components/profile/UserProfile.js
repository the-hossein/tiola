import React from "react";
import ProFileSection from "./ProFileSection";
import Stepper from "./Stepper";
import UserAction from "./UserAction";
import style from "./UserProfile.module.css";
const UserProfile = () => {
  return (
    <section>
      <div className="container mt-5 mb-5">
        <ProFileSection />
        <Stepper active={2} />
        <UserAction />
      </div>
    </section>
  );
};

export default UserProfile;

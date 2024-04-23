import React from "react";
import "./Main.css";
import MainList from "./MainList/MainList";

const Main = () => {
  return (
    <section className="main-container">
      <div className="main-con">
        <MainList/>
      </div>
    </section>
  );
};

export default Main;

import React from "react";
import "./stylehome.css";

const Home = () => {
  return (
    <div className="bgimage">
      <h1 className="yourhome"> Yourcamp</h1>
      <a href="./component/login.jsx">
        <h3 className="loginhome">login</h3>
      </a>
    </div>
  );
};

export default Home;

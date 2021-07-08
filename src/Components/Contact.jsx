import React from "react";
import Card from "./Cards";
import "./styleinfo.css";

const App = () => {
  return (
    <div className="abhi">
      <bar />
      <Card
        imgsrc="/images/gulshan1.jpg"
        sname="GULSHAN MEHTA"
        scholar="202120113"
        link=""
      />

      <Card
        imgsrc="/images/ajit.jpg"
        sname="AJIT KUMAR"
        scholar="202120044"
        link=""
      />
    </div>
  );
};

export default App;

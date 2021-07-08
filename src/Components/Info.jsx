import React from "react";
import Card from "./Cards";
import "./styleinfo.css";

const App = () => {
  return (
    <div className="abhi">
      <bar />
      <h1 className="heading_style">list of top 5 yourcamp </h1>
      <Card
        imgsrc="/images/img1.jpg"
        title="your camp 1"
        sname="Chandratal Lake"
        link="https://curlytales.com/get-a-lake-view-and-a-mountain-view-from-your-tent-at-this-camping-spot/"
      />

      <Card
        imgsrc="/images/img2.jpg"
        title="your camp 1"
        sname="Kalaroos Caves"
        link="https://curlytales.com/kalaroos-caves-in-kashmir-could-possibly-be-secret-tunnels-to-russia/"
      />

      <Card
        imgsrc="/images/img3.jpg"
        title="your camp 1"
        sname="Pushkar"
        link="https://curlytales.com/pushkar-camel-festival-what-to-expect/"
      />

      <Card
        imgsrc="/images/img4.jpg"
        title="your camp 1"
        sname="Eco Camp Nameri"
        link="https://curlytales.com/camping-emerges-as-the-most-popular-way-to-travel-post-lockdown/"
      />

      <Card
        imgsrc="/images/img5.jpg"
        title="your camp 1"
        sname="Coorg Planter’s"
        link="https://curlytales.com/indulge-in-white-water-river-rafting-in-coorg/"
      />
    </div>
  );
};

export default App;

import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category"> </span>
          <h4 className="card__title"> {props.sname} </h4>
          <h5 className="card__title"> {props.scholar} </h5>
          <a href={props.link} target="_blank">
            <button>more info</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

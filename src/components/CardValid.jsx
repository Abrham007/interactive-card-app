import React from "react";

function CardValid(props) {
  return (
    <div className="card-valid">
      <img
        className="card-valid__img"
        src="./assets/images/icon-complete.svg"
        alt=""
      ></img>
      <div className="card-valid__text">
        <h1 className="card-valid__heading text-L">Thank you!</h1>
        <p className="card-valid__info text-M">We've added your card details</p>
      </div>

      <button className="btn">Continue</button>
    </div>
  );
}

export default CardValid;

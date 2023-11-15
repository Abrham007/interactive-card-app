import React from "react";

function CardFront(props) {
  return (
    <div className="card-front">
      <img
        className="card-front__logo"
        src="./assets/images/card-logo.svg"
        alt=""
      ></img>
      <p className="card-front__num text-L">{props.cardInfo.cardNumber}</p>
      <div className="card-front__info">
        <p className="card-front__name text-S">{props.cardInfo.name}</p>
        <p className="card-front__date text-S">
          <span>{props.cardInfo.expireMonth}</span>/
          <span>{props.cardInfo.expireYear}</span>
        </p>
      </div>
    </div>
  );
}

export default CardFront;

import React from "react";

function CardFront() {
  return (
    <div className="card-front">
      <img
        className="card-front__logo"
        src="./assets/images/card-logo.svg"
      ></img>
      <p className="card-front__num text-L">0000 0000 0000 0000</p>
      <div className="card-front__info">
        <p className="card-front__name text-S">Jane Appleseed</p>
        <p className="card-front__date text-S">00/00</p>
      </div>
    </div>
  );
}

export default CardFront;

import React from "react";

function CardBack(props) {
  return (
    <div className="card-back">
      <p className="card-back__cvc text-S">{props.cardInfo.cvcNumber}</p>
    </div>
  );
}

export default CardBack;

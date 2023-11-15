import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardForm from "./CardForm";
import CardValid from "./CardValid";

function App() {
  const [cardInfo, setCardInfo] = useState({
    name: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    expireMonth: "00",
    expireYear: "00",
    cvcNumber: "000",
  });
  const [isValid, setValid] = useState(false);

  function onSubmit(data) {
    setCardInfo(data);
    setValid(true);
  }
  return (
    <div className="main">
      <div className="card-box">
        <CardFront cardInfo={cardInfo} />
        <CardBack cardInfo={cardInfo} />
      </div>
      {isValid ? <CardValid /> : <CardForm onSubmit={onSubmit} />}
    </div>
  );
}

export default App;

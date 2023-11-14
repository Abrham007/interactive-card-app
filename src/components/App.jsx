import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import CardForm from "./CardForm";

function App() {
  return (
    <div className="main">
      <div className="card-box">
        <CardFront />
        <CardBack />
      </div>

      <CardForm />
    </div>
  );
}

export default App;

import React from "react";

function Card(props) {
  return (
    <div>
      <h5 class="card-title text-center fs-4 fw-bold">{props.title} </h5>
      <p class="card-text fw-bold cardplan">{props.description}</p>
    </div>
  );
}

export default Card;

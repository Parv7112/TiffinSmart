import React from "react";

function CardTeam(props) {
  return (
    <div>
      <img
        src={props.imgsrc}
        alt="Rounded Image"
        class="rounded-circle img-fluid"
      />
      <h5 className="fw-bold text-center fs-5 pt-4">{props.title}</h5>
    </div>
  );
}

export default CardTeam;

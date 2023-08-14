import React from "react";

function CardChoose(props) {
  return (
    <div>
      <div className="choosecontent">
        <div className="circle">
          <h2>
            <img className="Icon" src={props.imgsrc}></img>
          </h2>
        </div>

        <div className="square">
          <h2 className="fw-bolder fs-3 pt-5 mb-1">{props.title}</h2>
          <p className="para fontweight pt-5 fw-bold">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardChoose;

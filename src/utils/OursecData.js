import React from "react";

function OursecData(props) {
  return (
    <div>
      <div className="card py-4">
        <img
          src={props.imgsrc}
          className="card-img-top w-50 p-4 mx-auto d-block"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center fs-3 pb-3">{props.title}</h5>
          <p className="card-text text-left ourpara fs-5">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OursecData;

import React from "react";

const TiffinDetail = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center TiffinDetailHead">Tiffin Details</h2>
        <div className="row">
          <div className="tiffinDetailBack pt-4">
            <div className="col-12">
              <div className="detailCircle m-auto d-flex justify-content-center">
                <img
                  src="./assets/images/TiffinDetail.png"
                  className="img-fluid text-center detailImage"
                  alt=""
                />
              </div>
            </div>
            <p className="text-center spanDetail1">Your Lunch is on the way</p>

            <div className="container h-100 ">
              <div className="row d-flex justify-content-center h-100">
                <div className="col-12">
                  <div className="card-body-content">
                    <div className="row d-flex justify-content-between tiffinDetailContent align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <div className="detailCircle1 m-auto d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/images/Icons3.png"
                            className="img-fluid text-center detailImage"
                            alt="temperature_image"
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3 col-sm col">
                        <h6 className="spanDetail ">TEMPERATURE</h6>
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-2 col">
                        <button className="btnDetail btn-lg">&deg;C</button>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-between mt-3 align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <div className=" detailCircle1  m-auto d-flex justify-content-center align-items-center">
                          <img
                            src="./assets/images/Icons1.png"
                            className="img-fluid text-center detailImage"
                            alt="weight_image"
                          />
                        </div>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3 col-sm col">
                        <h6 className="spanDetail ">Weight</h6>
                      </div>

                      <div className="col-md-3 col-lg-3 col-xl-2 col ">
                        <button className="btnDetail btnDetail1 btn-lg">KG</button>
                      </div>
                    </div>
                  </div>
                  <p className="text-center spanDetail1">
                    Thank You for Your Order! <br /> You can track the delivery
                    in the order section
                  </p>
                  <p className="text-center estimateTime">
                    Estimated Delivery Time: 20 Minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row d-flex justify-content-center align-items-center m-auto">
              <div className="col text-end">
                <button className="btnTrackOrder">TRACK MY ORDER</button>
              </div>
              <div className="col">
                <button className="btnCancel" data-bs-toggle="modal" data-bs-target="#orderCancel">Cancel Your Order</button>
              </div>
              <div className="modal fade" id="orderCancel" tabindex="-1" aria-labelledby="orderCancelLabel" aria-hidden="true">
                <div className="modal-dialog cancel-order-modal">
                  <div className="modal-content">
                    <div className="modal-body d-flex justify-content-center">
                      <h1 className="modal-title fs-5 fw-bolder mt-2" id="orderCancelLabel">Are you sure you want to cancel this order?</h1>
                    </div>
                    <div className="modal-body d-flex justify-content-center">
                      <button type="button" className="btnCancel me-4 px-5 mb-4" data-bs-dismiss="modal">CANCEL</button>
                      <button type="button" className="btnTrackOrder px-5 mb-4">CONFIRM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="text-center mt-4"><strong>Note:</strong> If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</span>
        </div>
      </div>
    </>
  );
};

export default TiffinDetail;

import React from "react";

const UserPayment = () => {
  return (
    <div id="payment">
      <p className="fw-bolder adprofiletext">Payment</p>
      <div className="adprofile container-fluit">
        <div className="adprofile card rounded-0 border-0">
          <div className="mx-5">
            <div
              className="card w-100 rounded-1 mt-5 py-4"
              style={{ maxWidth: "650px" }}
            >
              <div className="card-body d-flex">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-2">
                      <img
                        src="/assets/images/visa.png"
                        className="img-fluid pb-3 mt-2"
                        alt="..."
                        style={{ height: "70px" }}
                      />
                    </div>
                    <div className="col-lg-8 col-md-4 ">
                      <div className="">
                        <h3 className="fw-bold">XXXX-XXXXXXXX-9008</h3>
                        <h3 className="">VALID TILL 12/2023</h3>
                      </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-end">
                      <h3
                        className="text-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#orderCancel"
                      >
                        Delete
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="orderCancel"
              tabindex="-1"
              aria-labelledby="orderCancelLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog cancel-order-modal">
                <div className="modal-content">
                  <div className="modal-body d-flex justify-content-center">
                    <h1
                      className="modal-title fs-5 fw-bolder mt-2"
                      id="orderCancelLabel"
                    >
                      Are you sure you want to cancel this order?
                    </h1>
                  </div>
                  <div className="modal-body d-flex justify-content-center">
                    <button
                      type="button"
                      className="btnCancel me-4 px-5 mb-4"
                      data-bs-dismiss="modal"
                    >
                      CANCEL
                    </button>
                    <button type="button" className="btnTrackOrder px-5 mb-4">
                      CONFIRM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPayment;

import React from "react";
import { HiCurrencyRupee } from "react-icons/hi";

const UserWallet = () => {
  return (
    <div id="wallet">
      <p className="fw-bolder adprofiletext">Wallet</p>
      <div className="adprofile card rounded-0 border-0">
        <div className="px-2 px-md-5">
          <div className="card w-100  userwalletcard rounded-1 mt-5 py-4  justify-content-center">
            <div className="card-body d-flex align-items-center">
              <div className="container-md">
                <div className="row">
                  <div className="col-lg-8">
                    <h4 className="wallethead mt-2 mx-5">Available Balance</h4>
                    <hr className="walletline mx-5"></hr>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-end align-items-center">
                    <img
                      src="/assets/images/userwallet.png"
                      className="img-fluid pb-3 mt-2 userwallet"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-auto ps-5 ms-2">
                    <HiCurrencyRupee className="rupeecircle"/>
                  </div>
                  <div className="col d-flex align-items-center">
                    <h5 className="me-3 mb-3 rupeehead">0.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <hr className="bottomhr w-100 border border-danger border border-5 fw-bold"></hr>
          </div>
          <div className="pb-5 ">
            <p className="text-danger fw-bold">
              Tifinsmart wallet can be used for all your orders
            </p>
          </div>

          <h3 className="text-danger fw-bold">Add Balance</h3>
          <h3 className="text-danger fw-bold">Amount</h3>

          <div
            className="card w-100 rounded-1 mt-5 py-4"
            style={{ maxWidth: "900px" }}
          >
            <div className="card-body d-flex">
              <div className="container">
                <div className="row"></div>

                <p className="fw-bold">
                  <span className="fs-3">
                    <i className="bi bi-currency-rupee"></i>0.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWallet;

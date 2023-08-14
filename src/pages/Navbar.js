import React from "react";

function Navbar() {
 
  return (
    <div>
      <div className="bg">
        <div className="container-fluid hero-header bannerhead">
          <div className="container-fluid  ">
            <div className="row align-items-center pt-5 flex-wrap-reverse">
              <div className="col-lg-2 text-center text-lg-start">
                <img
                  className="w-100 h-50 d-none d-xl-block"
                  src="/assets/images/foodimg.png"
                ></img>
              </div>

              <div
                className="col-lg-4 text-center text-lg-start"
                style={{ paddingBottom: "50px" }}
              >
                <h1 className="display-5 fw-bolder text-dark animated slideInLeft py-2">
                  Are You Hungry?
                </h1>
                <h1 className="text-dark animated slideInLeft py-2">
                  Don't Wait ,eat smart.
                </h1>
                <p className="text-dark animated slideInLeft mb-4 py-2 fs-5">
                  Free delivery when you order healthy food.
                </p>
                <a
                  href="/subscriptionDetails"
                  className="btn btn-light py-sm-2 px-sm-3 me-3 animated slideInLeft fw-bolder"
                >
                  SUBSCRIPTION
                </a>

                <a
                  href="/meal"
                  className="btn btn-dark py-sm-2 px-sm-4 me-2 animated slideInLeft fw-bold"
                >
                  ORDER NOW
                </a>
              </div>
              <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                <img
                  className="img-fluid h-100 w-100"
                  src="/assets/images/bannerimage.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

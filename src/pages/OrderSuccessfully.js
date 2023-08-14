import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function OrderSuccessfully() {
  const {pathname} = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
      <div className="container my-card-container">
        <section className="my-4 d-flex justify-content-center align-items-center ">
          <div className="">
            <div className="text-center">
              <img
                className="card-img-top w-50"
                src="/assets/images/ordersuccessfully.png"
                alt="CardImage"
              />
            </div>
            <div className="card-body">
              <div className="form-group text-center text-danger fw-bolder py-5">
                <h2>ORDER DELIVERED</h2>
                <h2>SUCCESSFULLY</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OrderSuccessfully;

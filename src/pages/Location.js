import React, { useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import LocationCard from "../components/LocationCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDeliverhere } from "../features/slices/deliverhereSlice";
import { useNavigate } from "react-router-dom";

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const dispatch = useDispatch();
const navigate = useNavigate(); 

  const handleDeliverHere = (element) => {
    dispatch(setDeliverhere(element));
    navigate("/cart");
  };

  

  return (
    <>
      <div className="container mb-4 marginContainer1 h-100 py-2">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="cardContent rounded-3 cartDivContent">
              <div className="card-body-content ">
                <div className="row d-flex deliveryContent1 justify-content-between">
                  <div className="col p-3">
                    <h3 className="locationcon mx-3 fw-bold regular1 regularMedia text-nowrap d-flex align-items-center">
                      <MdLocationPin className="fs-4 mx-1" />
                      Choose a Delivery Address
                    </h3>
                    <h5 className="fw-bold align-items-center ms-md-5 ">
                      Multiple address in this location
                    </h5>
                  </div>

                  {/* <div className="col-md col-lg col-xl col-sm col text-end">
                    <Link
                      to="/Cart"
                      className="fw-bold underline-none regular1 regularChange fs-6 align-items-center me-4"
                      style={{ textDecoration: "none" }}
                    >
                      Continue to Cart
                    </Link>
                  </div> */}

                </div>
                <div className="container">
                  <div className="row ">
                    <LocationCard onDeliverHere={handleDeliverHere} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;

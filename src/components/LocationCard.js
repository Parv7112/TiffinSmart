import React, { useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { BiCameraHome,BiLocationPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { showUserLocation } from "../features/slices/locationSlice";
import { useNavigate } from "react-router-dom";

const LocationCard = ({ onDeliverHere }) => {
  const { location } = useSelector((state) => state.location);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showUserLocation());
  }, [dispatch]);

  

  return (
    <>
      <div className="container p-2">
        <div className="row d-flex">
          {location.map((element) => (
            <div key={element.id} className="col-xl-4  col-md-6 col-sm-12 mb-4 py-3">
              <div className="card cartDivContent1">
                <div className="card-body">
                  <h5 className="card-title  mx-3">
                    {element.addressType === "home" ? (
                      <IoMdHome
                        className="fs-3 mb-1 me-1 "
                        style={{ color: "#f83838" }}
                      />
                    ) : element.addressType === "work" ? (
                      <MdWork
                        className="fs-3  mx-1 mb-1 "
                        style={{ color: "#f83838" }}
                      />
                    ) : (
                      <BiCameraHome
                        className="fs-3  me-1 mb-1 "
                        style={{ color: "#f83838" }}
                      />
                    )}
                    {element.addressType}
                  </h5>
                  <p className="mx-4 fw-bold">
                    <div className="mb-2">{element.name}</div>
                    {element.address}, {element.pincode}
                  </p>
                  <p className="text-muted mx-4 fw-bold">
                    {element.city}, {element.state}
                  </p>
                  {onDeliverHere && (
                    <button
                      className="locationbtns mx-4"
                      onClick={() => onDeliverHere(element)}
                    >
                      Deliver Here
                    </button>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
          <div className="col-xl-4  col-md-6 col-sm-12 mb-4 py-3">
            <div className="card cartDivContent1 w-100">
              <div className="card-body text-center pt-4 pb-2">
                <h4 className="card-title  text-dark mb-0">
                  <BiLocationPlus className="fs-2  mb-1 "
                        style={{ color: "#f83838" }} /> Add A New Address
                </h4>
                <p className="fw-semibold text-muted">Create a new address entry.</p>
                <button
                  className="locationbtns mx-4 "
                  onClick={() => {
                    navigate("/addlocation");
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCard;

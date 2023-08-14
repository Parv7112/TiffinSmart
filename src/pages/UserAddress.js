import React, { useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { BiCameraHome, BiLocationPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { showUserLocation } from "../features/slices/locationSlice";
import { useNavigate } from "react-router-dom";
import { deleteUserLocation } from "../features/slices/locationSlice";

const UserAddress = () => {
  const { location } = useSelector((state) => state.location);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showUserLocation());
  }, [dispatch]);

  const handleEdit = (element) => {
   navigate("/addlocation", { state: { element } })
   
  };

  const handleDelete = (id) => {
    dispatch(deleteUserLocation(id));
  };

  return (
    <div id="address">
      <p className="fw-bolder adprofiletext"> Manage Address</p>
      <div className="adprofile  py-4 px-2">
        <div className="container p-2">
          <div className="row d-flex">
            {location.map((element) => (
              <div
                key={element.id}
                className="col-xl-4  col-md-6 col-sm-12 mb-4 py-3"
              >
                <div className="card cartDivContent1" style={{backgroundColor:"#d2dbea1f"}}>
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
                    <p className=" mx-4 fw-bold">
                      <div className="mb-2">{element.name}</div>
                      {element.address}, {element.pincode}
                    </p>
                    <p className="text-muted mx-4 fw-bold">
                      {element.city}, {element.state}
                    </p>

                    <button
                      className="locationbtns me-3 ms-4 mb-3 "
                      onClick={() => handleEdit(element)}
                    >
                      EDIT
                    </button>

                    <button
                      className="locationbtns me-3 ms-3 mb-3 fw-bold "
                      style={{ color: "#f83838", backgroundColor: "white" }}
                      data-bs-toggle="modal"
                      data-bs-target="#addressCancel"
                    >
                      DELETE
                    </button>
                    <div
                      className="modal fade"
                      id="addressCancel"
                      tabindex="-1"
                      aria-labelledby="addressCancelLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog cancel-order-modal">
                        <div className="modal-content">
                          <div className="modal-body d-flex justify-content-center">
                            <h1
                              className="modal-title fs-5 fw-bolder mt-2"
                              id="addressCancelLabel"
                            >
                              Are you sure you want to delete this address?
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
                            <button
                              type="button"
                              className="btnTrackOrder px-5 mb-4"
                              onClick={() => handleDelete(element.id)}
                              data-bs-dismiss="modal"
                            >
                              CONFIRM
                            </button>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-4  col-md-6 col-sm-12 mb-4 py-3">
              <div className="card cartDivContent1 w-100" style={{backgroundColor:"#d2dbea1f"}}>
                <div className="card-body text-center">
                  <h4 className="card-title  text-dark mb-0">
                    <BiLocationPlus
                      className="fs-2  mb-1 "
                      style={{ color: "#f83838" }}
                    />{" "}
                    Add A New Address
                  </h4>
                  <p className="fw-semibold text-muted">
                    Create a new address entry.
                  </p>
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
      </div>
    </div>
  );
};

export default UserAddress;

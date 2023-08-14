import React, { useEffect } from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUserLocation, updateUserLocation } from "../features/slices/locationSlice";
import { useLocation, useNavigate } from "react-router-dom";

const AddLocation = () => {
  const { pathname, state } = useLocation();


  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      pincode: "",
      altMobile: "",
      city: "",
      state: "",
      address: "",
      addressType: "",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if in Edit mode (i.e., data is available in the state)
    if (state?.element) {
      // Get the data passed via state from location
      const editLocationData = state.element;

      // If data is available, set form values with the data of the location being edited
      setValue("name", editLocationData.name);
      setValue("mobile", editLocationData.mobile);
      setValue("pincode", editLocationData.pincode);
      setValue("altMobile", editLocationData.altMobile);
      setValue("city", editLocationData.city);
      setValue("state", editLocationData.state);
      setValue("address", editLocationData.address);
      setValue("addressType", editLocationData.addressType);
    }
  }, [pathname, state,setValue]);

  

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const useCurrentLocation = () => {
    // Code to fetch the current location goes here
    const currentLocation = "51, Electronic Complex, Perdesipura Indore";
    const city = "Indore";
    const state = "Madhya pradesh";
    const pincode = 452020;
    // Replace with actual code to fetch the current location
    setValue("address", currentLocation);
    setValue("city", city);
    setValue("state", state);
    setValue("pincode", pincode);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = (data, e) => {
    e.preventDefault();

    // Assuming you have a condition to check whether the component is in Add or Edit mode
    if (state?.element) {
      dispatch(updateUserLocation({...state.element, ...data}));
      console.log({...state.ele, ...data})
      navigate("/accountdetails");
    } else {
      // Perform create action for "Add" mode
      dispatch(createUserLocation(data));
      navigate("/location");
    }

    
  };

  return (
    <>
      <div className="container mb-5 h-100 align-items-center marginContainer">
        <div className="rounded-3 cartDivContent  mt-5">
          <div className="card-body-content p-3">
            <div className="row d-flex justify-content-start">
              <div className="col-12 col-lg-4 col-md-6 col-sm-12 p-3">
                <h4 className="fw-bold text-nowrap deliveryLocation">
                  <MdOutlineMyLocation className="mx-2" />
                  {state?.element ? "Update" : "Add"} Delivery Location
                </h4>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-8">
                  <div className="container">
                    <div className="row d-flex justify-content-start align-items-center">
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="nameInput"
                            className="inputExampleLabel"
                          >
                            Name*
                          </label>
                          <Controller
                            control={control}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control AddLocationInput"
                                name="name"
                                placeholder="Enter Your Name"
                                {...field}
                              />
                            )}
                          />
                          {errors.name && (
                            <div className="error-message text-danger fw-bold">
                              {errors.name.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="mobileInput"
                            className="inputExampleLabel"
                          >
                            Mobile No.*
                          </label>
                          <Controller
                            control={control}
                            name="mobile"
                            rules={{
                              required: "Mobile No. is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid mobile number",
                              },
                            }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control AddLocationInput"
                                name="mobile"
                                placeholder="Mobile No."
                                {...field}
                              />
                            )}
                          />
                          {errors.mobile && (
                            <div className="error-message text-danger fw-bold">
                              {errors.mobile.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-start align-items-center">
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="pincodeInput"
                            className="inputExampleLabel"
                          >
                            Pincode*
                          </label>
                          <Controller
                            control={control}
                            name="pincode"
                            rules={{
                              required: "Pincode is required",
                              pattern: {
                                value: /^[0-9]{6}$/,
                                message: "Invalid pincode",
                              },
                            }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control AddLocationInput"
                                name="pincode"
                                placeholder="Pincode"
                                {...field}
                              />
                            )}
                          />
                          {errors.pincode && (
                            <div className="error-message text-danger fw-bold">
                              {errors.pincode.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="altMobileInput"
                            className="inputExampleLabel"
                          >
                            Alternate No.*
                          </label>
                          <input
                            type="text"
                            className="form-control AddLocationInput"
                            name="name"
                            placeholder="Alternate No."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-start align-items-center">
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="cityInput"
                            className="inputExampleLabel"
                          >
                            City*
                          </label>
                          <Controller
                            control={control}
                            name="city"
                            rules={{ required: "City is required" }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control AddLocationInput"
                                name="city"
                                placeholder="City"
                                {...field}
                              />
                            )}
                          />
                          {errors.city && (
                            <div className="error-message text-danger fw-bold">
                              {errors.city.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="stateInput"
                            className="inputExampleLabel"
                          >
                            State*
                          </label>
                          <Controller
                            control={control}
                            name="state"
                            rules={{ required: "State is required" }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control AddLocationInput"
                                name="state"
                                placeholder="State"
                                {...field}
                              />
                            )}
                          />
                          {errors.state && (
                            <div className="error-message text-danger fw-bold">
                              {errors.state.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-start align-items-center">
                      <div className="col-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="addressInput"
                            className="inputExampleLabel"
                          >
                            Address*
                          </label>
                          <Controller
                            control={control}
                            name="address"
                            rules={{ required: "Address is required" }}
                            render={({ field }) => (
                              <input
                                type="text"
                                className="form-control AddLocationInput"
                                name="address"
                                placeholder="Address"
                                {...field}
                              />
                            )}
                          />
                          {errors.address && (
                            <div className="error-message text-danger fw-bold">
                              {errors.address.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group p-2">
                          <label
                            htmlFor="landmarkInput"
                            className="inputExampleLabel"
                          >
                            Landmark (optional)*
                          </label>
                          <input
                            type="text"
                            className="form-control AddLocationInput"
                            placeholder="Landmark"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-start">
                        <div className="form-group p-2">
                          <label
                            htmlFor="addressTypeInput"
                            className="inputExampleLabel"
                          >
                            Address Type*
                          </label>
                          <Controller
                            control={control}
                            name="addressType"
                            rules={{ required: "Address Type is required" }}
                            render={({ field }) => (
                              <select
                                className={`form-select AddLocationInput ${
                                  errors.addressType ? "is-invalid" : ""
                                }`}
                                id="addressTypeInput"
                                {...field}
                              >
                                <option value="">Select Address Type</option>
                                <option value="Home">Home</option>
                                <option value="Work">Work</option>
                                <option value="Other">Other</option>
                              </select>
                            )}
                          />
                          {errors.addressType && (
                            <div className="error-message text-danger fw-bold">
                              {errors.addressType.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xl-4">
                  <div className="container h-100 ">
                    <div className="row h-100 ">
                      <div className="form-group p-4 mt-2 col-sm col-md col-xl col-lg col text-center">
                        <button
                          className=" btn btn2 btn-primary"
                          onClick={useCurrentLocation}
                        >
                          <TbCurrentLocation className="mx-2" />
                          Use Current Location
                        </button>
                      </div>
                      <LoadScript googleMapsApiKey="AIzaSyAURq8Z-gY9Yso3QzkgrlQSjccfBq5emn4">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={10}
                        ></GoogleMap>
                      </LoadScript>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-2">
                <div className="row">
                  <div className="col-sm col-md col-xl col-lg col text-center">
                    <button className="btn1" type="submit">
                    {state?.element ? "Update" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLocation;

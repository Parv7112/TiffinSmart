import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";


function OrderTracking() {
  const [showHelpModal, setShowHelpModal] =useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);

   }, []);

  const [currentLocation, setCurrentLocation] = useState(null);
  const handleHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleHelpClose = () => {
    setShowHelpModal(false);
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div>
      <section className="container px-md-5">
        <div className="h-100 mt-5 py-5">
          <div className="d-flex justify-content-center align-items-center mt-5 h-100">
          
              <div className="cardContent w-100 rounded-0 cartDivContent py-3 ">
                <div className="card-body-content p-2 ">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md text-center text-sm-start">
                      <h5 className="mx-3 fw-bold regular1 text-nowrap">
                        ORDER #88899988899
                      </h5>
                    </div>
                    <div className="col-md-auto text-center py-2 my-md-0">
                      <button
                        type="button"
                        className="btnApply btn-lg btn-sm px-4 fw-bold"
                        data-bs-toggle="modal"
                        data-bs-target="#helpModal"
                        onClick={handleHelpClick}
                      >
                        HELP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        
          </div>
        </div>

        <div>
          <div className="row h-100">
            <div className="form-group mt-2 col-sm col-md col-xl"></div>
            <LoadScript googleMapsApiKey="AIzaSyAURq8Z-gY9Yso3QzkgrlQSjccfBq5emn4">
             <div style={{ height: "500px" }}>
              <GoogleMap
                // mapContainerStyle={containerStyle}
                mapContainerStyle={{ height: "100%" }}
                center={center}
                zoom={10}
              ></GoogleMap>
             </div>
            </LoadScript>
          </div>
        </div>

        <div className="py-5">
          <div className="row">
            <div className="col-md-4 px-5 px-md-0">
              <img src="/assets/images/order.png" className="crd-img" />
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-center">
              <h3
                className="fw-bold"
                style={{
                  color: "#F83838",
                }}
              >
                YOUR TIFFIN IS ON THE WAY{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="h-100 pt-2 pb-5">
          <div className="row h-100">
            <div className="col">
              <div className="cardContent rounded-0 cartDivContent ordertracl">
                <div className="card-body-content p-4 ">
                  <div className="row d-flex justify-content-between align-items-center text-center text-sm-start">
                    <div className="col-md-2">
                      <img
                        src="/assets/images/profile.png"
                        className="img-fluid rounded-3"
                        alt="meal"
                      />
                    </div>

                    <div className="col me-md-5">
                      <h4 className=" fw-normal mb-2 fw-bold text-dark regular-content text-nowrap">
                        RAJESH MISHRA{" "}
                      </h4>
                      <span className="d-block text-secondary fs-5 text-center text-sm-start">
                        Est : 10 mins{" "}
                      </span>
                    </div>

                    <div className="col-md-3 col-xl-2  incrementPlus mt-3 mt-md-0 text-center d-md-flex flex-row-reverse">
                      <button
                        type="button"
                        className="btnApply btn-lg py-2 px-4 fw-bold fs-5"
                      >
                        <i className="bi bi-telephone-fill me-3 fs-5 fw-bold"></i>
                        CALL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderTracking;

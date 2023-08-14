import React from "react";

function DownloadourApp() {
  return (
    <div>
      <section
        className="appmobile py-4 "
        style={{
          backgroundColor: "ff0000",
          marginTop: "11%",
        }}
      >
        <div className="container-fluid bg downloadsec">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="card-body mobilesec">
                <h5 className="card-title fs-1">Download Our App</h5>
                <p className="card-text fs-4">
                  Get healthy Meals with TIFIN SMART
                </p>

                <div className="row container d-flex justify-content-center appbtn">
                  <div className="template-demo" style={{margin:"40px 30px"}}>
                    <button className="btn btn-outline-dark btn-icon-text bg-dark btnApp2 text-white justify-content-center me-3">
                      <i className="bi bi-apple btn-icon-prepend mdi-35px fs-2 btnapp mx-2"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Available on the
                        </small>
                        App Store
                      </span>
                    </button>
                    <button className="btn btn-outline-dark btn-icon-text bg-dark text-white btndown justify-content-center">
                      <i className="bi bi-google-play btn-icon-prepend mdi-36px fs-2 btnapp mx-3"></i>
                      <span className="d-inline-block text-left">
                        <small className="font-weight-light d-block">
                          Get it on the
                        </small>
                        Google Play
                      </span>
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src="/assets/images/image.png"
                  alt=""
                  className="download"
                 
                />
              </div>
            </div>
          </div>
        </div>


    

      </section>
    </div>
  );
}

export default DownloadourApp;

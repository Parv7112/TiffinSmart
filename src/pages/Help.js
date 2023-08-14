import React from 'react';

function Help({ handleClose }) {
  return (
              <section className="help-body-font align-items-center">
                <div className="text-end">
                <button
                  type="button"
                  className="btn-close my-1 mx-1" 
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
                <div className="text-center">
                  <h1 className="fw-bold mt-3">CUSTOMER SUPPORT</h1>
                </div>
                <div className="card-body text-center">
                  <p className="text-wrap my-4 mx-md-5 fw-bold">
                    Our customer experience team is available all days from 9:00 am to 10:00 Pm to assist you with any questions or issues you might have.
                  </p>
                </div>
                <div className="text-center mt-3">
                  <h4 className="fw-bold text-danger">EMAIL US:</h4>
                  <a href="" className="text-black">Order@tiffinsmart.com</a>
                </div>
                <div className="text-center my-3">
                  <h4 className="fw-bold text-danger">CALL US:</h4>
                  <a href="" className="text-decoration-none text-black">8554-9524-8985</a>
                </div>
              </section>
  );  
}

export default Help;

import React from 'react';

function CustomizeItem() {
  return (
    <div className="container mt-4 mb-4">
      <div className="card w-50 rounded-0 mx-auto mt-5 custom-card">
        <div className="card-body">
          <div className="mt-4 d-flex align-items-center">
            <div className="mx-4">
              <img className="img-fluid greendotimg" src="/assets/images/greenmark.png" alt="..." />
            </div>
            <div className="flex-grow-1">
              <h4 className="customhead">Customize "Month End Thali"</h4>
            </div>
            <div className="ml-auto">
              <div className="mx-2">
                <p className="custompara">
                  <span className="customrupee">
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  150
                </p>
              </div>
            </div>
          </div>
          <hr className="card-line mt-4" />

          <div className="mt-4 mx-4">
            <h5 className="customhead2">Choice of Bread</h5>
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div className="mx-4">
              <img className="img-fluid greendotimg" src="/assets/images/greenmark.png" alt="..." />
            </div>
            <div className="d-flex flex-grow-1">
              <h4 className="item-text">5 Tawa Roti</h4>
              <p className="custompara1 text-center item-price">
                <span className="customrupee">
                  <i className="bi bi-currency-rupee"></i>
                </span>
                25
              </p>
            </div>
            <div className="form-check flex-grow-1 mb-2 ">
              <input className="mb-2 customcheck rounded-0" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </div>
          <hr className="card-line mt-4" />

          <div className="mt-4 mx-4">
            <h5 className="customhead2">Curry</h5>
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div className="mx-4">
              <img className="img-fluid greendotimg" src="/assets/images/greenmark.png" alt="..." />
            </div>
            <div className="d-flex flex-grow-1">
              <h4 className="item-text">Raita</h4>
              <div className="mx-4">
                <p className="custompara2 ">
                  <span className="customrupee">
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  35
                </p>
              </div>
            </div>
            <div className="form-check flex-grow-1 mb-2 mx-auto ">
              <input className="mb-2 customcheck rounded-0" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </div>
          <hr className="card-line mt-4" />

          <div className="mt-4 mx-4">
            <h5 className="customhead2">Dessert</h5>
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div className="mx-4">
              <img className="img-fluid greendotimg" src="/assets/images/greenmark.png" alt="..." />
            </div>
            <div className="d-flex flex-grow-1">
              <h4 className="item-text">Kheer</h4>
              <div className="mx-4">
                <p className="custompara3">
                  <span className="customrupee">
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  25
                </p>
              </div>
            </div>
            <div className="form-check flex-grow-1 mb-2 mx-auto ">
              <input className="mb-2 customcheck rounded-0" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-between adddiv">
            <h4 className="totalrupee1 m-2">
              Total{' '}
              <span className="customrupee">
                <i className="bi bi-currency-rupee totalrupee"></i>
              </span>
              230
            </h4>
            <div className='m-2'>
              <button className="btn custombtn">Add Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeItem;

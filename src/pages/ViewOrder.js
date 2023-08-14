import React from 'react';
import { useNavigate } from "react-router-dom";

const ViewOrder = ({selectedOrder}) => {

  const navigate = useNavigate();

  const handlereapeatorderroute = () =>{
  navigate("/cart");
  }


  return (
    <div>
     <p className='fw-bolder adprofiletext'>Your Order</p>
       {selectedOrder && (
         <div className="adprofile container-fluit vieworder-container">
          <div className='row'>
         <div className="col-lg">
         <div className="card mb-3 border-0 rounded-0 p-4 m-3 shadow p-3 mb-5 bg-body-tertiary vieworder-firstcart h-75">
            <div className="card-body">
            <p className="card-title vieworder-cart-title fw-semibold">{selectedOrder.Product_name}</p>
            <p className="card-text vieworder-cart-description fw-medium">{selectedOrder.Product_description}</p>
            <p className="card-text vieworder-cart-description fw-semibold">₹ {selectedOrder.Price}</p>
            </div>
         </div>
         </div>
         <div className="col-lg">
         <div className="card mb-3 border-0 rounded-0 p-4 m-3 shadow p-3 mb-5 bg-body-tertiary">
            <div className="card-body h-75">
            <p className="card-title vieworder-cart-title fw-semibold">Payment Details</p>
            <div className="row card-text vieworder-cart-description fw-bolder mb-0 pb-0">
              <div className='col'>MRP</div>
              <div className='col'> ₹ {selectedOrder.Price}</div>
            </div>
            <div className="row card-text vieworder-cart-description fw-bolder mb-0 pb-0">
              <div className='col'>Delivery Charges</div>
              <div className='col'>Free</div>
            </div>
            <div className="row card-text vieworder-cart-description fw-bolder mb-0 pb-0">
              <div className='col'>Subscription</div>
              <div className='col'>{selectedOrder.subscription}</div>
            </div>
            </div>
         </div>
         </div>
         </div>
         <div className='row my-1 mx-3'>
            <p className='col-md vieworder-cart-description fw-bolder mb-0'  style={{ fontSize:"large"}}>Order Details</p>
            <p  className='col-auto fw-bold mb-0 vieworder-orderdetail' style={{fontSize:"small"}}>{selectedOrder.Date}</p>
            <p  className='col-auto fw-bold mb-0 vieworder-orderdetail' style={{fontSize:"small"}}>{selectedOrder.Time}</p>
         </div>
         <div className='row my-1 mx-3'>
            <p className='col-md fw-bolder mb-0 vieworder-ordernumber' style={{color:"#F15050" , fontSize:"large"}}>Order Number</p>
            <p className='col-md-auto fw-bolder mb-0 vieworder-ordernumber' style={{color:"#000000" , fontSize:"medium"}}>{selectedOrder.order_no}</p>
         </div>
         <div className="row justify-content-center py-5">
            <button type="button" className="col-auto btn fw-bold px-4 vieworder-orderrepeat-btn" onClick={handlereapeatorderroute}>REPEAT ORDER</button>
        </div>
        </div>
      )}
    </div>
  )
}

export default ViewOrder
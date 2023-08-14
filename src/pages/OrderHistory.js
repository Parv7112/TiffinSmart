import React, { useEffect, useState } from "react";
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import { GoStarFill, GoStar } from 'react-icons/go';
import WriteReview from './WriteReview';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { OrderHistorydata } from "../features/slices/orderhistorySlice";


const OrderHistory = ({ isSidebarOpen, setCurrentComponent, setSelectedOrder }) => {

   const [reviewModalOpen, setReviewModalOpen] = useState(false);
   const [selectedOrderData, setSelectedOrderData] = useState(null);

   const dispatch = useDispatch()
   const OrderData = useSelector((state) => state.orderhistory.data);
   const loading = useSelector((state) => state.orderhistory.loading);

   const toggleReviewModal = (data) => {
      setSelectedOrderData(data);
      setReviewModalOpen(prevState => !prevState);
   };

   const handleViewOrder = (data) => {
      setCurrentComponent('vieworder');
      setSelectedOrder(data);
   };

   const groupIntoPairs = (arr) => {
      const pairs = [];
      for (let i = 0; i < arr.length; i += 2) {
         pairs.push([arr[i], arr[i + 1]]);
      }
      return pairs;
   };

   const orderDataPairs = groupIntoPairs(OrderData);

   useEffect(() => {
      dispatch(OrderHistorydata());
   }, [dispatch])

   return (
      <div id="order">
         <p className='fw-bolder adprofiletext'>Order History</p>
         <div className="adprofile container-fluit pb-lg-3 p-xl-5 ">
            {orderDataPairs.map((pair, index) => (
               <div key={index} className='row pt-3 p-xl-3'>
                  {pair.map((data) => (
                     <div key={data.Product_id} className={isSidebarOpen ? "col-lg" : "col-xxl"}  >
                        <div className="card mb-3 border-0 rounded-0 p-4 m-3 shadow p-3 mb-5 bg-body-tertiary">
                           <div className="card-body">
                              <div className='row'>
                                 <div className='col-md'>
                                    <p className="card-title fw-bolder orderhistory-cart-titile">{data.Product_name}</p>
                                    <p className="card-text fw-medium orderhistory-cart-item">{data.Product_description}</p>
                                 </div>
                                 <div className='col-md-auto'>
                                    <p className="card-text fw-semibold orderhistory-delivered mt-2">{data.Status}</p>
                                 </div>
                              </div>
                              <p className="card-text fw-bolder py-4 mb-0 orderhistory-price">₹ {data.Price}</p>
                              <div className='row align-items-center'>
                                 <p className="col-md card-text fw-semibold orderhistory-date-time mb-0">{data.Date}</p>
                                 <p className="col-md card-text fw-semibold orderhistory-date-time mb-0">{data.Time}</p>
                                 <div className="col-md-auto card-text  orderhistory-date-time fw-bold border border-0 bg-transparent px-md-0" type='button' onClick={() => handleViewOrder(data)}>View Order<span className='orderhistory-vieworder-icon fs-5'><IoMdArrowDroprightCircle /></span></div>
                              </div>
                              <div className='row pt-1 align-items-end'>
                                 <div className="col-md orderhistory-rating px-2" >
                                    {[...Array(data.Rating)].map((_, index) => (
                                       <GoStarFill key={index} className='ps-1 fs-2' />
                                    ))}
                                    {[...Array(5 - data.Rating)].map((_, index) => (
                                       <GoStar key={index} className='ps-1 fs-2' />
                                    ))}
                                 </div>
                                 <div className=" col-md-auto card-text fw-bold orderhistory-writereview-btn ps-3 pe-0" type='button' onClick={() => toggleReviewModal(data)}>Write Review</div>
                              </div>
                           </div>
                        </div>

                     </div>
                  ))}
               </div>
            ))}
         </div>

         <Modal isOpen={reviewModalOpen} toggle={toggleReviewModal} style={{ maxWidth: '680px' }} className=" rounded-0">
            <ModalBody className="pt-0">
               <ModalHeader toggle={toggleReviewModal} className="border-0 pb-0" />
               <WriteReview toggleReviewModal={toggleReviewModal} selectedOrderData={selectedOrderData} />
            </ModalBody>
         </Modal>
      </div>
   )
}
export default OrderHistory


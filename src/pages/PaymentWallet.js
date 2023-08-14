import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



import { useDispatch, useSelector } from "react-redux";
import { showPaymentNet } from "../features/slices/paymentNetSlice";
import { showPaymentBanks } from "../features/slices/paymentNetbanking";

import AddCardForm from "./AddCardForm";
import CreditDebit from "./CreditDebit";

function PaymentWallet() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  const [selectedButton, setSelectedButton] = useState(1);
  const [showUPIField, setShowUPIField] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [upiIdError, setUpiIdError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
 
 

  const {
    netbanking
  } = useSelector((state) => state.paymentNet);
  console.log(netbanking)

  const {
    netbankingbanks
  } = useSelector((state) => state.paymentbanks);
  console.log(netbankingbanks);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showPaymentNet());
    dispatch(showPaymentBanks())
  }, [dispatch]);



  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required("Card Number is required"),
    expiration: Yup.string()
      .required('Expiration Date is required')
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration Date must be in MM/YY format'),
    cvv: Yup.string().matches(/^\d{3}$/, 'CVV must be a 3-digit number').required('CVV is required'),
    cardholderName: Yup.string().required('Cardholder Name is required'),
    enterUpiId: Yup.string().matches(/^[\w.-]+@(\w+|upi|ybl)$/, 'Please enter valid upi id').required('Upi Id is required')
  });

  const initialValues = {
    cardNumber: '',
    expiration: '',
    cvv: '',
    cardholderName: '',
    enterUpiId: '',
  };

  const handleSubmit = () => {
   
    
   
  };
  const handleAddClick = () => {
    setShowUPIField(true);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    setShowAddCardForm(false)
  };

  const handleAddUpiId = (e) => {
    e.preventDefault()
    if (!upiId) {
      setUpiIdError("Please enter your UPI ID");
      return false;
    }


    const upiIdRegex = /^[\w.-]+@(\w+|upi|ybl)$/;
    if (!upiIdRegex.test(upiId)) {
      setUpiIdError("Please enter a valid UPI ID");
      return false;
    }
    setUpiIdError("");
    return true;
  };

  return (
    <>
      <div className='container  pwmain '>
        <div className='card mx-auto pwcar'>
          <div className='card-body  pwcarbd '>
            <div className='row'>
              <div className='col-md-5 col-xs-12 pwcolumn1'>
                <h4 className='text-center pwheading mt-2 mb-2'>Choose Payment Method</h4>
                <div className='pwback'>
                  <div className='mt-3' type="button" onClick={() => handleButtonClick(1)} >
                    <div
                      className={`btn pwpayment mt-5 ${selectedButton === 1 ? "active" : "active"
                        }`}
                      
                    >
                      <img
                        src="/assets/images/wallet.png"
                        className="img-fluid pb-3 mt-2 pwwallet"
                        alt="..."
                      />{" "}
                      Wallets
                    </div>
                  </div>
                  <hr className="pwline" />
                  <div className="" type="button" onClick={() => handleButtonClick(2)}>
                    <div
                      className={`btn pwpayment  ${selectedButton === 2 ? "active" : ""
                        }`}
                    >
                      <img
                        src="/assets/images/upi.png"
                        className="img-fluid pb-3 mt-2 pwupi"
                        alt="..."
                      />
                      UPI
                    </div>
                  </div>
                  <hr className="pwline" />
                  <div className=" " type="button" onClick={() => handleButtonClick(3)}>
                    <div
                      className={`btn pwpayment  ${selectedButton === 3 ? "active" : ""
                        }`}
                     
                    >
                      <img
                        src="/assets/images/sodexo.png"
                        className="img-fluid pb-3 mt-2 pwsodexo"
                        alt="..."
                      />
                      Sodexo
                    </div>
                  </div>
                  <hr className="pwline" />
                  <div className=" " type="button" onClick={() => handleButtonClick(4)}>
                    <div className={`btn pwpayment  ${selectedButton === 4 ? "active" : ""
                      }`}
                      
                    >
                      <img
                        src="/assets/images/netbanking.png"
                        className="img-fluid pb-3 mt-2 pwnetbanking"
                        alt="..."
                      />
                      Net Banking
                    </div>
                  </div>
                  <hr className='pwline' />
                  <div className=" justify-content-center align-items-center " type="button" onClick={() => handleButtonClick(5)}>
                    <div className={`btn pwpayment  ${selectedButton === 5 ? "active" : ""
                      }`}
                    >
                      <img src="/assets/images/credit&debit.png" className="img-fluid pb-3 mt-2 pwcrdbt" alt="..." /> Credit & Debit Card
                    </div>
                      
                  </div>
                </div>
                <hr className='pwline' />
              </div>
              <br />
              <br />
              {selectedButton === 1 &&  (
                <div className="col-md-7 col-xs-12 container mt-md-4 mt-5 pt-md-0  pt-5  pwcolumn2">
                  <h1 className="m-4 text-center  pwpara1">SELECT A WALLET</h1>

                  <div className=" container shadow-sm d-flex justify-content-between align-items-center pwimdev mb-4">
                    <img
                      src="/assets/images/paytm.png"
                      className="img-fluid pb-3 pwimg1 mt-4"
                      alt="..."
                    />
                    <a className="pwpaylink " href="#">
                      Link Account
                    </a>
                  </div>
                  <div className="container mb-4 shadow-sm d-flex justify-content-between align-items-center mt-2 pwimdev">
                    <img
                      src="/assets/images/amazonpay.png"
                      className="img-fluid pb-2 pwimg2 mt-4"
                      alt="..."
                    />
                    <a href="#" className="pwpaylink">
                      Link Account
                    </a>
                  </div>
                  <div className="container mb-4 shadow-sm d-flex justify-content-between align-items-center mt-2 pwimdev ">
                    <img
                      src="/assets/images/phonepe.png"
                      className="img-fluid pb-3 pwimg3 mt-4"
                      alt="..."
                    />
                    <a href="#" className="pwpaylink ">
                      Link Account
                    </a>
                  </div>
                  <div className=" container  shadow-sm d-flex justify-content-between align-items-center  pwimdev ">
                    <img
                      src="/assets/images/mobikwik.png"
                      className="img-fluid pb-3 pwimg4 mt-4"
                      alt="..."
                    />
                    <a href="#" className="pwpaylink ">
                      Link Account
                    </a>
                  </div>
                </div>
              )}

              {selectedButton === 2 &&   (
                <div className='col-md-7 col-12 my-2  mt-md-4 mt-5 pt-md-0  pt-5'>
                  <p className='m-3 pupara text-center'>UPI</p>
                  <div className='container w-75 shadow-sm justify-content-between align-items-center puimdev'>
                    <img src="/assets/images/gpay.png" className='img-fluid pb-3 puimg1' alt='...' /><span className='putext'>Google Pay</span>
                    <div className="container pugpaycont ">
                      <button className="btn mb-2 pugpay">
                        Pay via Google Pay
                      </button>
                    </div>
                  </div>

                  <div className='container w-75 text-center mt-5 shadow-sm justify-content-between align-items-center pwimdev' type="button" onClick={handleAddClick} >
                    <button className="add-button img-fluid pb-3" >
                      <img className='img-fluid' src="/assets/images/addupi.png" alt='...' />
                    </button>
                    <h1 className='puspn text-center'>Add New UPI ID</h1>
                    <h1 className='container pureg mb-2'>You need to have a registered UPI ID</h1>
                  </div>
                  {showUPIField && (

                    <div className="container  justify-content-between align-items-between">
                      <form className='form'>
                        <div className="head mt-4 ms-5">
                          <h3 className='puhd mx-3'>ADD NEW UPI ID</h3>
                        </div>

                        <div className="mb-2 w-75 m-auto">
                          <label className='pulb text-center m-auto'>Enter your UPI ID</label>
                          <input
                            className='form-control rounded-0 shadow-sm puinp'
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                          />
                          {upiIdError && <div className="error-message puerr">{upiIdError}</div>}
                          <span className='pufutr'>Securely save VPA for future Use</span>
                        </div>
                        <div className='text-center mt-4'>
                          <button className='btn text-center pubtf' onClick={handleAddUpiId}>Verify and pay</button>
                        </div>
                      </form>



                    </div>

                  )}
                </div>
              )}
              {selectedButton === 3 &&  (
                <div className="container mt-md-4 mt-5 pt-md-0  pt-5 col-md-7">
                  <h1 className="sdxhead m-4 text-center">SODEXO</h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form className="sdxform">
                        <div className="mb-3">
                          <label className="label ms-1">Add New Card</label>
                          <Field
                            type="text"
                            name="cardNumber"
                            className={`form-control rounded-0 sdinp1 ${errors.cardNumber && touched.cardNumber
                              ? "is-invalid"
                              : ""
                              }`}
                          />
                          <ErrorMessage
                            name="cardNumber"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="sddev d-flex mb-3">
                          <div className="w-75">
                            <label className="label ms-1">Valid through</label>
                            <Field
                              type="text"
                              name="expiration"
                              className={`form-control rounded-0 text-center sdinp1 ${errors.expiration && touched.expiration
                                ? "is-invalid"
                                : ""
                                }`}
                              placeholder="(MM/YY)"
                            />
                            <ErrorMessage
                              name="expiration"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="ms-2 w-25 text-center">
                            <label className="label">CVV</label>
                            <Field
                              type="password"
                              name="cvv"
                              className={`form-control text-center rounded-0 sdinp1 ${errors.cvv && touched.cvv ? "is-invalid" : ""
                                }`}
                            />
                            <ErrorMessage
                              name="cvv"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="label ms-1">Name on Card</label>
                          <Field
                            type="text"
                            name="cardholderName"
                            className={`form-control rounded-0 sdinp1 ${errors.cardholderName && touched.cardholderName
                              ? "is-invalid"
                              : ""
                              }`}
                          />
                          <ErrorMessage
                            name="cardholderName"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="text-center mt-2">
                          <button
                            type="submit"
                            className="btn btn-md btn-dark m-3 text-center w-25 sdxbt"
                          >
                            PAY
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              )}

              {selectedButton === 4 &&   (
                <div className='container mt-md-4 mt-5 pt-md-0  pt-5 col-md-7'>
                  <h1 className="sdxhead m-4 text-center">SELECT A BANK</h1>
                  <h4 className="nethead">POPULAR BANKS</h4>
                  <div className="card shadow-sm netcard1" >
                    <div className="card-body">
                      {netbanking.map((ele) => (
                        <div className=" d-flex justify-content-between align-items-center  ">
                          <div className="btn netbtn">
                            <img
                              src={ele.image}
                              className="img-fluid mx-2 netimg"
                              alt="..."
                            />
                            {ele.bankname}
                          </div>
                          <div className="btn netdropbtn">&#x25B6;</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="btn d-flex justify-content-between align-items-center mt-4 dropdown-toggle netdrop" onClick={toggleDropdown} >
                    <h4 className="nethead2 ">OTHER BANK</h4>
                  </div>
                  {isOpen && (
                    <div className="card shadow-lg netcard1">
                      <div className="card-body">
                        {netbankingbanks.map((ele) => (
                          <div className=" d-flex justify-content-between align-items-center  ">
                            <div className="btn netbtn">{ele.bankname}</div>
                            <div className="btn netdropbtn">&#x25B6;</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedButton === 5 &&  !showAddCardForm && (
                <div className="container mt-md-4 mt-5 pt-md-0 pt-5 col-md-7">
                  <CreditDebit/>
                </div>
               
              )}

              {showAddCardForm && (
                <div className="container mt-md-4 mt-5 pt-md-0 pt-5 col-md-7">
                    <AddCardForm/>
                </div>
      
              )}


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentWallet;


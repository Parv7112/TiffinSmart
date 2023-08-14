import React, {useState, useEffect} from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import AddCardForm from './AddCardForm';
import { useSelector, useDispatch } from 'react-redux';
import { showUserCard } from '../features/slices/addCardSlice';
import Spinner from '../components/Spinner'



function CreditDebit() {

    const dispatch = useDispatch()
    const [showAddCardForm, setShowAddCardForm] = useState(false)
    const [showCreditDebit, setShowCreditDebit] = useState(true);


    useEffect(()=>{
        dispatch(showUserCard())
    },[dispatch]);

    const {
      cards,
      loading
    } = useSelector((state) => state.card);
    console.log("card detail hai", cards);

    if(loading){
      return <div className='d-flex mt-5 align-items-center justify-content-center'> 
        <Spinner />
      </div>
    }
    
    const handlePay = (e) => {
        e.preventDefault()
      }
     
    const handleAddCard = (e) =>{
        e.preventDefault();
        setShowAddCardForm(true)
        setShowCreditDebit(false)
        
    }

   
  return (
    <div>   
            { showCreditDebit && (
                <div>
                <div className="mt-5 d-flex flex-wrap align-items-center">
                <h3 className="mx-4 mt-1 cdbthead">WE ACCEPT</h3>
                <img
                  className="img-fluid mx-2 mb-2 crdimg"
                  src="/assets/images/visa.png"
                  alt="Visa"
                />
                <img
                  className="img-fluid mx-2 mb-2 crdimg"
                  src="/assets/images/mastercard.png"
                  alt="Mastercard"
                />
                <img
                  className="img-fluid mx-2 mb-1 crdimg"
                  src="/assets/images/rupay.png"
                  alt="RuPay"
                />
                <img
                  className="img-fluid mx-2 mb-2 crdimg"
                  src="/assets/images/americanexpress.png"
                  alt="American Express"
                />
              </div>
              <div>
              { cards && 
                  cards.map((ele)=>(
              <div className="card rounded-0 shadow-sm mt-4">
                <div className="card-body  mt-4">
                  <div className="d-flex">
                    <img
                      className="img-fluid mx-2 mt-2 crdimg"
                      src="/assets/images/visa.png"
                      alt="Visa"
                    />
                    <h3 className="cdbthead mx-2">XXXX-XXXXXXXX-{ele.cardNumber.slice(-4)}</h3>
                  </div>
                  <div className="mx-5">
                    <h5 className="mx-5 cdbthd">DEBIT CARD|VALID TILL {ele.expiration}</h5>
                  </div>
                  <Formik
                  
                  initialValues={{ cvv: "" }}
                  validationSchema={Yup.object().shape({
                    cvv: Yup.string()
                      .required("CVV is required")
                      .matches(/^\d{3}$/, "CVV must be a 3-digit number"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    handlePay(values.cvv);
                    setSubmitting(false);
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                      <div className="mx-5">
                        <div className="mx-4">
                          <div className="input-group">
                            <input
                              type="text"
                              name="cvv"
                              className={`form-control rounded mx-3 inpcdbt ${errors.cvv && touched.cvv ? "is-invalid" : ""}`}
                              placeholder="CVV"
                              value={values.cvv}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <div className="input-group-append mb-4">
                              <button className="btn cdbtpaybtn" type="submit" >
                                PAY <span className="rupeeicon"><i className="bi bi-currency-rupee"></i></span>140.2
                              </button>
                            </div>
                          </div>
                          {errors.cvv && touched.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
                </div>
              </div>
              ))}
              </div>


              <div className="card rounded-0 mt-5">
              <div className="card-body mt-4">
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <div className="card  cdbtcard2 rounded-0 p-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid plusimg" alt="Ic baseline plus" src="/assets/images/plus.png" />
                      </div>
                    </div>    
                    <div className="col-10 d-flex align-items-center ">
                      <h3 className="addcardhead ">Add New Card</h3>
                    </div>
                    <div className="mx-5 ">
                      <h5 className="mx-5">Save and Pay via Cards.</h5>
                    </div>
                    <div className="container mx-5 mt-2">
                        <button className="btn rounded-0 mx-5 addbtn" onClick={handleAddCard}>ADD NEW</button>
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
            </div>
            
   )}
               
            {showAddCardForm && <AddCardForm />}
              </div>
              
               
  )
}

export default CreditDebit

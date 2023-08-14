import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ApplyCoupan from "./ApplyCoupan";
import ForgetPassword from "./Forgetpassword";
import ResetPassword from "./ResetPassword";
import PasswordChange from "./PasswordChange";
import SendLink from "./SendLink";
import SubscriptionDetails from "./SubscriptionDetail";
import { Meal } from "./Meal";
import PaymentWallet from "./PaymentWallet";
import AddLocation from "./AddLocation";
import Subscription from "./Subscription";
import ModalLogin from "./Login";
import Location from "./Location";
import Test from "./Test"
import OrderTracking from "./OrderTracking"
import ModalSignup from "./Signup";
import OrderSuccessfully from "./OrderSuccessfully";
import AccountDetails from "./AccountDetails";
import TiffinDetail from "./TiffinDetail"
import Help from "./Help";
import ContactUs from "./ContactUs";
import CustomizeItem from "./CustomizeItem";
import EditProfile from "./EditProfile";
import AccountDetailsProfile from "./AccountDetailsProfile";
import AddCardForm from "./AddCardForm";
import UserWallet from "./UserWallet";

import Aboutus from "./Aboutus";
import ViewOrder from "./ViewOrder";
import WriteReview from "./WriteReview";
import CoverProfilePicture from "./CoverProfilePicture";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Routers = () => {
  
 
  return (
    <>
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/applycoupan" element={<ApplyCoupan />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />}></Route>
          <Route path="/passwordchange" element={<PasswordChange />}></Route>
          <Route path="/sendlink" element={<SendLink />}></Route>
          <Route path="/meal" element={<Meal />}></Route>
          <Route path="/paymentwallet" element={<PaymentWallet />}></Route>
          <Route path="/AddLocation" element={<AddLocation />}></Route>
          <Route path="/subscription" element={<Subscription />}></Route>
          <Route path="/subscriptionDetails" element={<SubscriptionDetails />}></Route>
          <Route path="/login" element={<ModalLogin />}></Route>
          <Route path="/signup" element={<ModalSignup />}></Route>
          <Route path="/Location" element={<Location/>}></Route>
          <Route path="/ordertracking" element={<OrderTracking/>}></Route>
          <Route path="/TiffinDetail" element={<TiffinDetail/>}></Route>
          <Route path="/ordersuccessfully" element={<OrderSuccessfully/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/customizeitem" element={<CustomizeItem/>}></Route>
          <Route path="/accountdetails" element={<AccountDetails/>}></Route>
          <Route path="/accountdetails/:defaultTab?" element={<AccountDetails/>}></Route>
          <Route path="/editprofile" element={<EditProfile/>}></Route>
          <Route path="/accountdetailsprofile" element={<AccountDetailsProfile />}></Route>
          <Route path="/addcard" element={<AddCardForm/>}></Route>
          <Route path="/userwallet" element={<UserWallet/>}></Route>
          <Route path="/aboutus" element={<Aboutus/>}></Route>
          <Route path="/writeReview" element={<WriteReview/>}></Route>
          <Route path="/vieworder" element={<ViewOrder/>}></Route>


          <Route path="/addcard" element={<AddCardForm/>}> </Route>
  
          <Route path ="/changeprofilephoto" element={<CoverProfilePicture/>}></Route>
          
      
          <Route path="/addcard" element={<AddCardForm/>}></Route>

          

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Routers;

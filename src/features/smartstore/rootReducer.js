import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";
import locationReducer from "../slices/locationSlice";
import paymentNetReducer from "../slices/paymentNetSlice";
import paymentNetbanking from "../slices/paymentNetbanking";
import deliverhereReducer from "../slices/deliverhereSlice";
import signupReducer from "../slices/signupSlice.js";
import loginReducer from "../slices/loginSlice.js";
import accountdetailsprofileReducer from "../slices/accountdetailsprofileSlice";

import cardDetail from "../slices/addCardSlice";
import ContactusReducer from "../slices/ContactusSlice";
import editProfileReducer from "../slices/editprofileSlice";
import subscriptionPlanReducer from "../slices/subscriptionPlanSlice";
import writereviewReducer from "../slices/writereviewSlice";
import orderhistoryReducer from "../slices/orderhistorySlice";
import billDetailReducer from "../slices/billDetailSlice";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  location: locationReducer,
  paymentNet: paymentNetReducer,
  paymentbanks: paymentNetbanking,
  deliverhere: deliverhereReducer,
  signup: signupReducer,
  login: loginReducer,
  accountdetailsprofile: accountdetailsprofileReducer,
  card: cardDetail,
  contactus: ContactusReducer,
  editProfile: editProfileReducer,
  subscriptionPlan: subscriptionPlanReducer,
  writereview: writereviewReducer,
  orderhistory: orderhistoryReducer,
  billdetail: billDetailReducer,
});
export default rootReducer;

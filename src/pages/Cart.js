import React, { useState, useEffect, useRef } from "react";
import { FaRupeeSign, FaRegPlusSquare } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import { useForm, Controller } from "react-hook-form";

import {
  incrementQuantity,
  decrementQuantity,
} from "../features/slices/cartSlice";
import { fetchPricingData } from "../features/slices/billDetailSlice";

function Cart() {
  const { billdetail } = useSelector((state) => state.billdetail);

  const closeRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // apply coupon
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    defaultValues: {
      coupanCode: "",
    },
  });

  const handleCouponClick = (coupanInfo) => {
    setValue("coupanCode", coupanInfo.coupanCode);
  };

  const onSubmit = (data) => {
    
    const validateCoupon = billdetail.find(
      (coupon) => coupon.coupanCode === data.coupanCode
    );
    if (validateCoupon) {
      onCouponApplied(true, validateCoupon);
    } else {
      setError("coupanCode", {
        type: "manual",
        message: "Invalid coupon code",
      });
      onCouponApplied(false, []);
    }
  };

  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [couponData, setCouponData] = useState([]);
  const onCouponApplied = (isCouponApplied, coupons) => {
    if (isCouponApplied) {
      setAppliedCoupon(isCouponApplied);
      setCouponData(coupons);
    } else {
      setAppliedCoupon(false);
      setCouponData([]);
    }
  };

  const validationRules = {
    required: "This field is required",
  };

  const cartItem = useSelector((state) => state.cart);
  const deliverhereLocation = useSelector((state) => state.deliverhere);

  useEffect(() => {
    dispatch(fetchPricingData());
  }, [dispatch]);

  // const [showAddNewAddress, setShowAddNewAddress] = useState(true);

  // subscription form data
  const { pathname } = useLocation();
  const location = useLocation();
  const { subscriptionData } = location.state || {};
  const isPlanValid =
    subscriptionData?.plan && subscriptionData.plan.trim().length > 0;

  const handleIncrement = () => {
    dispatch(incrementQuantity());
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity());
  };

  // const handleAddressSelect = () => {
  //   setShowAddNewAddress(false);
  // };


  const initialPrice = isPlanValid
  ? subscriptionData.Lsubsprice + subscriptionData.Dsubsprice
  : cartItem.totalPrice;

  let couponAdjustedPrice = initialPrice;

if (couponData) {
  couponAdjustedPrice =
    initialPrice +
    (initialPrice * couponData.coupanPercentage) / 100 -
    (initialPrice * couponData.taxRate) / 100 +
    couponData.deliveryCharges -
    (initialPrice * couponData.discountPercentage) / 100;
}


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className="container h-100 mb-4 mt-5 sectionMargin">
        <div className=" h-100 mt-5 py-2">
          <div className="row d-flex justify-content-center align-items-center mt-5 h-100 ">
            <div className="mt-4">
              <div className="rounded-0 cartDivContent py-2 ">
                <div className="card-body-content p-2 ">
                  <div className="row-auto d-flex deliveryContent1 justify-content-between">
                    <div className="col-auto">
                      <h5 className="mx-2 fw-bold regular1 text-nowrap fs-5 align-items-center">
                        <MdLocationPin className="fs-4" />
                         Delivery Address
                      </h5>
                    </div>
                    <div className="col text-end">
                      <Link
                        to="/Location"
                        className="fw-bold underline-none regular1 regularChange fs-6 align-items-center me-4"
                        style={{ textDecoration: "none" }}
                      >
                        Change
                      </Link>
                    </div>
                  </div>

                  {deliverhereLocation ? (
                    <div className="row my-2">
                      <div className=" mx-4 ">
                        <div>
                          <h1 className="fw-bold fs-6">
                            {deliverhereLocation.addressType}
                          </h1>
                          <p className="fw-bold mb-2">
                            {deliverhereLocation.name}
                          </p>
                          <p className="fw-bold mb-2">
                            {deliverhereLocation.address},
                            {deliverhereLocation.pincode}
                          </p>
                          <p className="text-muted fw-bold">
                            {deliverhereLocation.city},{" "}
                            {deliverhereLocation.state}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row ">
                      <div className="col-12">
                        <div className="container ">
                          <h5 className="my-2">
                            Add an existing or new address
                          </h5>
                          <button
                            className="btn btn-danger fw-semibold my-2  "
                            onClick={() => navigate("/location")}
                          >
                            <FaRegPlusSquare className="fs-4 me-2 text-lg-center" />
                            Add Address
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" d-flex  flex-md-row flex-column justify-content-between align-items-center cartDivContent rounded-0 p-4 my-5">
          <img src={cartItem.image} alt={cartItem.title} className="crd-img" />
          <div className="text-center mb-4">
            <h3
              className="card-title mb-2 fs-2 fw-bold "
              style={{
                color: "#F83838",
              }}
            >
              {cartItem.title}
            </h3>
            <p className="card-text mt-2 mb-3 fs-6 fw-bold">
              {cartItem.description}
            </p>
            <span className="fw-bold fs-6 ">
              <strong>
                <FaRupeeSign />
              </strong>
              {cartItem.totalPrice}
            </span>
          </div>
          {isPlanValid ? (
            <div className="text-white">.</div>
          ) : (
            <div className="text-center">
              <button
                className="btn btn-danger rounded-circle btn-sm  "
                onClick={handleDecrement}
              >
                <BiMinus className="text-white mb-1" />
              </button>

              <span className="border border-3 px-3 fs-6 mx-2">
                {cartItem.quantity}
              </span>

              <button
                className="btn btn-danger rounded-circle btn-sm"
                onClick={handleIncrement}
              >
                <FiPlus className="text-white mb-1" />
              </button>
            </div>
          )}
        </div>

        {isPlanValid ? (
          <div className=" mt-2 h-100 py-1">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="bill-detail1 rounded-0 ">
                <div className="card-body-content p-2">
                  <div className="container p-2">
                    <h4 className="bill-head mb-4 fs-5">
                      Subscription Details :
                    </h4>

                    <div className="row d-flex bill-content justify-content-between">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">Meal Plan</p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between text-black fw-bold priceTag">
                          {subscriptionData.plan}
                          {
                            subscriptionData.plan === "Lunch"
                              ? " (" + subscriptionData.Lsubsplan + " Plan" + ")"
                              : subscriptionData.plan === "Dinner"
                                ? " (" + subscriptionData.Dsubsplan + " Plan" + ")"
                                : subscriptionData.plan === "Full Day Meal"
                                  ? (
                                    " - Lunch (" + subscriptionData.Lsubsplan + " Plan" + ")" +
                                    " " +
                                    "Dinner (" + subscriptionData.Dsubsplan + " Plan" + ")"
                                  )
                                  : null
                          }
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">Meal Days</p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          {subscriptionData.plan === "Lunch"
                            ? subscriptionData.Lday === "Custom"
                              ? subscriptionData.LcustomDay
                              : subscriptionData.Lday
                            : subscriptionData.plan === "Dinner"
                            ? subscriptionData.Dday === "Custom"
                              ? subscriptionData.DcustomDay
                              : subscriptionData.Dday
                            : subscriptionData.plan === "Full Day Meal"
                            ? (subscriptionData.Lday === "Custom"
                                ? "Lunch (" + subscriptionData.LcustomDay + ")"
                                : "Lunch (" + subscriptionData.Lday + ")") +
                              " " +
                              (subscriptionData.Dday === "Custom"
                                ? "Dinner (" + subscriptionData.DcustomDay + ")"
                                : "Dinner (" + subscriptionData.Dday + ")")
                            : null}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">
                          Meal Package
                        </p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          {cartItem.title}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">
                          Meal Price
                        </p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          <FaRupeeSign />
                          {subscriptionData.Lsubsprice +
                            subscriptionData.Dsubsprice}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">
                          Meal Time Slot
                        </p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          {subscriptionData.plan === "Lunch"
                            ? subscriptionData.Ltime
                            : subscriptionData.plan === "Dinner"
                            ? subscriptionData.Dtime
                            : subscriptionData.plan === "Full Day Meal"
                            ? "Lunch (" +
                              subscriptionData.Ltime +
                              ")" +
                              " " +
                              ("Dinner (" + subscriptionData.Dtime + ")")
                            : null}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">Meal Type</p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          {subscriptionData.plan === "Lunch"
                            ? subscriptionData.Ltype
                            : subscriptionData.plan === "Dinner"
                            ? subscriptionData.Dtype
                            : subscriptionData.plan === "Full Day Meal"
                            ? "Lunch (" +
                              subscriptionData.Ltype +
                              ")" +
                              " " +
                              ("Dinner (" + subscriptionData.Dtype + ")")
                            : null}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">
                          Start Date
                        </p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          {subscriptionData.plan === "Lunch"
                            ? subscriptionData.LOrderdate?.toLocaleDateString(
                                "en-IN"
                              )
                            : subscriptionData.plan === "Dinner"
                            ? subscriptionData.DOrderdate?.toLocaleDateString(
                                "en-IN"
                              )
                            : subscriptionData.plan === "Full Day Meal"
                            ? "Lunch (" +
                              subscriptionData.LOrderdate?.toLocaleDateString(
                                "en-IN"
                              ) +
                              ")" +
                              " " +
                              "Dinner (" +
                              subscriptionData.DOrderdate?.toLocaleDateString(
                                "en-IN"
                              ) +
                              ")"
                            : null}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">End Date</p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          {subscriptionData.plan === "Lunch"
                            ? subscriptionData.LEnddate?.toLocaleDateString(
                                "en-IN"
                              )
                            : subscriptionData.plan === "Dinner"
                            ? subscriptionData.DEnddate?.toLocaleDateString(
                                "en-IN"
                              )
                            : subscriptionData.plan === "Full Day Meal"
                            ? "Lunch (" +
                              subscriptionData.LEnddate?.toLocaleDateString(
                                "en-IN"
                              ) +
                              ")" +
                              " " +
                              "Dinner (" +
                              subscriptionData.DEnddate?.toLocaleDateString(
                                "en-IN"
                              ) +
                              ")"
                            : null}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold priceTag">
                          Grand Total
                        </p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold priceTag">
                          <FaRupeeSign />
                          {subscriptionData.Lsubsprice +
                            subscriptionData.Dsubsprice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-0 py-3 h-100 mt-2 container">
            <div className="row justify-content-center align-items-center h-100">
              <div className="CautionOuter">
                <div className="Caution text-start p-3">
                  <strong>
                    If you want to add a subscription, please click the 'Add
                    Subscription' button otherwise continue.
                  </strong>
                </div>
                <button
                  className="btn btn-danger fw-semibold ms-3 mb-3"
                  onClick={() => {
                    navigate("/subscription");
                  }}
                >
                  Add Subscription
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="accordion mt-3" id="accordionExample">
          <div className="h-100 py-1">
            <div className="row d-flex justify-content-center align-items-center rounded-0 h-100">
              <div className="">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <TbDiscount2 className="Discount me-2" />
                      {appliedCoupon
                        ? `coupon code successfully applied!!`
                        : "Apply Coupon"}
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                      ref={closeRef}
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="btn-close btn"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="container mt-5">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row ">
                                  <div className="col-xl-8 col-md-8 col-sm-12 col-12 applyCoupanContent">
                                    <div className="cardContent">
                                      <h3 className="mb-2 text-nowrap">
                                        Apply
                                      </h3>
                                      <Controller
                                        name="coupanCode"
                                        control={control}
                                        rules={validationRules}
                                        render={({ field }) => (
                                          <input
                                            {...field}
                                            type="text"
                                            id="coupanCode"
                                            className="form-control p-3 InputText "
                                            placeholder="Enter Coupon Code.."
                                          />
                                        )}
                                      />
                                      {errors.coupanCode && (
                                        <span className="error-message text-danger">
                                          {errors.coupanCode.message}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-md-4 col-sm-12 col-12 d-flex align-items-center mt-4 justify-content-center">
                                    <button
                                      type="submit"
                                      className="btnApply btn-lg py-2 px-3"
                                      data-bs-dismiss={
                                        appliedCoupon ? "modal" : undefined
                                      }
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>

                            <div className="container mt-5">
                              <div className="boxShadowCss rounded position-relative py-3">
                                <div className="row">
                                  <div className="col-12 col-md-6 cardContent position-absolute">
                                    <h3 className="text-nowrap AvailableContent mx-2">
                                      Available Coupons
                                    </h3>
                                  </div>
                                </div>

                                {billdetail.map((coupanInfo) => (
                                  <div className="row mt-5 justify-content-start mx-3 mb-3">
                                    <div className="col-12 col-md-6 applyCoupanContent">
                                      <div
                                        className="background-imageContent  d-flex align-items-center justify-content-center"
                                        onClick={() =>
                                          handleCouponClick(coupanInfo)
                                        }
                                      >
                                        <h4 className="text-nowrap helloContent text-dark ">
                                          {coupanInfo.coupanCode}
                                        </h4>
                                      </div>
                                      <div className="discountCoupon">
                                        <div className="container">
                                          <div className="row">
                                            <div className="col-12 ">
                                              <h5 className="text-start fs-5">
                                                Flat{" "}
                                                {coupanInfo.coupanPercentage}%
                                                OFF
                                              </h5>
                                            </div>
                                            <div className="col-12">
                                              <span className="text-start">
                                                Use code {coupanInfo.coupanCode}{" "}
                                                & get flat{" "}
                                                {coupanInfo.coupanPercentage}%
                                                off
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 container h-100 py-1">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="bill-detail1 rounded-0">
              <div className="card-body-content p-2">
                <div className="container p-2">
                  <h4 className="bill-head fs-5">Bill Details</h4>
                  <div className="row d-flex bill-content justify-content-between pt-2">
                    <div className="col-xl-5 col-md col-sm col-lg-6 col">
                      <p className="text-black fw-bold priceTag">Price</p>
                    </div>
                    <div className="col-xl-7 col-md col-sm col-lg-6 col">
                      <p className="float-between text-black fw-bold priceTag">
                        <FaRupeeSign />
                        {initialPrice}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-md col-sm col-lg-6 col">
                      <p className="text-black fw-bold priceTag">
                        {isPlanValid ? (
                          <span>Subscription</span>
                        ) : (
                          <span>quantity</span>
                        )}
                      </p>
                    </div>
                    <div className="col-xl-7 col-md col-sm col-lg-6 col">
                      <p className="float-between fw-bold priceTag">
                        {isPlanValid ? (
                          <span>
                            {subscriptionData.Lsubsplan ||
                              subscriptionData.Dsubsplan}
                          </span>
                        ) : (
                          <span>{cartItem.quantity}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  {appliedCoupon ? (
                    <div className="row">
                      <div className="col-xl-5 col-md col-sm col-lg-6 col">
                        <p className="text-black fw-bold ">
                          Applied Coupon 
                        </p>
                      </div>
                      <div className="col-xl-7 col-md col-sm col-lg-6 col">
                        <p className="float-between fw-bold ">
                          -{couponData.coupanPercentage}% 
                        </p>
                      </div>
                    </div>
                  ) : null}

                  <div className="row">
                    <div className="col-xl-5 col-md col-sm col-lg-6 col">
                      <p className="text-black fw-bold priceTag">Tax Charges</p>
                    </div>
                    <div className="col-xl-7 col-md col-sm col-lg-6 col">
                      <p className="float-between fw-bold priceTag">
                        -{couponData.taxRate}%
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-md col-sm col-lg-6 col">
                      <p className="text-black fw-bold priceTag">
                        Delivery Charges
                      </p>
                    </div>
                    <div className="col-xl-7 col-md col-sm col-lg-6 col">
                      <p className="float-between fw-bold priceTag">
                        +{couponData.deliveryCharges}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-md col-sm col-lg-6 col">
                      <p className="text-black fw-bold priceTag">
                        Discount Percentage
                      </p>
                    </div>
                    <div className="col-xl-7 col-md col-sm col-lg-6 col">
                      <p className="float-between fw-bold priceTag">
                      -{couponData.discountPercentage}%
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-md col-sm col-lg-6 col">
                      <p className="text-black fw-bold priceTag">To Pay</p>
                    </div>
                    <div className="col-xl-7 col-md col-sm col-lg-6 col">
                      <p className="float-between fw-bold priceTag">
                        <FaRupeeSign />
                        {couponAdjustedPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-0 container py-3 h-100 mt-2 note">
          <div className="row justify-content-center align-items-center h-100">
            <div className="CautionOuter">
              <div className="Caution text-start p-4">
                <p>
                  Review your order and address detail to avoid cancellations{" "}
                  <br />
                  <strong className="strongNote">Note :</strong> If you cancel
                  within 1 minutes of placing your order, a 100% refund will be
                  issued. No refund for cancellation made after 1 minutes. Avoid
                  cancellation as it leads to food wastage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="row">
            <div className="col-sm col-md col-xl col-lg col text-center">
              <button
                className="btn1"
                onClick={() => navigate("/paymentWallet")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;

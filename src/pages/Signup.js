import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ModalLogin from "./Login";
import "../utils/Style.css";
import { useDispatch } from "react-redux";
import { createSignup } from "../features/slices/signupSlice";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(createSignup(data));
      navigate("/meal");
      window.location.reload();
    } catch (error) {
      console.log("Error occurred while creating signup:", error);
    }
  };
  
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  
  const validateEmail = (value) => {
    if (!value) {
      return "This field is required";
    }
    if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
      !/^\d{10}$/.test(value)
    ) {
      return "Invalid email format";
    }
    if (/@/.test(value) && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return "Invalid email format";
    }
    return true;
  };

  const validateMobile = (value) => {
    if (!value) {
      return "Mobile No is required";
    }
    if (value.length !== 10) {
      return "Invalid mobile number format";
    }
    return true;
  };

  if (showLogin) {
    return <ModalLogin />;
  }

  return (
    <section className="v8-100">
      <div className="row row-container flex-wrap-reverse">
        <div className="col-md-6">
          <img src="/assets/images/bgImage.png" className="img-fluid login-bg" alt="Background Image" />
        </div>

        <div className="col-md-6">
          <div className="text-end">
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="btn-close my-1 mx-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="text-center">
            <img src="/assets/images/logo5.png" className="card-img-top login-logo" alt="Logo" />
          </div>
          <div className="container-fluid ps-0">
            <div className="row flex-wrap-reverse">
              <div className="col-md-12">
                <div className="text-center">
                  <h1 className="pt-4 fw-bolder text-center">SignUp</h1>

                  <form className="pt-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1 mx-3">
                      <label className="form-label fw-bolder signup-email">Full Name*</label>
                      <Controller
                        control={control}
                        name="fullName"
                        rules={{ required: "Full Name is required" }}
                        render={({ field }) => (
                          <input
                            type="text"
                            className={`form-control border border-dark signup-form login-input ${errors.fullName ? "is-invalid" : ""
                              }`}
                            {...field}
                          />
                        )}
                      />
                      {errors.fullName && (
                        <span className="invalid-feedback text-start">{errors.fullName.message}</span>
                      )}
                    </div>
                    <div className="mb-1 mx-3">
                      <label className="form-label fw-bolder signup-email">Mobile*</label>
                      <Controller
                        control={control}
                        name="mobile"
                        rules={{ validate: validateMobile }}
                        render={({ field }) => (
                          <input
                            type="text"
                            className={`form-control border border-dark signup-form login-input ${errors.mobile ? "is-invalid" : ""
                              }`}
                            {...field}
                          />
                        )}
                      />
                      {errors.mobile && (
                        <span className="invalid-feedback text-start">{errors.mobile.message}</span>
                      )}
                    </div>

                    <div className="mb-1 mx-3">
                      <label className="form-label fw-bolder signup-email">Email Id*</label>
                      <Controller
                        control={control}
                        name="email"
                        rules={{ validate: validateEmail }}
                        render={({ field }) => (
                          <input
                            type="text"
                            className={`form-control border border-dark signup-form login-input ${errors.email ? "is-invalid" : ""
                              }`}
                            {...field}
                          />
                        )}
                      />
                      {errors.email && (
                        <span className="invalid-feedback text-start">{errors.email.message}</span>
                      )}
                    </div>

                    <div className="mb-1 mx-3">
                      <label className="form-label fw-bolder signup-password">Password*</label>
                      <Controller
                        control={control}
                        name="password"
                        rules={{
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long",
                          },
                        }}
                        render={({ field }) => (
                          <input
                            type="password"
                            className={`form-control border border-dark signup-form login-input ${errors.password ? "is-invalid" : ""
                              }`}
                            {...field}
                          />
                        )}
                      />
                      {errors.password && (
                        <span className="invalid-feedback text-start">{errors.password.message}</span>
                      )}
                    </div>

                    <div className="mb-1 mx-3 text-start">
                      <div className="form-check">
                        <input
                          className={`form-check-input border border-dark login-input ${errors.terms ? "is-invalid" : ""}`}
                          type="checkbox"
                          id="termsCheckbox"
                          {...register("terms", {
                            required: "You must agree to the terms",
                          })}
                        />
                        <label className="form-check-label fw-bolder" htmlFor="termsCheckbox">
                          I agree to Tifin Smart's Terms of Service, Privacy Policy, and Content Policies.
                        </label>
                        {errors.terms && (
                          <span className="invalid-feedback text-start">{errors.terms.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn fw-bolder signup-submit px-5 mt-1">
                        SIGNUP
                      </button>
                    </div>
                  </form>

                  <div className="my-2 text-center fw-bolder">─────── OR ───────</div>

                  <div className="text-center">
                    <button className="btn btn-light btn-sm fw-bolder btn-outline-dark me-2 px-1">
                      <FaFacebook className="fs-2 me-2 text-primary" /> Facebook
                    </button>
                    <button className="btn btn-light btn-sm fw-bolder btn-outline-dark me-3 px-3">
                      <FcGoogle className="fs-2 me-2" /> Google
                    </button>
                  </div>

                  <div className="mt-1 text-center fw-bolder ">
                    <p className="pb-lg">
                      <div className="btn fw-bolder" onClick={handleLoginClick}>
                        Already have an account? Login
                      </div>
                    </p>
                  </div>

                  <div className="text-end">
                    <img className="img-fluid signup-eclipse" src="/assets/images/eclipse2.png" alt="Eclipse Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

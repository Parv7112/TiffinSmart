import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../utils/Style.css";
import ModalSignup from "./Signup";
import Forgetpassword from "./Forgetpassword";
import { loginUser } from "../features/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ModalLogin = () => {
  const { handleSubmit, formState: { errors }, control } = useForm();
  const [showSignup, setShowSignup] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then((user) => {
        navigate("/meal");
        window.location.reload()
      })
      .catch((error) => {
        console.log("Login error:", error);
      });
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleForgetPasswordClick = () => {
    setShowForgetPassword(true);
  };

  const handleCloseModal = () => {
    setShowSignup(false);
    setShowForgetPassword(false);
  };

  const validateEmailOrMobile = (value) => {
    if (!value) {
      return 'This field is required';
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) && !/^\d{10}$/.test(value)) {
      return 'Invalid email or mobile number format';
    }
    return true;
  };

  return (
    <section className="v8-100">
      <div className="containter-fluid ps-0">
        {!showSignup && !showForgetPassword && (
          <div className="row row-container flex-wrap-reverse">
            <div className="col-md-6">
              <img
                src="/assets/images/bgImage.png"
                className="img-fluid login-bg"
                alt="Background Image"
              />
            </div>

            <div className="col-md-6 ">
              <div className="text-end">
                <button
                  type="button"
                  className="btn-close my-1 mx-1" 
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="text-center">
                <img
                  src="/assets/images/logo5.png"
                  className="card-img-top login-logo"
                  alt="Logo"
                />
              </div>

              <div className="text-center">
                <h1 className="pt-4 fw-bolder text-center">Login</h1>

                <form className="pt-2" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 pt-2 mx-3">
                    <label className="form-label fw-bolder login-email">
                      Email/Mobile No
                    </label>
                    <Controller
                      control={control}
                      name="identifier"
                      rules={{ validate: validateEmailOrMobile }}
                      render={({ field }) => (
                        <input
                          type="text"
                          className={`form-control border border-dark login-form login-input ${
                            errors.identifier ? "is-invalid" : ""
                          }`}
                          {...field}
                        />
                      )}
                    />
                    {errors.identifier && (
                      <span className="invalid-feedback text-start">
                        {errors.identifier.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-1 mx-3">
                    <label className="form-label fw-bolder login-password">
                      Password*
                    </label>
                    <Controller
                      control={control}
                      name="password"
                      rules={{
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters long"
                        }
                      }}
                      render={({ field }) => (
                        <input
                          type="password"
                          className={`form-control border border-dark login-form login-input ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          {...field}
                        />
                      )}
                    />
                    {errors.password && (
                      <span className="invalid-feedback text-start">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <div className="mt-1 text-end fw-bolder">
                    <button
                      type="button"
                      className="btn fw-bolder mx-4"
                      onClick={handleForgetPasswordClick}
                    >
                      Forget Password?
                    </button>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn fw-bolder login-submit mt-2 px-5"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "LOGIN"}
                    </button>
                  </div>
                </form>

                {error && (
                  <div className="text-center text-danger mt-2">
                    {error}
                  </div>
                )}

                <div className="my-3 text-center fw-bolder">─────── OR ───────</div>

                <div className="text-center">
                  <button className="btn btn-light btn-sm fw-bolder btn-outline-dark me-2 px-1">
                    <FaFacebook className="fs-2 me-2 text-primary" /> Facebook
                  </button>
                  <button className="btn btn-light btn-sm fw-bolder btn-outline-dark me-3 px-3">
                    <FcGoogle className="fs-2 me-2" /> Google
                  </button>
                </div>

                <div className="mt-2 text-center fw-bolder">
                  <p className="pb-lg">
                    <button
                      className="btn mt-2 fw-bolder"
                      onClick={handleSignupClick}
                    >
                      Don't have an account? Sign Up
                    </button>
                  </p>
                </div>
                <div className="text-end">
                  <img
                    className="img-fluid login-eclipse"
                    src="/assets/images/eclipse2.png"
                    alt="Eclipse Image"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {showSignup && (
          <ModalSignup handleCloseModal={handleCloseModal} />
        )}
        {showForgetPassword && (
          <Forgetpassword handleCloseModal={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default ModalLogin;

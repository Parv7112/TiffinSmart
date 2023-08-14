import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ResetPassword from './ResetPassword';

function Forgetpassword({ handleCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(true);
  const [otp, setOTP] = useState(['', '', '', '']);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const inputRefs = useRef([]);

  const onVerify = () => {
    setShowResetPassword(true);
    setTimeout(() => {
      setShowResetPassword(true);
    }, 3000);
  };

  const handleVerify = () => {
    setIsVerifyClicked(true);
  
    if (otp.join('').length === 4) {
      if (otp.join('') === '1234') {
        setTimeout(()=>{
          setShowSuccessMessage(true);
        },1000)
        setTimeout(() => {
          setShowResetPassword(true);
        }, 3000);
      } else {
        
        setError('otp', { message: 'Incorrect OTP' });
      }
    }
  };

  const handleInputChange = (index, e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      if (index < inputRefs.current.length - 1 && value !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const onSubmit = () => {
    setShowOTP(true);
    setShowVerifyButton(true);
    setShowForgetPassword(false);
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    // Resend OTP logic
  };

  const validateEmailOrMobile = (value) => {
    if (!value) {
      return 'This field is required';
    }
    if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
      !/^\d{10}$/.test(value)
    ) {
      return 'Invalid email or mobile number format';
    }
    if (!/@/.test(value) && value.length !== 10) {
      return 'Invalid mobile number format';
    }
    if (
      /@/.test(value) &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ) {
      return 'Invalid email format';
    }
    return '';
  };

  const validateOTP = (value) => {
    if (!value) {
      return 'This field is required';
    }
    if (!/^\d{1}$/.test(value)) {
      return 'Invalid OTP format';
    }
    return '';
  };

  const handleFormSubmit = (data) => {
    const emailError = validateEmailOrMobile(data.email);
    if (emailError) {
      setError('email', { message: emailError });
      return;
    }
    onSubmit(data);
    const otpError = validateOTP(data.otp);
    if (otpError) {
      return;
    }
    onVerify(data);
  };

  return (
    <div className="modal-container rounded-0 fp-modal-container">
      {!showResetPassword && (
        <div className="modal-content rounded-0 fp-modal-content">
          <button
            type="button"
            className="btn-close align-self-end"
            onClick={handleCloseModal}
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="text-center">
              <img
                className="card-img-top lock my-2"
                src="/assets/images/lock.png"
                alt="CardImage"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center mb-3 my-2 forget-form">
                Forget Password
              </h5>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                {showForgetPassword && (
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="mb-2 labtext fw-bolder">
                      Email/Mobile no.*
                    </label>
                    <input
                      type="text"
                      className="form-control inp"
                      id="email"
                      {...register('email')}
                    />
                    {errors.email && (
                      <span className="error-text fieldreq">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                )}
                {showForgetPassword && (
                  <div className="d-flex justify-content-center">
                    <button className="btn px-4 py-2 ftbt" type="submit">
                      SUBMIT
                    </button>
                  </div>
                )}
              </form>

              {showOTP && (
                <div className="container">
                 
                  {showSuccessMessage ? (
                    <h5 className="text-center alertmessage ">
                      OTP verified successfully!
                    </h5>
                  ) : (
                    <div>
                      <form onSubmit={handleSubmit(handleVerify)}>
                        <div className="form-group mx-5">
                        <label htmlFor="otp" className="mb-2 mx-1 labtext fw-bolder">OTP</label>
                          <div className="input-group justify-content-center mb-3">
                            {otp.map((digit, index) => (
                              <input
                                key={index}
                                type="text"
                                className={`form-control otp-field forgetotp ${
                                  isVerifyClicked && digit === ''
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                value={digit}
                                onChange={(e) =>
                                  handleInputChange(index, e)
                                }
                                ref={(el) => (inputRefs.current[index] = el)}
                                maxLength={1}
                                pattern="\d"
                              style={{
                                borderRadius: "6px"
                              }}
                              />
                            ))}
                          </div>
                          {isVerifyClicked && otp.join('').length !== 4 && (
                            <div className="invalid-feedback">
                              Please enter a 4-digit OTP.
                            </div>
                          )}
                        </div>
                        <div className="container text-center mt-2">
                      <p className="forgetpara">
                        Didn’t receive the OTP?{' '}
                        <a className="forgetpara" href="/" onClick={handleResendOTP}>
                          Resend
                        </a>
                      </p>
                    </div>
                        <div className='mt-4 text-center'>
                        <button
                          type="submit"
                          className="btn  verifybtn "
                        >
                          VERIFY
                        </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {showResetPassword && (
        <ResetPassword handleCloseModal={() => setShowResetPassword(false)} />
      )}
    </div>
  );
}

export default Forgetpassword;

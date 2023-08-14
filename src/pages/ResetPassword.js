import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ModalLogin from './Login';
import PasswordChange from './PasswordChange';

function ResetPassword({ handleCloseModal }) {
  const { handleSubmit, control, formState: { errors }} = useForm();
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setShowPasswordChangeModal(true); 
  };

  const handleClose = () => {
    handleCloseModal();
    setShowLoginModal(true);
  };

  if (showPasswordChangeModal) {
    return <PasswordChange />;
  }

  return (
    <div className="container my-card-container mt-5">
      <section className="my-4 d-flex justify-content-center align-items-center resetsection">
        <div className="card rounded-0 p-5 resetcard">
          <button type="button" className="btn-close align-self-end rp-closebtn" onClick={handleClose} aria-label="Close"></button>
          <div className="text-center">
            <img className="card-img-top lock" src="/assets/images/lock.png" alt="CardImage" />
          </div>
          <div className="card-body">
            <h3 className="card-title text-center mb-3 resetpass">Reset Password</h3>
            <p className="text-sm-left text-center m-0 resettext">Set the new password for your account. So</p>
            <p className="text-sm-left text-center resettext">you can login and access all the features</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-1 mt-1">
                <label htmlFor="password" className='resetlab'>New Password*</label>
                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  rules={{
                    required: 'New Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long',
                    },
                  }}
                  render={({ field }) => (
                    <input
                      type={visible ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      value={field.value}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
                <label htmlFor="cnfpassword" className='mb-2 mt-3 resetlab'>Confirm Password*</label>
                <Controller
                  control={control}
                  name="cnfpassword"
                  defaultValue=""
                  rules={{
                    required: 'Confirm Password is required',
                    validate: (value) => value === password || 'Passwords do not match',
                  }}
                  render={({ field }) => (
                    <input
                      type={visible ? 'text' : 'password'}
                      className="form-control"
                      id="cnfpassword"
                      value={field.value}
                      onChange={(e) => {
                        setCnfPassword(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
                {errors.cnfpassword && (
                  <p className="error">{errors.cnfpassword.message}</p>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <button type='submit' className="btn mt-4 btn-sm reset">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {showLoginModal && (
        <ModalLogin handleCloseModal={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}

export default ResetPassword;


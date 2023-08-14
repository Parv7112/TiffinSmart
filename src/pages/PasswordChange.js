import React, { useState } from 'react';
import { FaRegHourglass } from 'react-icons/fa';
import ModalLogin from './Login';
import '../utils/Style.css';

function PasswordChange() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  // Disable scrolling on the body when the modal is open
  if (showLoginModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <>
      {showLoginModal ? (
        <div className="modal-container">
          <div className="modal-dialog modal-lg">
            <div className="modal-content login-modal lo-md">
              <div className="modal-body login scrollable-modal">
                <ModalLogin />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container my-card-container mt-5">
          <section className="my-1 d-flex justify-content-center align-items-center">
            <div className="card p-5 passchange">
              <div className="text-center">
                <img
                  className="card-img-top lock"
                  src="/assets/images/lock2.png"
                  alt="CardImage"
                />
              </div>
              <div className="card-body">
                <div className="form-group mb-3">
                  <label htmlFor="email" className="mb-2 pctext">
                    Your password has been reset successfully
                  </label>
                </div>
                <div className="container text-center mb-4">
                  <p>
                    Please Wait{' '}
                    <FaRegHourglass className="m-1 mb-2 passpara" />
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn pc"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default PasswordChange;

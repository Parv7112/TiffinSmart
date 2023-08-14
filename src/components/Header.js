import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalLogin from "../pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/slices/loginSlice";
import { initializeSignup } from "../features/slices/signupSlice";
import { UserAPI } from "./basePath";
import Help from "../pages/Help";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };
 
  const handletrackOrder = () => {
    navigate('/ordertracking');

  }

  const handleSubscriptionClick = () => {
    navigate('/subscriptionDetails');
  };

  const handleProfileClick = () => {
    navigate('/accountdetails');
  };

  const handleOrderClick = () => {
    navigate('/accountdetails/orderHistory');
  };

  const handleSettingsClick = ()=>{
    navigate("/accountdetails/settings")
  }

  const handleHelpClick = () => {
    setShowHelpModal(true);
  };

  const handleHelpClose = () => {
    setShowHelpModal(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowDropdown(false);
    setFullName("");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    dispatch(initializeSignup());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const fetchFullName = async () => {
        try {
          const response = await fetch(`${UserAPI}/${user.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch full name");
          }
          const userData = await response.json();
          setFullName(userData.fullName);
        } catch (error) {
          console.log(error);
        }
      };

      fetchFullName();
    }
  }, [user]);

  useEffect(() => {
    if (fullName) {
      setShowDropdown(true);
    }
  }, [fullName]);

  const renderHeader = () => {
    if (fullName) {
      return (
        <div className="nav-link active listshadow fw-bold">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle text-decoration-none text-white fw-bolder dropdown-fullname user-fullName"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/assets/images/userProfileImage.png"
                alt="User"
                className="rounded-circle me-2"
                height="30"
                width="30"
              />
              {fullName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <button className="dropdown-item fw-bold"  onClick={handleProfileClick}>PROFILE</button>
              </li>
              <li>
                <button className="dropdown-item fw-bold" onClick={handleOrderClick}>ORDER</button>
              </li>
              <li>
                <button className="dropdown-item fw-bold" onClick={handletrackOrder}>TRACK ORDER</button>
              </li>
              <li>
                <button className="dropdown-item fw-bold"  onClick={handleSubscriptionClick}>SUBSCRIPTION</button>
              </li>
              <li>
                <button className="dropdown-item fw-bold" onClick={handleSettingsClick} >SETTINGS</button>
              </li>
              <li>
                <button className="dropdown-item fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#helpModal"
                  onClick={handleHelpClick}>
                  HELP
                </button>
              </li>
              <li>
                <button className="dropdown-item fw-bold" onClick={handleLogout}>
                  LOGOUT
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <a
          type="button"
          className="nav-link active listshadow fw-bold text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          onClick={handleLoginClick}
        >
          Login
        </a>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark static-top rounded-3 fs-5 fixed-top my-4 headbg mx-4" style={{ padding: "0px 0" }}>
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="/">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              height="70"
              width="70"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ background: "silver" }}
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto opacity-100 rounded">
              <li className="nav-item">
                <Link className="nav-link active listshadow fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active listshadow fw-bold"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active listshadow fw-bold"
                  to="/meal"
                >
                  Meals
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active listshadow fw-bold"
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">{renderHeader()}</li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="helpModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="mt-5 modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <Help />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="loginModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content login-modal">
            <div className="modal-body login">
              <ModalLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

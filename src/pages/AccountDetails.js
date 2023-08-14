import { RiMenuUnfoldLine, RiUserSettingsLine, RiMenuLine, RiArrowDropDownLine } from 'react-icons/ri';
import { FaUserAlt, FaBoxOpen, FaWallet } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';
import { BsWalletFill, BsFillCalendar2CheckFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showProfiledata } from "../features/slices/accountdetailsprofileSlice";
import { loginUser } from "../features/slices/loginSlice";
import AccountDetailsProfile from './AccountDetailsProfile';
import EditProfile from './EditProfile';
import OrderHistory from './OrderHistory';
import UserWallet from './UserWallet';
import UserPayment from './UserPayment';
import UserAddress from './UserAddress';
import UserSettings from './UserSettings';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React from 'react';
import ManagePlan from './ManagePlan';
import ViewOrder from './ViewOrder';
import CoverProfilePicture from './CoverProfilePicture';
import Spinner from "../components/Spinner";

function AccountDetails() {

  const { defaultTab } = useParams();
  const {pathname} = useLocation();

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('profile');
  const [selectedOrder, setSelectedOrder] = useState(null);


  const dispatch = useDispatch()
  const profileData = useSelector((state) => state.accountdetailsprofile.data);
  const loading = useSelector((state) => state.accountdetailsprofile.loading);
  const error = useSelector((state) => state.accountdetailsprofile.error);
  const loggedInUser = useSelector((state) => state.login.user);
  const filteredProfileData = profileData.filter((data) => data.id === loggedInUser.id);


  const handleProfileClick = () => {
    setCurrentComponent('profile');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOrderHistoryClick = () => {
    setCurrentComponent('orderHistory');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePlanClick = () => {
    setCurrentComponent('managePlan');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleWalletClick = () => {
    setCurrentComponent('wallet');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePaymentClick = () => {
    setCurrentComponent('payment');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAddressClick = () => {
    setCurrentComponent('address');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSettingsClick = () => {
    setCurrentComponent('settings');
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(showProfiledata());
    dispatch(loginUser());

    setCurrentComponent(defaultTab || 'profile');

  }, [pathname,dispatch,defaultTab])


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 570) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
       {loading &&
          <div className="d-flex flex-column justify-content-center align-items-center fs-5 fw-bold mt-5 vh-100 ">
          <Spinner />
          <div className="mt-3 text-decoration">Please Wait....</div>
          </div>
       }
       {filteredProfileData.map((data) => (
        <div className='my-4 py-5 my-md-5 container-fluid' key={data.id} style={{ overflowX: 'hidden' }}>
          <div className="row pt-5 pt-md-4 ps-3 ps-lg-4">
            <button
              className={`col-auto border-0 bg-transparent pe-0 ${isButtonDisabled ? 'disabled-button' : ''}`}
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              disabled={isButtonDisabled}
            >
              <RiMenuUnfoldLine className="admenuicon " />
            </button>
            <button className="col-auto border-0 bg-transparent p-0" type="button" onClick={handleMenuClick} >
              <RiMenuLine className="addropdownmenuicon" />
            </button>
            <div className="col-auto ps-1">
              <p className='adtitle fw-bolder '>Hi, {data.fullName}</p>
            </div>
            <div className="row">
              <div className='col'>
                <p className='adsubtitle fw-semibold mb-sm-0 mb-md-3 ps-3 ps-md-4'>{data.email}</p>
              </div>
            </div>

            {/* mobile side bar start */}

            <div className="addropdownmenu">
              {isDropdownOpen && (
                <ul className="ad-dropdown-menu list-unstyled p-3">
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none" href="#profile" onClick={handleProfileClick} type="button">
                    <FaUserAlt className='col-auto' />
                    <div className='col-auto'>Profile</div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none text-decoration-none" type="button" onClick={handleOrderHistoryClick} href="#order" >
                    <FaBoxOpen className='col-auto' />
                    <div className='col-auto'>Order </div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none" href='#plan' type="button" onClick={handlePlanClick}>
                    <BsFillCalendar2CheckFill className='col-auto' />
                    <div className='col-auto'>My Plan</div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none " href="#wallet" type="button" onClick={handleWalletClick}>
                    <FaWallet className='col-auto' />
                    <div className='col-auto'> Wallet </div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none" href="#payment" type="button" onClick={handlePaymentClick}>
                    <BsWalletFill className='col-auto' />
                    <div className='col-auto'>Payment</div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none" href="#address" type="button" onClick={handleAddressClick}>
                    <MdLocationOn className='col-auto' />
                    <div className='col-auto'> Address </div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                  <li><a className="row g-2 w-100 ad-dropdown-item py-2 border-0 bg-transparent align-items-center text-decoration-none" type="button" href="#settings" onClick={handleSettingsClick}>
                    <RiUserSettingsLine className='col-auto' />
                    <div className='col-auto'> Settings </div>
                    <div className='col d-flex justify-content-end me-3'>
                      <RiArrowDropDownLine />
                    </div>
                  </a></li>
                </ul>
              )}
            </div>

            {/* mobile side bar end */}

          </div>
          <div className="ad-sidebar-space">
            <div className="row px-lg-4">

              {isSidebarOpen ? (
                <div className="col-md-auto py-4 fw-bold adsmallsidebarbg text-center px-4">
                  <div className='row py-3'>
                    < a className='col-auto ad-menu-icons adcolor' onClick={handleProfileClick} type="button" href="#profile"><FaUserAlt /></a>
                  </div>
                  <div className='row py-3'>
                    <a className='col-auto ad-menu-icons adcolor' type="button" href="#order" onClick={handleOrderHistoryClick}><FaBoxOpen /></a >
                  </div>
                  <div className='row py-3'>
                    <a className='col-auto ad-menu-icons adcolor' href="#plan" type="button" onClick={handlePlanClick}><BsFillCalendar2CheckFill /></a>
                  </div>
                  <div className='row py-3'>
                    <a className='col-auto ad-menu-icons adcolor' href="#wallet" type="button" onClick={handleWalletClick}>
                      <FaWallet /></a>
                  </div>
                  <div className='row py-3'>
                    <a className='col-auto ad-menu-icons adcolor' href="#payment" type="button" onClick={handlePaymentClick}><BsWalletFill /></a>
                  </div>
                  <div className='row py-3'>
                    <a className='col-auto ad-menu-icons adcolor' href="#address" type="button" onClick={handleAddressClick}><MdLocationOn /></a>
                  </div>
                  <div className='row py-3'>
                    <a className='col-auto ad-menu-icons adcolor' href="#settings" type="button" onClick={handleSettingsClick}><RiUserSettingsLine /></a>
                  </div>
                </div>
              ) : (
                <div className="col-3 fw-bold adsidebarbg text-center">
                  <p className='py-4 ad-menu-title'>ACCOUNT DETAILS</p>
                  <a className='row border-bottom border-white pb-3 align-items-end text-decoration-none adcolor' onClick={handleProfileClick} href="#profile" type="button">
                    <div className='col-auto ps-4 ms-lg-4 ad-menu-icons'><FaUserAlt /></div>
                    <div className='col-auto mt-2 ad-menu-title'>Profile</div>
                    <div className='col me-lg-4 pe-3 pe-lg-2 d-flex flex-row-reverse ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                  <a className='row border-bottom border-white py-3 align-items-end text-decoration-none  adcolor' type="button" onClick={handleOrderHistoryClick} href="#order">
                    <div className='col-auto ps-4  ms-lg-4 ad-menu-icons'><FaBoxOpen /></div>
                    <div className='col-auto mt-2 ad-menu-title' >Order</div>
                    <div className='col me-lg-4 pe-3 pe-lg-2 d-flex flex-row-reverse ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                  <a className='row border-bottom border-white py-3 align-items-end text-decoration-none adcolor' type="button" onClick={handlePlanClick} href="#plan">
                    <div className='col-auto ps-4 ms-lg-4 ad-menu-icons'><BsFillCalendar2CheckFill /></div>
                    <div className='col-auto mt-2 ad-menu-title'>My Plan</div>
                    <div className='col me-lg-4 pe-3 pe-lg-2 d-flex flex-row-reverse ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                  <a className='row border-bottom border-white py-3 align-items-end text-decoration-none adcolor' href="#wallet" type="button" onClick={handleWalletClick}>
                    <div className='col-auto ps-4 ms-lg-4 ad-menu-icons'><FaWallet /></div>
                    <div className='col-auto mt-lg-2 ad-menu-title'>Wallet</div>
                    <div className='col me-lg-4 pe-3 pe-lg-2 d-flex flex-row-reverse ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                  <a className='row border-bottom border-white py-3 align-items-end text-decoration-none adcolor' href="#payment" type="button" onClick={handlePaymentClick}>
                    <div className='col-auto ps-4 ms-lg-4 ad-menu-icons'><BsWalletFill /></div>
                    <div className='col-auto mt-lg-2 ad-menu-title'>Payment</div>
                    <div className='col me-lg-4 pe-3 pe-lg-2 d-flex flex-row-reverse  ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                  <a className='row border-bottom border-white py-3 align-items-end text-decoration-none adcolor' type="button" onClick={handleAddressClick} href="#address">
                    <div className='col-auto ps-4  ms-lg-4  ad-menu-icons'><MdLocationOn /></div>
                    <div className='col-auto mt-lg-2 ad-menu-title'>Address</div>
                    <div className='col me-lg-4 pe-3 pe-lg-2 d-flex flex-row-reverse  ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                  <a className='row py-3 align-items-end text-decoration-none adcolor' type="button" href="#settings" onClick={handleSettingsClick}>
                    <div className='col-auto ps-4  ms-lg-4 ad-menu-icons'><RiUserSettingsLine /></div>
                    <div className='col-auto mt-lg-2 ad-menu-title'>Settings</div>
                    <div className='col pe-3 pe-lg-2 d-flex flex-row-reverse me-lg-4 ad-menu-icons'><MdKeyboardArrowRight /></div>
                  </a>
                </div>
              )}

              <div className={isSidebarOpen ? "col-md ad-smscreen-img px-4" : "col-md-9 ps-4 pe-lg-0"}>
                <CoverProfilePicture isSidebarOpen={isSidebarOpen} setCurrentComponent={setCurrentComponent} currentComponent={currentComponent}/>


                <div className={isSidebarOpen ? 'adsmallbox' : 'adbox'}>
                  {currentComponent === 'profile' && <AccountDetailsProfile />}
                  {currentComponent === 'editProfile' && <EditProfile />}
                  {currentComponent === 'managePlan' && <ManagePlan />}
                  {currentComponent === 'wallet' && <UserWallet />}
                  {currentComponent === 'payment' && <UserPayment />}
                  {currentComponent === 'address' && <UserAddress />}
                  {currentComponent === 'settings' && <UserSettings />}
                  {currentComponent === 'orderHistory' && <OrderHistory isSidebarOpen={isSidebarOpen} setCurrentComponent={setCurrentComponent} setSelectedOrder={setSelectedOrder} />}
                  {currentComponent === 'vieworder' && <ViewOrder selectedOrder={selectedOrder} />}
                </div>

              </div>
            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default AccountDetails;
import React, { useState } from 'react';
import Active from './Active';
import Inactive from './Inactive';

const ManageSubscription = () => {
  const [activeComponent, setActiveComponent] = useState('active');

  const handleActiveClick = () => {
    setActiveComponent('active');
  };

  const handleInactiveClick = () => {
    setActiveComponent('inactive');
  };

  return (
    <div id="plan">
      <p className='fw-bolder adprofiletext'>Manage Subscription</p>
      <div className="adprofile container-fluid">
        <div className="d-grid d-flex justify-content-center">
          <button
            className={`fw-bolder fs-3 text-white ms-click ${activeComponent === 'active' ? 'active' : ''}`}
            type="button"
            onClick={handleActiveClick}
          >
            Active
          </button>
          <button
            className={`fw-bolder fs-3 text-white ms-click ${activeComponent === 'inactive' ? 'active' : ''}`}
            type="button"
            onClick={handleInactiveClick}
          >
            Inactive
          </button>
        </div>
        {activeComponent === 'active' ? <Active /> : <Inactive />}
      </div>
    </div>
  );
};

export default ManageSubscription;

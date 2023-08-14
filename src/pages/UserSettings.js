import React, {useState} from "react"; 
import Switch from 'react-switch';

const UserSettings = () => {
  const [enableNotifications, setEnableNotifications] = useState(false);

  const handleNotificationChange = (checked) => {
    setEnableNotifications(checked);
  };

  return (
    <div id="settings">
      <h2 className="fw-bolder adprofiletext">Settings</h2>
      <div className="adprofile">
        <div className="container mt-4">
          <h5 className="adprofiletext pt-4">Account Settings</h5>
          <div className="card col-12 cartDivContent">
            <div className="card-body">
              <h5 className="card-title">Account Information</h5>
              <p className="card-text ">Your account details go here.</p>
              <a
                href="#"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#deleteAccountCancel"
              >
                Delete Account
              </a>

              <div
                className="modal fade"
                id="deleteAccountCancel"
                tabindex="-1"
                aria-labelledby="addressCancelLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog cancel-order-modal">
                  <div className="modal-content">
                    <div className="modal-body d-flex justify-content-center">
                      <h1
                        className="modal-title fs-5 fw-bolder mt-2"
                        id="addressCancelLabel"
                      >
                        Are you sure you want to delete Account?
                      </h1>
                    </div>
                    <div className="modal-body d-flex justify-content-center">
                      <button
                        type="button"
                        className="btnCancel me-4 px-5 mb-4"
                        data-bs-dismiss="modal"
                      >
                        CANCEL
                      </button>
                      <button
                        type="button"
                        className="btnTrackOrder px-5 mb-4"
                        data-bs-dismiss="modal"
                      >
                        CONFIRM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h5 className="adprofiletext pt-4">Notifications</h5>
          <div className="card col-12 cartDivContent">
            <p className="card-title ms-3 mt-3 fw-bold fs-6 mb-0" style={{ color: "#f83838" }}>
              Notification Preferences
            </p>
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Enable All</h5>
              <Switch
                checked={enableNotifications}
                onChange={handleNotificationChange}
                onColor="#28a745" // Change this to your desired color for the "On" state
                offColor="#dc3545" // Change this to your desired color for the "Off" state
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
              />
            </div>
          </div>

          <h5 className="adprofiletext pt-4">Promo & Offers</h5>
          <div className="card col-12 cartDivContent ">
            <div className="card-body pb-0 d-flex justify-content-between">
              <h5 className="card-title">Email</h5>
              
              <Switch
                checked={enableNotifications}
                onChange={handleNotificationChange}
                onColor="#28a745" // Change this to your desired color for the "On" state
                offColor="#dc3545" // Change this to your desired color for the "Off" state
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
              />
              
            </div>
            <div className="card-body pb-0 d-flex justify-content-between">
              <h5 className="card-title">Push</h5>
              <Switch
                checked={enableNotifications}
                onChange={handleNotificationChange}
                onColor="#28a745" // Change this to your desired color for the "On" state
                offColor="#dc3545" // Change this to your desired color for the "Off" state
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
              />
            </div>
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Whatsapp</h5>
              <Switch
                checked={enableNotifications}
                onChange={handleNotificationChange}
                onColor="#28a745" // Change this to your desired color for the "On" state
                offColor="#dc3545" // Change this to your desired color for the "Off" state
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={40}
              />
            </div>
          </div>

          <h5 className="adprofiletext pt-4">Important Updates</h5>
          <div className="card col-12 cartDivContent">
            <div className="card-body d-flex justify-content-between">
              <h5 className="card-title">Email</h5>
              <Switch
            checked={enableNotifications}
            onChange={handleNotificationChange}
            onColor="#28a745" 
            offColor="#dc3545" 
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
          />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;

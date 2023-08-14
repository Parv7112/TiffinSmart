import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showProfiledata } from "../features/slices/accountdetailsprofileSlice";
import { loginUser } from "../features/slices/loginSlice";

const AccountDetailsProfile = () => {

  const dispatch = useDispatch()
  const profileData = useSelector((state) => state.accountdetailsprofile.data);
  const loggedInUser = useSelector((state) => state.login.user);
  const filteredProfileData = profileData.filter((data) => data.id === loggedInUser.id);


  useEffect(() => {
    dispatch(showProfiledata());
    dispatch(loginUser());
  }, [dispatch])

  return (
    <div id="profile">
        <p className='fw-bolder adprofiletext'>Profile</p>
              <div className="adprofile container-fluit">
                <div className="row adprofilefields">
                {filteredProfileData.map((data) => (
                  <div className='d-md-flex' key={data.id}>
                  <div className="col-md">
                    <p className="admainfield ">Full Name*</p>
                    <p className="adfield">{data.fullName}</p>
                    <p className="admainfield ">Email Id*</p>
                    <p className="adfield">{data.email}</p>
                    <p className="admainfield">Gender*</p>
                    <p className="adfield">{data.gender}</p>
                    <p className="admainfield ">City*</p>
                    <p className="adfield">{data.city}</p>
                  </div>
                  <div className="col-md">
                    <p className="admainfield">Mobile Number*</p>
                    <p className="adfield">{data.mobile}</p>
                    {data.almobile && (
                    <>
                    <p className="admainfield">Alternate Mobile Number</p>
                    <p className="adfield">{data.almobile}</p>
                    </>
                    )}
                    <p className="admainfield">Date of Birth*</p>
                    <p className="adfield">{data.dob}</p>
                    <p className="admainfield">State*</p>
                    <p className="adfield">{data.state}</p>
                  </div>
                  </div>
                  ))}
                </div>
              </div>
    </div>
  )
}

export default AccountDetailsProfile
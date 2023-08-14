import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateProfileData } from '../features/slices/editprofileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../features/slices/loginSlice";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { showProfiledata } from "../features/slices/accountdetailsprofileSlice";



const EditProfile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.editProfile.loading);
  const error = useSelector((state) => state.editProfile.error);
  const id = useSelector((state) => state.login.user.id);
  const profileData = useSelector((state) => state.accountdetailsprofile.data);
  const filteredProfileData = profileData.filter((data) => data.id === id);
  


  const initialValues = {
    fullName: '',
    email: '',
    gender: '',
    city: '',
    mobile: '',
    almobile: '',
    dob: '',
    state: '',
    id: id,

  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/,'Please enter valid Email').required('Email is required'),
    gender: Yup.string().required('Gender is required'),
    city: Yup.string().required('City is required'),
    mobile: Yup.string()
    .matches(/^\d{10}$/, 'Please Enter Valid mobile Number')
    .required('Mobile No. is required'),
    almobile: Yup.string()
    .matches(/^\d{10}$/, 'Alternate Mobile No. must be 10 digits'),
    dob: Yup.date().nullable() .required('Date Of Birth is required'),
    state: Yup.string().required('State is required'),
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(updateProfileData(values));
      console.log('Profile updated successfully!');
      console.log(values);
      navigate('/'); 
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });
  
  useEffect(() => {
    dispatch(showProfiledata());
    dispatch(loginUser());
  }, [dispatch])


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <p className='fw-bolder adprofiletext'>Edit Profile</p>
        {filteredProfileData.map((data) => (
        <div className="adprofile container-fluit" key={data.id}>
          <div className="row adprofilefields">
            <div className="col-md">
              <label className="admainfield mb-1 mt-3">Full Name*</label>
              <input
                type="text"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="fullName"
                placeholder={data.fullName}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-danger">{formik.errors.fullName}</div>
              ) : null}

              <label className="admainfield mb-1  mt-3">Email Id*</label>
              <input
                type="email"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="email"
                placeholder={data.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}

              <label className="admainfield mb-1 w-100  mt-3">Gender*</label>
              <div>
                <button
                  type="button"
                  className={`adfield form-control w-auto py-1 px-4 d-inline-flex rounded-0 shadow-sm bg-body-tertiary rounded ${formik.values.gender === 'male' ? 'active' : ''}`}
                  onClick={() => formik.setFieldValue('gender', 'male')}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`adfield ms-4 ms-md-0 ms-lg-4 form-control w-auto py-1 d-inline-flex rounded-0 shadow-sm bg-body-tertiary rounded ${formik.values.gender === 'female' ? 'active' : ''}`}
                  onClick={() => formik.setFieldValue('gender', 'female')}
                >
                  Female
                </button>
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-danger">{formik.errors.gender}</div>
              ) : null}

              <label className="admainfield w-100 mb-1  mt-3">City*</label>
              <input
                type="text"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="city"
                placeholder={data.city}
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-danger">{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="col-md">
              <label className="admainfield mb-1 mt-3">Mobile No.*</label>
              <input
                type="text"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="mobile"
                value={formik.values.mobile}
                placeholder={data.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-danger">{formik.errors.mobile}</div>
              ) : null}

              <label className="admainfield mb-1 mt-3">Alternate Mobile No.</label>
              <input
                type="text"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="almobile"
                value={formik.values.almobile}
                placeholder={data.almobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.almobile && formik.errors.almobile ? (
                <div className="text-danger">{formik.errors.almobile}</div>
              ) : null}
             
              <label className="admainfield mb-1 mt-3">Date of Birth*</label>
              <input
                type="date"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="dob"
                value={formik.values.dob}
                placeholder={data.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <div className="text-danger">{formik.errors.dob}</div>
              ) : null}

              <label className="admainfield mb-1  mt-3">State*</label>
              <input
                type="text"
                className="form-control rounded-0 shadow-sm py-1 bg-body-tertiary rounded"
                name="state"
                value={formik.values.state}
                placeholder={data.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-danger">{formik.errors.state}</div>
              ) : null}
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="col-auto btn fw-bold px-4 editprofile-btn">
              {loading ? "SAVING..." : "SAVE"}
            </button>
          </div>
        </div>
         ))}
      </form>
    </div>
  );
};

export default EditProfile;



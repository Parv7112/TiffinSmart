import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { OurContact } from "../utils/Data";
import Cardcontact from "../utils/Cardcontact";
import { useDispatch } from "react-redux";
import { postFormData } from "../features/slices/ContactusSlice";
import { useLocation } from "react-router-dom";

function ContactUs() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(postFormData(data));
    console.log(data);
  };

  return (
    <div>
      <section className="">
        <div className="">
          <img
            src="/assets/images/testominalimg1.png"
            className="img-fluid contactsec"
            alt="..."
          />
        </div>

        <div className="container">
          <h1 className=" text-center knowPlan titlecolor fw-bolder pb-5">
            Contact Us{" "}
          </h1>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="border border-dark shadow-lg p-3 mb-5 bg-body rounded-0"
            >
              <div className="py-5">
                <label className="fw-bold py-1 fs-4">
                  How can we help you?
                </label>
                <select
                  type="dropdown"
                  {...register("dropdown", { required: true })}
                  className="form-select fw-bold rounded-0 border border-dark fs-5"
                  aria-label="Default select example"
                >
                  <option selected className="">
                    I need help with my Tiffin Smart online order.
                  </option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
                <span className="text-danger">
                  {errors.dropdown?.type === "required" &&
                    "Message is Required"}
                </span>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label className="fw-bold py-1 fs-5">Email Id*</label>

                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    className="form-control border border-dark rounded-0"
                    aria-label="First name"
                  />
                  <span className="text-danger">
                    {errors.email?.type === "required" && "Email is Required"}
                    {errors.email?.type === "pattern" && "Enter Valid Email"}
                  </span>
                </div>
                <div className="col">
                  <label className="fw-bold py-1 fs-5">Mobile No.*</label>

                  <input
                    type="mobile"
                    {...register("mobile", {
                      required: true,
                      pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    })}
                    className="form-control border border-dark rounded-0"
                    aria-label="mobile no"
                  />
                  <span className="text-danger">
                    {errors.mobile?.type === "required" &&
                      "Mobile no is Required"}
                    {errors.mobile?.type === "pattern" &&
                      "Enter Valid Mobile Number"}
                  </span>
                </div>
              </div>

              <div className="mb-3 py-5">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label fw-bold rounded-0 fs-5"
                >
                  Send Us Message :
                </label>
                <textarea
                  {...register("message", { required: true })}
                  className="form-control border border-dark rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
                <span className="text-danger">
                  {errors.message?.type === "required" && "Message is Required"}
                </span>
              </div>
              <div className="d-flex justify-content-center pt-3">
                <button
                  type="submit"
                  className="btn btn-lg fw-bold text-white"
                  style={{ backgroundColor: "#383F51" }}
                >
                  SUBMIT FEEDBACK
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          {/* <img
            src="/assets/images/gallery.png"
            className="img-fluid py-5"
            alt="..."
          /> */}
          <div class="card-group">
            <div class="card">
              <img src="/assets/images/contact1.png" class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <img src="/assets/images/contact2.png" class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <img src="/assets/images/contact3.png" class="card-img-top" alt="..." />
            </div>
          </div>
        </div>

        <div className="container py-5 text-center">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {OurContact.map((item, key) => (
              <div className="col">
                <Cardcontact
                  icon={item.icon}
                  title={item.title}
                  para={item.para}
                  para1={item.para1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded w-100"
                src="/assets/images/Aboutusimg.png"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="text-center knowPlan titlecolor fw-bolder text-shadow">
                About Us
              </h1>
              <div className="ourpara">
                <p className="fw-bold ourpara">
                  Tiffin Smart Services is all about making your life easier
                  when it comes to food. We prepare tasty meals and deliver them
                  right to your door. Our team of chefs creates a wide variety
                  of dishes using fresh and high-quality ingredients. We
                  understand that everyone has different tastes and dietary
                  needs, so we make sure to offer options that suit everyone.
                </p>
                <p className="fw-bold ourpara">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry..Lorem Ipsum is
                  simply dummy text of the printing and typesetting
                  industryLorem Ipsum is simply dummy text of the printing and
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React, { useEffect } from "react";
import Header from "../components/Header";
import Oursection from "./Oursection";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { OurTeam } from "../utils/Data";
import CardTeam from "../utils/CardTeam";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";

function Aboutus() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div>
      {/* <Header /> */}
      <section>
        <div className="">
          <img
            src="/assets/images/about_img.png"
            className="img-fluid contactsec"
            alt="..."
          />
        </div>
        <h1 className="text-center knowPlan titlecolor fw-bolder text-shadow">
          About Us
        </h1>
        <div className="container-fluid pt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="ourpara">
                  <p className="fw-bold ourpara">
                    Tiffin Smart Services is all about making your life easier
                    when it comes to food. We prepare tasty meals and deliver
                    them right to your door. Our team of chefs creates a wide
                    variety of dishes using fresh and high-quality ingredients.
                    We understand that everyone has different tastes and dietary
                    needs, so we make sure to offer options that suit everyone.
                  </p>
                  <p className="fw-bold ourpara">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry..Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industryLorem Ipsum is simply dummy text of the printing and
                    typesetting industry..Lorem Ipsum is simply dummy text of
                    the
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded w-100"
                  src="/assets/images/Aboutusimg.png"
                  alt="loading error"
                />
              </div>
            </div>
          </div>
        </div>
        <Oursection />
        <h1 className="text-center knowPlan titlecolor fw-bolder text-shadow">
          Our Team
        </h1>
        <div className="container">
          <div className="">
            <p className="card-text fs-5">
              Meet the passionate individuals behind Tiffin Services.Our team of
              chefs, nutritionists, and delivery experts work tirelessly to
              ensure that you receive the best dining experience possible.{" "}
            </p>
            <p className="card-text fs-5">
              {" "}
              We believe that food is not just sustenance but also a way to
              bring people together. That's why we put love and care into every
              dish we prepare.
            </p>
          </div>
          <div className="container py-5">
            <div className="row">
              {OurTeam.map((item, key) => (
                <div className="col-sm-4">
                  <CardTeam imgsrc={item.imgsrc} title={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Testimonials />

        <Faq/>
        {/* <Footer /> */}
      </section>
    </div>
  );
}

export default Aboutus;

import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <footer
          className="text-white text-center text-lg-start"
          style={{ backgroundColor: "#383F51" }}
        >
          <div className="container-fluid p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <div className="">
                  <img className="w-25 p-3" src="/assets/images/logo.png" />
                </div>
                <p className="parafooter">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
                <h2 className="text-lg-start text-center">Follow us On:</h2>
                <div className="text-lg-start text-center mb-5">
                  <a href="/">
                    <i className="bi bi-facebook text-primary fs-1 me-4  "></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-instagram text-danger fs-1 me-4  "></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-linkedin text-primary fs-1 me-4  "></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5 className="text-uppercase fs-5 text-center text-lg-start mb-4 mt-lg-5 mt-0">
                  About us
                </h5>
                <div className=" d-flex flex-column text-center text-lg-start mb-4">
                  <a href="/meal" className="text-white footersec fw-bold mb-4">
                    Meals
                  </a>
                  <a href="/" className="text-white footersec fw-bold mb-4">
                    Blog
                  </a>
                  <a href="#!" className="text-white footersec fw-bold mb-4">
                    Sitemap
                  </a>
                  <a href="#!" className="text-white footersec fw-bold mb-4">
                    Contact
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 ">
                <h5 className="text-uppercase fs-5 text-center text-lg-start mb-4 mt-lg-5 mt-0 ">
                  Contact Us
                </h5>
                <div className=" d-flex flex-column text-center text-lg-start">
                  <div className="d-flex justify-content-center justify-content-md-start  align-items-center mb-4">
                    <a href="/">
                      <i className="bi bi-geo-alt-fill fs-3 text-danger pe-3"></i>
                    </a>
                    <a href="/" className="text-white footersec fw-bold">
                      51, Electronic Complex, Pardesipura, Indore, Madhya
                      Pradesh 452007
                    </a>
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-4 ">
                    <a href="/">
                      <i className="bi bi-envelope-fill fs-3 text-danger  pe-3"></i>
                    </a>
                    <a href="#!" className="text-white footersec fw-bold">
                      support@tiffinsmart.com
                    </a>
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-start  align-items-center mb-4">
                    <a href="/">
                      <i className="bi bi-telephone-fill fs-3 text-danger  pe-3"></i>
                    </a>
                    <a href="#!" className="text-white footersec fw-bold">
                      +91 8958944752
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3 bg-light text-dark fs-5 "
            style={{ fontWeight: "900" }}
          >
            ©2023 TIFFIN SMART.
            <a
              className="text-dark text-decoration-none"
              href="https://mdbootstrap.com/"
            >
              All Rights Reserved.
            </a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;

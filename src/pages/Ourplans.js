import React from "react";
import { Link } from "react-router-dom";
import Card from "../utils/Card";
import CardData from "../utils/Data";
import AliceCarousel from "react-alice-carousel";

function Ourplans() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = [
    <div className="container pb-5" >
      <img
        src="/assets/images/planour.png"
        className="img-fluid mx-auto d-block rounded-5 img-plan"
        alt="..."
      />
    </div>,
     <div className="container pb-5">
     <img
       src="/assets/images/planour.png"
       className="img-fluid mx-auto d-block rounded-5 img-plan"
       alt="..."

     />
   </div>,
    <div className="container pb-5">
    <img
      src="/assets/images/planour.png"
      className="img-fluid mx-auto d-block rounded-5 img-plan"
      alt="..."
    />
  </div>,
   <div className="container pb-5">
   <img
     src="/assets/images/planour.png"
     className="img-fluid mx-auto d-block rounded-5 img-plan"
     alt="..."
   />
 </div>,
  ];
  return (
    <div>
      <section>
        <div className="container mt-5 mb-5">
          <h1 className="text-center knowPlan titlecolor fw-bolder text-shadow">
            Know Our plans
          </h1>
        </div>
        <div className="container aliceplan" >
          {/* <div className="container pb-5">
            <img
              src="/assets/images/planour.png"
              className="img-fluid mx-auto d-block rounded-5 w-100"
              alt="..."
            />
          </div> */}
          <AliceCarousel
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />

          <div className="container px-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 ">
            {CardData.map((item, key) => (
                <div class="col-lg-4 col-md-12">
                  <div class="card shadow-lg p-3 mb-5 bg-body rounded h-100 mh-100 w-100 ">
                    <div class="card-body">
                      <Card title={item.title} description={item.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              <div className="col-sm col-md col-xl col-lg text-center py-5">
                <Link
                  to="/"
                  className="btn btn-primary p-3 btn-block px-4 fs-5"
                  style={{
                    backgroundColor: "rgba(31, 27, 27, 0.81)",
                    fontFamily: "Quicksand",
                    fontWeight: "600",
                  }}
                >
                  VIEW MENU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourplans;

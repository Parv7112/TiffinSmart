import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Testimonials() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <div className="frosted-glass pb-4 text-center cardglass">
      <img
        src="/assets/images/testoimg.png"
        className="w-25"
        style={{ marginTop: "-50px" }}
      ></img>
      <h1 className="title text-center py-4 titletesto">Anjali Singh Tawar</h1>

      <div>
        <p
          className="text-white mx-5 testimonialPara"
          style={{ textAlign: "justify" }}
        >
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.”
        </p>
      </div>
    </div>,
    <div className="frosted-glass pb-4 text-center cardglass">
      <img
        src="/assets/images/testoimg.png"
        className="w-25"
        style={{ marginTop: "-50px" }}
      ></img>
      <h1 className="title text-center py-4">Anjali Singh Tawar</h1>

      <div>
        <p
          className="text-white mx-5 testimonialPara"
          style={{ textAlign: "justify" }}
        >
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.”
        </p>
      </div>
    </div>,
    <div className="frosted-glass pb-4 text-center cardglass">
      <img
        src="/assets/images/testoimg.png"
        className="w-25"
        style={{ marginTop: "-50px" }}
      ></img>
      <h1 className="title text-center py-4">Anjali Singh Tawar</h1>

      <div>
        <p
          className="text-white mx-5 testimonialPara"
          style={{ textAlign: "justify" }}
        >
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.”
        </p>
      </div>
    </div>,
  ];

  return (
    <div>
      <section>
        <h1 className="text-center knowPlan titlecolor fw-bolder text-shadow my-5">
          What our Foodie’s Say
        </h1>

        <div className="container">
          <div className="testosec alicesec">
            <AliceCarousel
              autoPlayStrategy="none"
              autoPlayInterval={3000}
              animationDuration={3000}
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

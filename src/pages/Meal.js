import React, { useEffect } from "react";
import { FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../features/slices/productSlice";
import Spinner from "../components/Spinner";
import { addToCart } from "../features/slices/cartSlice";

export const Meal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center fs-5 fw-bold mt-5 vh-100 ">
        <Spinner />
        <div className="mt-3 text-decoration">Please Wait....</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product }));
    navigate("/subscription");
  };

  const handleCart = (product) => {
    dispatch(addToCart({ product }));

    navigate("/cart");
  };

  return (
    <>
      <section className="meals-container position-relative">
        <div className="meal-background-image2"></div>
        <div className="container-fluid">
          <div className="row flex-wrap-reverse ">
            <div className="col-md-6 d-flex align-items-center justify-content-center ">
              <div className="meal-item1">
                <div className="text-center ">
                  <h1 className="meals mb-3 fw-bold ">Meals</h1>
                  <p className=" text-black meals-text ">
                    Tasty Indian Food at affordable prices
                  </p>
                </div>
                <div className="text-center mt-4">
                  <a
                    className="btn btn-secondary meals-button fw-bold mt-md-3 mt-1 "
                    href="#ordernow"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center p-md-4 p-0  ">
              <div className="meal-item2  p-5 position-relative">
                <div className="meal-background-image "></div>
                <img
                  src="/assets/images/meal(1).png"
                  alt="Meal 1"
                  className="img-fluid meal1 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serving-days">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="my-2 fw-semibold" id="serving-days">
                Serving Days
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-center mb-2">
              <div className="week-day-box">Mon</div>
              <div className="week-day-box">Tue</div>
              <div className="week-day-box">Wed</div>
              <div className="week-day-box">Thu</div>
              <div className="week-day-box">Fri</div>
              <div className="week-day-box">Sat</div>
              <div className="week-day-box">Sun</div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="d-flex flex-wrap justify-content-center">
              <button className="btn btn-secondary custom-btn-css-meal-time rounded-0 mx-2 my-2 px-4">
                Serving Time: 8:00 AM to 2:30 PM
              </button>
              <button className="btn btn-secondary custom-btn-css-meal-time rounded-0 mx-2 my-2  px-4">
                Serving Time: 8:00 AM to 2:30 PM
              </button>
            </div>
          </div>
          <div className="col-12 text-center" id="ordernow">
            <h1 className="fw-semibold mb-3 mt-5" id="mealplan">
              Meal plan
            </h1>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <div class="row">
            {products.map((product) => (
              <div key={product.id} class="col-lg-4 col-md-6 ">
                <div id="customers-testimonials" class="owl-carousel">
                  <div class="item">
                    <div class="shadow mb-5 bg-body rounded border">
                      <img class="img-responsive" src={product.image} alt="" />
                      <div className="row">
                        <i
                          class="bi bi-stop-btn fs-4 vegicon col-auto mx-1 py-1"
                        ></i>
                        <div class="item-details px-0 col">
                          <h5  className="head" style={{ color: "red" }}>
                            {" "}
                            {product.title}
                            <span className="text-dark py-1">
                              {" "}
                              <FaRupeeSign />
                              {product.price}
                            </span>
                          </h5>
                          <p className="fw-light">{product.description}</p>
                          <div
                            className="row"
                            id="rupees-cart"
                          >
                            <div className="col-auto px-0">
                              <button
                                className="btn btn-secondary mt-3 mt-sm-0"
                                style={{ backgroundColor: "#319F43"  }}
                                onClick={() => handleAddToCart(product)}
                              >
                                Subscription
                              </button>
                              &nbsp;&nbsp;
                            </div>

                            <div className="col-auto px-0">
                            <button
                              className="btn btn-secondary mt-3 mt-sm-0"
                              onClick={() => handleCart(product)}
                            >
                              <FaShoppingCart className="fs-5" /> Add to cart
                            </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

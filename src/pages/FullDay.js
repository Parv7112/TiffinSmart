import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";

const FullDay = ({
  selectedDay,
  handleTimeChange,
  handleDayChange,
  selectedType,
  handleTypeChange,
  selectedLOrderDate,
  handleLOrderDateChange,
  selectedLEndDate,
  handleLEndDateChange,
}) => {
  const cartItem = useSelector((state) => state.cart);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSubsChange = (planOption) => {
    setSelectedPlan(planOption);
  };


  return (
    <div>
      <div>
        <h3 className="fw-bold fs-4 mt-4">(Lunch)</h3>

        <div className="d-flex align-items-center form-check my-3">
          <input
            className="form-check-input border border-dark mb-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label fw-bold mx-3 mb-3" htmlFor="flexRadioDefault1" onClick={() => handleTimeChange("12:30 pm to 01:30 pm")}>
            12:30 pm to 01:30 pm
          </label>
          <input
            className="form-check-input border border-dark mx-3 mb-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label fw-bold mx-3 mb-3" htmlFor="flexRadioDefault2" onClick={() => handleTimeChange("01:30 pm to 02:30 pm")}>
            01:30 pm to 02:30 pm
          </label>
        </div>

        <h4 className="fw-semibold mb-4">Choose Your Plan</h4>
        <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "1 Week" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("1 Week")}
          >
            1 Week Plan <br /> <FaRupeeSign />
            {7 * cartItem.totalPrice}
          </button>
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "15 Days" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("15 Days")}
          >
            15 Days Plan <br /> <FaRupeeSign />
            {15 * cartItem.totalPrice}
          </button>
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "1 Month" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("1 Month")}
          >
            1 Month Plan <br /> <FaRupeeSign />
            {30 * cartItem.totalPrice}
          </button>
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "3 Month" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("3 Month")}
          >
            3 Month Plan <br /> <FaRupeeSign />
            {90 * cartItem.totalPrice}
          </button>
        </div>



        <h4 className="fw-semibold mb-4">Day Selection</h4>
        <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
          <button
            type="button"
            className={`btn my-2 fw-bold fs-6 p-3 ${selectedDay === "Mon-Fri" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Mon-Fri")}
          >
            Mon-Fri
          </button>
          <button
            type="button"
            className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${selectedDay === "Mon-Sat" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Mon-Sat")}
          >
            Mon-Sat
          </button>
          <button
            type="button"
            className={`btn my-2 fw-bold fs-6 p-3 ${selectedDay === "Mon-Sun" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Mon-Sun")}
          >
            Mon-Sun
          </button>
          <button
            type="button"
            className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${selectedDay === "Custom" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Custom")}
          >
            Custom
          </button>
          {selectedDay === "Custom" && (
            <div className="col-12 d-flex flex-wrap mb-2">
              <button
                className={`week-day-box-sub ${selectedDay.includes("Mon") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Mon")}
              >
                Mon
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Tue") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Tue")}
              >
                Tue
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Wed") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Wed")}
              >
                Wed
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Thu") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Thu")}
              >
                Thu
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Fri") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Fri")}
              >
                Fri
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Sat") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Sat")}
              >
                Sat
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Sun") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Sun")}
              >
                Sun
              </button>
            </div>
          )}
        </div>

        <h4 className="fw-semibold mb-4">Select Meal Type</h4>
        <div className="col-12 d-flex flex-wrap mb-2">
          <button
            type="button"
            className={`btn my-2 fw-bold fs-6 p-3 ${selectedType === "Vegetarian" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleTypeChange("Vegetarian")}
          >
            Vegetarian
          </button>
          <button
            type="button"
            className={`btn my-2 mx-5 fw-bold fs-6 p-3 ${selectedType === "Non-Vegetarian" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleTypeChange("Non-Vegetarian")}
          >
            Non-Vegetarian
          </button>
        </div>

        <h4 className="fw-semibold mb-4">Order Date</h4>
        <div className="col-12 d-flex flex-wrap mb-2">
          <DatePicker
            selected={selectedLOrderDate}
            onChange={(LOrderdate) => handleLOrderDateChange(LOrderdate)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            customInput={
              <button
                type="button"
                className={`btn my-2 fw-bold fs-6 p-3 ${selectedLOrderDate ? "btn-primary" : "subbtn"}`}
              >
                {selectedLOrderDate ? selectedLOrderDate.toLocaleDateString("en-IN") : "Start Date"}
                <AiTwotoneCalendar />
              </button>
            }
          />
          <DatePicker
            selected={selectedLEndDate}
            onChange={(LEnddate) => handleLEndDateChange(LEnddate)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            customInput={
              <button
                type="button"
                className={`btn my-2 fw-bold fs-6 p-3 mx-5 ${selectedLEndDate ? "btn-primary" : "subbtn"}`}
              >
                {selectedLEndDate ? selectedLEndDate.toLocaleDateString("en-IN") : "End Date"}
                <AiTwotoneCalendar />
              </button>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="fw-bold fs-4 mt-4">(Dinner)</h3>

        <div className="d-flex align-items-center form-check my-3">
          <input
            className="form-check-input border border-dark mb-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label fw-bold mx-3 mb-3" htmlFor="flexRadioDefault1" onClick={() => handleTimeChange("06:30 Pm - 8:30 PM")}>
            06:30 Pm - 8:30 PM
          </label>
          <input
            className="form-check-input border border-dark mx-3 mb-3"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label fw-bold mx-3 mb-3" htmlFor="flexRadioDefault2" onClick={() => handleTimeChange("08:30 Pm - 10:30 PM")}>
          08:30 Pm - 10:30 PM
          </label>
        </div>

        <h4 className="fw-semibold mb-4">Choose Your Plan</h4>
        <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "1 Week" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("1 Week")}
          >
            1 Week Plan <br /> <FaRupeeSign />
            {7 * cartItem.totalPrice}
          </button>
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "15 Days" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("15 Days")}
          >
            15 Days Plan <br /> <FaRupeeSign />
            {15 * cartItem.totalPrice}
          </button>
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "1 Month" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("1 Month")}
          >
            1 Month Plan <br /> <FaRupeeSign />
            {30 * cartItem.totalPrice}
          </button>
          <button
            type="button"
            className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "3 Month" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleSubsChange("3 Month")}
          >
            3 Month Plan <br /> <FaRupeeSign />
            {90 * cartItem.totalPrice}
          </button>
        </div>



        <h4 className="fw-semibold mb-4">Day Selection</h4>
        <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
          <button
            type="button"
            className={`btn my-2 fw-bold fs-6 p-3 ${selectedDay === "Mon-Fri" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Mon-Fri")}
          >
            Mon-Fri
          </button>
          <button
            type="button"
            className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${selectedDay === "Mon-Sat" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Mon-Sat")}
          >
            Mon-Sat
          </button>
          <button
            type="button"
            className={`btn my-2 fw-bold fs-6 p-3 ${selectedDay === "Mon-Sun" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Mon-Sun")}
          >
            Mon-Sun
          </button>
          <button
            type="button"
            className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${selectedDay === "Custom" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleDayChange("Custom")}
          >
            Custom
          </button>
          {selectedDay === "Custom" && (
            <div className="col-12 d-flex flex-wrap mb-2">
              <button
                className={`week-day-box-sub ${selectedDay.includes("Mon") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Mon")}
              >
                Mon
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Tue") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Tue")}
              >
                Tue
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Wed") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Wed")}
              >
                Wed
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Thu") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Thu")}
              >
                Thu
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Fri") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Fri")}
              >
                Fri
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Sat") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Sat")}
              >
                Sat
              </button>
              <button
                className={`week-day-box-sub ${selectedDay.includes("Sun") ? "btn-primary" : ""}`}
                onClick={() => handleDayChange("Sun")}
              >
                Sun
              </button>
            </div>
          )}
        </div>

        <h4 className="fw-semibold mb-4">Select Meal Type</h4>
        <div className="col-12 d-flex flex-wrap mb-2">
          <button
            type="button"
            className={`btn my-2 fw-bold fs-6 p-3 ${selectedType === "Vegetarian" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleTypeChange("Vegetarian")}
          >
            Vegetarian
          </button>
          <button
            type="button"
            className={`btn my-2 mx-5 fw-bold fs-6 p-3 ${selectedType === "Non-Vegetarian" ? "btn-primary" : "subbtn"}`}
            onClick={() => handleTypeChange("Non-Vegetarian")}
          >
            Non-Vegetarian
          </button>
        </div>

        <h4 className="fw-semibold mb-4">Order Date</h4>
        <div className="col-12 d-flex flex-wrap mb-2">
          <DatePicker
            selected={selectedLOrderDate}
            onChange={(LOrderdate) => handleLOrderDateChange(LOrderdate)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            customInput={
              <button
                type="button"
                className={`btn my-2 fw-bold fs-6 p-3 ${selectedLOrderDate ? "btn-primary" : "subbtn"}`}
              >
                {selectedLOrderDate ? selectedLOrderDate.toLocaleDateString("en-IN") : "Start Date"}
                <AiTwotoneCalendar />
              </button>
            }
          />
          <DatePicker
            selected={selectedLEndDate}
            onChange={(LEnddate) => handleLEndDateChange(LEnddate)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            customInput={
              <button
                type="button"
                className={`btn my-2 fw-bold fs-6 p-3 mx-5 ${selectedLEndDate ? "btn-primary" : "subbtn"}`}
              >
                {selectedLEndDate ? selectedLEndDate.toLocaleDateString("en-IN") : "End Date"}
                <AiTwotoneCalendar />
              </button>
            }
          />
        </div>
      </div>
    </div>

  );
};

export default FullDay;

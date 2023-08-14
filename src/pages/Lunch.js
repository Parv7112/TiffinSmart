import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addDays } from "date-fns";

const Lunch = ({
  selectedLDay,
  handleLDayChange,
  selectedLCustomDay,
  handleLCustomDayChange,
  handleLTimeChange,
  onLSubsChange,
  selectedLType,
  handleLTypeChange,
  selectedLOrderDate,
  handleLOrderDateChange,
  selectedLEndDate,
  handleLEndDateChange,
}) => {
  const cartItem = useSelector((state) => state.cart);
  const [selectedPlan, setSelectedPlan] = useState("");


  const handleLSubsChange = (Lsubsplan, Lsubsprice) => {
    onLSubsChange(Lsubsplan, Lsubsprice);
    setSelectedPlan(Lsubsplan);
  
    if (selectedLOrderDate) {
      let selectedPlanDays = 0;
      if (Lsubsplan.includes("Week")) {
        selectedPlanDays = parseInt(Lsubsplan.split(" ")[0]) * 7;
      } else if (Lsubsplan.includes("Month")) {
        selectedPlanDays = parseInt(Lsubsplan.split(" ")[0]) * 30;
      } else {
        selectedPlanDays = parseInt(Lsubsplan.split(" ")[0]);
      }
  
      const endDate = addDays(selectedLOrderDate, selectedPlanDays);
      handleLEndDateChange(endDate);
    }
  };
  
  const isSelectedLCustomDay = (Lday) => {
    return selectedLCustomDay.includes(Lday);
  };

  return (
    <div>
      <div className="d-flex align-items-center form-check my-3">
        <input
          className="form-check-input border border-dark mb-3"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onClick={() => handleLTimeChange("12:30 PM to 01:30 PM")}
        />
        <label
          className="form-check-label fw-bold mx-3 mb-3"
          htmlFor="flexRadioDefault1"

        >
          12:30 PM to 01:30 PM
        </label>
        <input
          className="form-check-input border border-dark mx-3 mb-3"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onClick={() => handleLTimeChange("01:30 PM to 02:30 PM")}
        />
        <label
          className="form-check-label fw-bold mx-3 mb-3"
          htmlFor="flexRadioDefault2"
        >
          01:30 PM to 02:30 PM
        </label>
      </div>

      <h4 className="fw-semibold mb-4">Choose Your Plan</h4>
      <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 subbtn ${selectedPlan === "1 Week" ? "subBtn1" : "subbtn"
            }`}
          onClick={() => handleLSubsChange("1 Week", 7 * cartItem.totalPrice)}
        >
          1 Week Plan <br /> <FaRupeeSign />
          {7 * cartItem.totalPrice}
        </button>
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "15 Days" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLSubsChange("15 Days", 15 * cartItem.totalPrice)}
        >
          15 Days Plan <br /> <FaRupeeSign />
          {15 * cartItem.totalPrice}
        </button>
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "1 Month" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLSubsChange("1 Month", 30 * cartItem.totalPrice)}
        >
          1 Month Plan <br /> <FaRupeeSign />
          {30 * cartItem.totalPrice}
        </button>
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 ${selectedPlan === "3 Month" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLSubsChange("3 Month", 90 * cartItem.totalPrice)}
        >
          3 Month Plan <br /> <FaRupeeSign />
          {90 * cartItem.totalPrice}
        </button>
      </div>

      <h4 className="fw-semibold mb-4">Day Selection</h4>
      <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
        <button
          type="button"
          className={`btn my-2 fw-bold fs-6 p-3 ${selectedLDay === "Mon-Fri" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLDayChange("Mon-Fri")}
        >
          Mon-Fri
        </button>
        <button
          type="button"
          className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${selectedLDay === "Mon-Sat" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLDayChange("Mon-Sat")}
        >
          Mon-Sat
        </button>
        <button
          type="button"
          className={`btn my-2 fw-bold fs-6 p-3 ${selectedLDay === "Mon-Sun" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLDayChange("Mon-Sun")}
        >
          Mon-Sun
        </button>
        <button
          type="button"
          className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${selectedLDay === "Custom" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLDayChange("Custom")}
        >
          Custom
        </button>
        {selectedLDay === "Custom" && (
          <div className="col-12 d-flex flex-wrap mb-2">
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Mon") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Mon")}
            >
              Mon
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Tue") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Tue")}
            >
              Tue
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Wed") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Wed")}
            >
              Wed
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Thu") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Thu")}
            >
              Thu
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Fri") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Fri")}
            >
              Fri
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Sat") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Sat")}
            >
              Sat
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${isSelectedLCustomDay("Sun") ? "subBtn1" : "subbtn"
                }`}
              onClick={() => handleLCustomDayChange("Sun")}
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
          className={`btn my-2 fw-bold fs-6 p-3 ${selectedLType === "Vegetarian" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLTypeChange("Vegetarian")}
        >
          Vegetarian
        </button>
        <button
          type="button"
          className={`btn my-2 mx-5 fw-bold fs-6 p-3 ${selectedLType === "Non-Vegetarian" ? "btn-primary" : "subbtn"
            }`}
          onClick={() => handleLTypeChange("Non-Vegetarian")}
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
              className={`btn my-2 fw-bold fs-6 p-3 ${selectedLOrderDate ? "btn-primary" : "subbtn"
                }`}
            >
              {selectedLOrderDate
                ? selectedLOrderDate.toLocaleDateString("en-IN")
                : "Start Date"}
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
              className={`btn my-2 fw-bold fs-6 p-3 mx-5 ${selectedLEndDate ? "btn-primary" : "subbtn"
                }`}
            >
              {selectedLEndDate
                ? selectedLEndDate.toLocaleDateString("en-IN")
                : "End Date"}
              <AiTwotoneCalendar />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Lunch;

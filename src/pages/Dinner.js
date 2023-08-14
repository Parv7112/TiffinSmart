import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addDays } from "date-fns";

const Dinner = ({
  selectedDDay,
  handleDDayChange,
  selectedDCustomDay,
  handleDCustomDayChange,
  handleDTimeChange,
  onDSubsChange,
  selectedDType,
  handleDTypeChange,
  selectedDOrderDate,
  handleDOrderDateChange,
  selectedDEndDate,
  handleDEndDateChange,
}) => {
  const cartItem = useSelector((state) => state.cart);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleDSubsChange = (Dsubsplan, Dsubsprice) => {
    onDSubsChange(Dsubsplan, Dsubsprice);
    setSelectedPlan(Dsubsplan);
  
    if (selectedDOrderDate) {
      let selectedPlanDays = 0;
      if (Dsubsplan.includes("Week")) {
        selectedPlanDays = parseInt(Dsubsplan) * 7;
      } else if (Dsubsplan.includes("Month")) {
        selectedPlanDays = parseInt(Dsubsplan) * 30;
      } else {
        selectedPlanDays = parseInt(Dsubsplan);
      }
  
      const endDate = addDays(selectedDOrderDate, selectedPlanDays);
      handleDEndDateChange(endDate);
    }
  };

  const isSelectedDCustomDay = (Dday) => {
    return selectedDCustomDay.includes(Dday);
  };

  
  return (
    <div>
      <div className="d-flex align-items-center form-check my-3">
        <input
          className="form-check-input border border-dark mb-3"
          type="radio"
          name="flexRadioDefault1"
          id="flexRadioDefault3"
          onClick={() => handleDTimeChange("06:30 PM to 07:30 PM")}
        />
        <label
          className="form-check-label fw-bold mx-3 mb-3"
          htmlFor="flexRadioDefault3"
 
        >
          06:30 PM to 07:30 PM
        </label>
        <input
          className="form-check-input border border-dark mx-3 mb-3"
          type="radio"
          name="flexRadioDefault1"
          id="flexRadioDefault4"
          onClick={() => handleDTimeChange("07:30 PM to 08:30 PM")}
        />
        <label
          className="form-check-label fw-bold mx-3 mb-3"
          htmlFor="flexRadioDefault4"
        >
          07:30 PM to 08:30 PM
        </label>
      </div>

      <h4 className="fw-semibold mb-4">Choose Your Plan</h4>
      <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 subbtn ${
            selectedPlan === "1 Week" ? "subBtn1" : "subbtn"
          }`}
          onClick={() => handleDSubsChange("1 Week",7 * cartItem.totalPrice)}
        >
          1 Week Plan <br /> <FaRupeeSign />
          {7 * cartItem.totalPrice}
        </button>
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 ${
            selectedPlan === "15 Days" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDSubsChange("15 Days",15 * cartItem.totalPrice)}
        >
          15 Days Plan <br /> <FaRupeeSign />
          {15 * cartItem.totalPrice}
        </button>
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 ${
            selectedPlan === "1 Month" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDSubsChange("1 Month",30 * cartItem.totalPrice )}
        >
          1 Month Plan <br /> <FaRupeeSign />
          {30 * cartItem.totalPrice}
        </button>
        <button
          type="button"
          className={`btn my-2 mx-1 fw-bold fs-6 ${
            selectedPlan === "3 Month" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDSubsChange("3 Month",90 * cartItem.totalPrice)}
        >
          3 Month Plan <br /> <FaRupeeSign />
          {90 * cartItem.totalPrice}
        </button>
      </div>

      <h4 className="fw-semibold mb-4">Day Selection</h4>
      <div className="d-flex flex-wrap justify-content-start align-items-center mb-4">
        <button
          type="button"
          className={`btn my-2 fw-bold fs-6 p-3 ${
            selectedDDay === "Mon-Fri" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDDayChange("Mon-Fri")}
        >
          Mon-Fri
        </button>
        <button
          type="button"
          className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${
            selectedDDay === "Mon-Sat" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDDayChange("Mon-Sat")}
        >
          Mon-Sat
        </button>
        <button
          type="button"
          className={`btn my-2 fw-bold fs-6 p-3 ${
            selectedDDay === "Mon-Sun" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDDayChange("Mon-Sun")}
        >
          Mon-Sun
        </button>
        <button
          type="button"
          className={`btn mx-5 my-2 fw-bold fs-6 p-3 ${
            selectedDDay === "Custom" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDDayChange("Custom")}
        >
          Custom
        </button>
        {selectedDDay === "Custom" && (
          <div className="col-12 d-flex flex-wrap mb-2">
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Mon") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Mon")}
            >
              Mon
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Tue") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Tue")}
            >
              Tue
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Wed") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Wed")}
            >
              Wed
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Thu") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Thu")}
            >
              Thu
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Fri") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Fri")}
            >
              Fri
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Sat") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Sat")}
            >
              Sat
            </button>
            <button
              type="button"
              className={`btn my-2 mx-1 fw-bold fs-6 me-2 py-2 px-4 ${
                isSelectedDCustomDay("Sun") ? "subBtn1" : "subbtn"
              }`}
              onClick={() => handleDCustomDayChange("Sun")}
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
          className={`btn my-2 fw-bold fs-6 p-3 ${
            selectedDType === "Vegetarian" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDTypeChange("Vegetarian")}
        >
          Vegetarian
        </button>
        <button
          type="button"
          className={`btn my-2 mx-5 fw-bold fs-6 p-3 ${
            selectedDType === "Non-Vegetarian" ? "btn-primary" : "subbtn"
          }`}
          onClick={() => handleDTypeChange("Non-Vegetarian")}
        >
          Non-Vegetarian
        </button>
      </div>

      <h4 className="fw-semibold mb-4">Order Date</h4>
      <div className="col-12 d-flex flex-wrap mb-2">
        <DatePicker
          selected={selectedDOrderDate}
          onChange={(DOrderdate) => handleDOrderDateChange(DOrderdate)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          customInput={
            <button
              type="button"
              className={`btn my-2 fw-bold fs-6 p-3 ${
                selectedDOrderDate ? "btn-primary" : "subbtn"
              }`}
            >
              {selectedDOrderDate
                ? selectedDOrderDate.toLocaleDateString("en-IN")
                : "Start Date"}
              <AiTwotoneCalendar />
            </button>
          }
        />
        <DatePicker
          selected={selectedDEndDate}
          onChange={(DEnddate) => handleDEndDateChange(DEnddate)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          customInput={
            <button
              type="button"
              className={`btn my-2 fw-bold fs-6 p-3 mx-5 ${
                selectedDEndDate ? "btn-primary" : "subbtn"
              }`}
            >
              {selectedDEndDate
                ? selectedDEndDate.toLocaleDateString("en-IN")
                : "End Date"}
              <AiTwotoneCalendar />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Dinner;

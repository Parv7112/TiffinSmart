import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import { addDays } from "date-fns";

const Subscription = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const cartItem = useSelector((state) => state.cart);

  const [selectedPlan, setSelectedPlan] = useState("");
  const [showPlanSelection, setShowPlanSelection] = useState(false);
  const [selectedLDay, setSelectedLDay] = useState("");
  const [selectedDDay, setSelectedDDay] = useState("");
  const [selectedLCustomDay, setSelectedLCustomDay] = useState([]);
  const [selectedDCustomDay, setSelectedDCustomDay] = useState([]);
  const [selectedLTime, setSelectedLTime] = useState("");
  const [selectedDTime, setSelectedDTime] = useState("");
  const [selectedLType, setSelectedLType] = useState("");
  const [selectedDType, setSelectedDType] = useState("");
  const [selectedLOrderDate, setSelectedLOrderDate] = useState(null);
  const [selectedDOrderDate, setSelectedDOrderDate] = useState(null);
  const [selectedLEndDate, setSelectedLEndDate] = useState(null);
  const [selectedDEndDate, setSelectedDEndDate] = useState(null);
  const [selectedLSubsplan, setSelectedLSubsplan] = useState("");
  const [selectedDSubsplan, setSelectedDSubsplan] = useState("");
  const [selectedLSubsprice, setSelectedLSubsprice] = useState("");
  const [selectedDSubsprice, setSelectedDSubsprice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setShowPlanSelection(!!selectedPlan);
  }, [selectedPlan]);

  const handlePlanChange = (plan) => {
    setSelectedPlan((prevPlan) => (prevPlan === plan ? "" : plan));
  };

  const handleLSubsChange = (Lsubsplan,Lsubsprice) => {
    setSelectedLSubsplan(Lsubsplan);
    setSelectedLSubsprice(Lsubsprice);
  };

  const handleDSubsChange = (Dsubsplan,Dsubsprice) => {
    setSelectedDSubsplan(Dsubsplan);
    setSelectedDSubsprice(Dsubsprice);
  };

  const handleLDayChange = (Lday) => {
    setSelectedLDay(Lday === selectedLDay ? "" : Lday);
  };

  const handleDDayChange = (Dday) => {
    setSelectedDDay(Dday === selectedDDay ? "" : Dday);
  };


  const handleLCustomDayChange = (LcustomDay) => {
    setSelectedLCustomDay((prevSelectedLCustomDay) =>
      prevSelectedLCustomDay.includes(LcustomDay)
        ? prevSelectedLCustomDay.filter((Lday) => Lday !== LcustomDay)
        : [...prevSelectedLCustomDay, LcustomDay]
    );
  };

  const handleDCustomDayChange = (DcustomDay) => {
    setSelectedDCustomDay((prevSelectedDCustomDay) =>
      prevSelectedDCustomDay.includes(DcustomDay)
        ? prevSelectedDCustomDay.filter((Dday) => Dday !== DcustomDay)
        : [...prevSelectedDCustomDay, DcustomDay]
    );
  };

  const handleLTimeChange = (Ltime) => {
    setSelectedLTime(Ltime === selectedLTime ? "" : Ltime);
  };

  const handleDTimeChange = (Dtime) => {
    setSelectedDTime(Dtime === selectedDTime ? "" : Dtime);
  };

  const handleLTypeChange = (Ltype) => {
    setSelectedLType(Ltype === selectedLType ? "" : Ltype);
  };

  const handleDTypeChange = (Dtype) => {
    setSelectedDType(Dtype === selectedDType ? "" : Dtype);
  };

  const handleLOrderDateChange = (LOrderdate) => {
    setSelectedLOrderDate(LOrderdate);
    
    if (selectedLSubsplan) {
      const selectedPlanDays = parseInt(selectedLSubsplan.split(" ")[0]);
      const endDate = addDays(LOrderdate, selectedPlanDays);
      handleLEndDateChange(endDate);
    }
  };

  const handleLEndDateChange = (LEnddate) => {
    setSelectedLEndDate(LEnddate === selectedLEndDate ? "" : LEnddate);
  };

  const handleDOrderDateChange = (DOrderdate) => {
    setSelectedDOrderDate(DOrderdate);
  
    if (selectedPlan && selectedDSubsplan) {
      const selectedPlanDays = parseInt(selectedDSubsplan.split(" ")[0]);
      const endDate = addDays(DOrderdate, selectedPlanDays);
      handleDEndDateChange(endDate);
    }
  };
  

  const handleDEndDateChange = (DEnddate) => {
    setSelectedDEndDate(DEnddate === selectedDEndDate ? "" : DEnddate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedPlan) {
      const LcustomDaysWithSpaces = selectedLCustomDay.join(", ");
      const DcustomDaysWithSpaces = selectedDCustomDay.join(", ");

      const subscriptionData = {
        plan: selectedPlan,
        Lsubsplan: selectedLSubsplan,
        Dsubsplan: selectedDSubsplan,
        Lsubsprice: selectedLSubsprice,
        Dsubsprice: selectedDSubsprice,
        Lday: selectedLDay,
        Dday: selectedDDay,
        LcustomDay: LcustomDaysWithSpaces,
        DcustomDay: DcustomDaysWithSpaces,
        Ltime: selectedLTime,
        Dtime: selectedDTime,
        Ltype: selectedLType,
        Dtype: selectedDType,
        LOrderdate: selectedLOrderDate,
        LEnddate: selectedLEndDate,
        DOrderdate: selectedDOrderDate,
        DEnddate: selectedDEndDate,
      };
      navigate("/cart", { state: { subscriptionData } });
      console.log(subscriptionData);
    }
  };

  return (
    <>
      <section className="mx-4">
        <div
          className="container card border border-1 border-dark d-flex flex-md-row flex-column align-items-center rounded p-4 mb-5"
          style={{ marginTop: "9rem" }}
        >
          <img src={cartItem.image} alt={cartItem.title} className="crd-img" />
          <div className="text-center" style={{ margin: "0 80px" }}>
            <h3
              className="card-title mb-2 fs-2 fw-bold"
              style={{ color: "#F83838" }}
            >
              {cartItem.title}
            </h3>
            <p className="card-text mt-2 mb-3 fs-6 fw-bold">
              {cartItem.description}
            </p>
            <span className="fw-bold fs-6">
              <strong>
                <FaRupeeSign />
              </strong>
              {cartItem.totalPrice}
            </span>
          </div>
        </div>
        <h2 className="text-center mb-1 fw-bold">Subscription Plan</h2>

        <form onSubmit={handleSubmit}>
          <div className="container cartDivContent p-4 mt-2 cartDivContent border border-1 border-dark">
            <h4 className="fw-semibold mb-2">Select Meal Time</h4>
            <div>
              <button
                type="button"
                className={`btn mx-2 my-2 fw-bold fs-6 subbtn ${
                  selectedPlan === "Lunch" ? "subBtn1" : ""
                }`}
                onClick={() => handlePlanChange("Lunch")}
              >
                Lunch
              </button>
              <button
                type="button"
                className={`btn mx-4 my-2 fw-bold fs-6 subbtn ${
                  selectedPlan === "Dinner" ? "subBtn1" : ""
                }`}
                onClick={() => handlePlanChange("Dinner")}
              >
                Dinner
              </button>
              <button
                type="button"
                className={`btn mx-2 my-2 fw-bold fs-6 subbtn ${
                  selectedPlan === "Full Day Meal" ? "subBtn1" : ""
                }`}
                onClick={() => handlePlanChange("Full Day Meal")}
              >
                Full Day Meal
              </button>
            </div>

            {selectedPlan === "Lunch" && (
              <div>
                <Lunch
                  selectedLSubsplan={selectedLSubsplan}
                  selectedLSubsprice={selectedLSubsprice}
                  onLSubsChange={handleLSubsChange}
                  selectedLDay={selectedLDay}
                  handleLDayChange={handleLDayChange}
                  selectedLCustomDay={selectedLCustomDay}
                  handleLCustomDayChange={handleLCustomDayChange}
                  handleLSubsChange={handleLSubsChange}
                  handleLTimeChange={handleLTimeChange}
                  selectedLType={selectedLType}
                  handleLTypeChange={handleLTypeChange}
                  selectedLOrderDate={selectedLOrderDate}
                  handleLOrderDateChange={handleLOrderDateChange}
                  selectedLEndDate={selectedLEndDate}
                  handleLEndDateChange={handleLEndDateChange}
                />
              </div>
            )}

            {selectedPlan === "Dinner" && (
              <div>
                <Dinner
                 selectedDSubsplan={selectedDSubsplan}
                 selectedDSubsprice={selectedDSubsprice}
                 onDSubsChange={handleDSubsChange}
                 selectedDDay={selectedDDay}
                 handleDDayChange={handleDDayChange}
                 selectedDCustomDay={selectedDCustomDay}
                 handleDCustomDayChange={handleDCustomDayChange}
                 handleDSubsChange={handleDSubsChange}
                 handleDTimeChange={handleDTimeChange}
                 selectedDType={selectedDType}
                 handleDTypeChange={handleDTypeChange}
                 selectedDOrderDate={selectedDOrderDate}
                 handleDOrderDateChange={handleDOrderDateChange}
                 selectedDEndDate={selectedDEndDate}
                 handleDEndDateChange={handleDEndDateChange}
                />
              </div>
            )}

            {selectedPlan === "Full Day Meal" && (
              <div>
                <h3 className="fw-bold fs-4 my-4">(Lunch)</h3>
                <Lunch
                 selectedLSubsplan={selectedLSubsplan}
                 selectedLSubsprice={selectedLSubsprice}
                 onLSubsChange={handleLSubsChange}
                 selectedLDay={selectedLDay}
                 handleLDayChange={handleLDayChange}
                 selectedLCustomDay={selectedLCustomDay}
                 handleLCustomDayChange={handleLCustomDayChange}
                 handleLSubsChange={handleLSubsChange}
                 handleLTimeChange={handleLTimeChange}
                 selectedLType={selectedLType}
                 handleLTypeChange={handleLTypeChange}
                 selectedLOrderDate={selectedLOrderDate}
                 handleLOrderDateChange={handleLOrderDateChange}
                 selectedLEndDate={selectedLEndDate}
                 handleLEndDateChange={handleLEndDateChange}
                />

                <h3 className="fw-bold fs-4 my-4">(Dinner)</h3>
                <Dinner
                  selectedDSubsplan={selectedDSubsplan}
                  selectedDSubsprice={selectedDSubsprice}
                  onDSubsChange={handleDSubsChange}
                  selectedDDay={selectedDDay}
                  handleDDayChange={handleDDayChange}
                  selectedDCustomDay={selectedDCustomDay}
                  handleDCustomDayChange={handleDCustomDayChange}
                  handleDSubsChange={handleDSubsChange}
                  handleDTimeChange={handleDTimeChange}
                  selectedDType={selectedDType}
                  handleDTypeChange={handleDTypeChange}
                  selectedDOrderDate={selectedDOrderDate}
                  handleDOrderDateChange={handleDOrderDateChange}
                  selectedDEndDate={selectedDEndDate}
                  handleDEndDateChange={handleDEndDateChange}
                />
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn1 fw-bold fs-5 my-4"
              disabled={!showPlanSelection}
            >
              CONTINUE
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Subscription;

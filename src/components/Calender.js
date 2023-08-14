import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [enddDate, setEndDate] = useState(null);



  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


const handleDateEnd = (date) =>{
  setEndDate(date)
}
  return (
    <div>
       <span>select date:</span>
      <span className="border-none me-4"><DatePicker selected={selectedDate} onChange={handleDateChange} /></span>

      <span>End date:</span>
      <span className="border-none"><DatePicker selected={enddDate} onChange={handleDateEnd} /></span>
    </div>
  );
};

export default Calender;

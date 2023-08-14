import React from "react";
import { useForm } from "react-hook-form";

const Test = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    
    // Simulate asynchronous form submission
    setTimeout(() => {
      // Perform actual API request or form submission

      // After successful submission, you can reset the form
      setValue("name", "");
      setValue("email", "");
      setValue("address", "");
    }, 1000);
  };

  const fetchCurrentLocation = () => {
    // Code to fetch the current location goes here
    const currentLocation = "51, Electronic Complex, Perdesipura Indore";

    // Replace with actual code to fetch the current location
    setValue("address", currentLocation);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Add your form fields using the register function */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <div>{errors.address.message}</div>}
        </div>
        <button type="button" onClick={fetchCurrentLocation}>
          Add Current Location
        </button>
        {/* Add more form fields with their corresponding validation and error messages */}
        {/* Add a submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;

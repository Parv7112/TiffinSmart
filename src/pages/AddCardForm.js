import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUserCard } from "../features/slices/addCardSlice";
import CreditDebit from "./CreditDebit";

function AddCardForm() {
  const dispatch = useDispatch();
  const [showCreditDebit, setShowCreditDebit] = useState(false);

  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required("Card Number is required"),
    expiration: Yup.string()
      .required("Expiration Date is required")
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Expiration Date must be in MM/YY format"
      ),
    cvv: Yup.string()
      .matches(/^\d{3}$/, "CVV must be a 3-digit number")
      .required("CVV is required"),
    cardholderName: Yup.string().required("Cardholder Name is required"),
    nickname: Yup.string(),
  });

  const initialValues = {
    cardNumber: "",
    expiration: "",
    cvv: "",
    cardholderName: "",
    nickname: "",
  };

  const handleCardSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(addUserCard(values));
      setShowCreditDebit(true);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      {!showCreditDebit ? (
        <div>
          <h1 className="sdxhead m-4 text-center">ADD NEW CARD</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCardSubmit}
          >
            {({ errors, touched, handleChange, isSubmitting }) => (
              <Form className="sdxform">
                <div className="mb-3">
                  <label className="label ms-1">CARD NUMBER</label>
                  <Field
                    type="text"
                    name="cardNumber"
                    onChange={handleChange}
                    className={`form-control rounded-0 sdinp1 ${
                      errors.cardNumber && touched.cardNumber ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="cardNumber"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="sddev mb-3">
                  <div className="">
                    <label className="label ms-1">
                      VALID THROUGH (MM/YY)
                    </label>
                    <Field
                      type="text"
                      name="expiration"
                      onChange={handleChange}
                      className={`form-control rounded-0 sdinp1 ${
                        errors.expiration && touched.expiration
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name="expiration"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mt-2 ">
                    <label className="label">CVV</label>
                    <Field
                      type="password"
                      name="cvv"
                      onChange={handleChange}
                      className={`form-control rounded-0 sdinp1 ${
                        errors.cvv && touched.cvv ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="cvv"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                </div>
                <div>
                  <label className="label ms-1">NAME ON CARD</label>
                  <Field
                    type="text"
                    name="cardholderName"
                    onChange={handleChange}
                    className={`form-control rounded-0 sdinp1 ${
                      errors.cardholderName && touched.cardholderName
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="cardholderName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mt-3">
                  <label className="label ms-1">
                    CARD NICKNAME (FOR EASY IDENTIFICATION)
                  </label>
                  <Field
                    type="text"
                    name="nickname"
                    onChange={handleChange}
                    className="form-control rounded-0 sdinp1"
                  />
                </div>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-dark m-3 text-center sdxbt"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "PROCEED"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <CreditDebit />
      )}
    </div>
  );
}

export default AddCardForm;

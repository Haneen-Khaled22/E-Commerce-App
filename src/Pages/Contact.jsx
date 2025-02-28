import { useFormik, Form } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import img from '../assets/h-and-m-sister-brands-291021-1610367544147-main-320-80-removebg-preview.png'

import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

function Contact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validation = Yup.object().shape({
    fname: Yup.string()
      .min(4, "name must be at least 4 characters")
      .max(20, "name must be less than 20 characters")
      .required("First Name is required"),
    lname: Yup.string()
      .min(4, "name must be at least 4 characters")
      .max(20, "name must be less than 20 characters")
      .required("Last Name  is required"),
    email: Yup.string()
      .email("Enter a valid Email")
      .required("Email is required"),
    phone: Yup.string()
      .max(11, "Name must be less than 11 numbers")
      .required("Phone is required"),
      text: Yup.string()
      .max(400, "message must be less than 400 characters")
      .required("Message is required"),
  });

  async function handleAddProduct(values, { resetForm }) {
    try {
      const response = await axiosInstance.post("/contacts", values);
      console.log("Message sent successfully:", response.data);
      resetForm();
      navigate("/");
      alert("Message sent successfully");
    } catch (error) {
      console.error("sending message Failed:", error);
    }
  }

 

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      text: "",
    },

    onSubmit: handleAddProduct,
    validationSchema: validation,
  });

  return (
    <>
    <div className="row">
        <div className="col">
        <form style={styles.formstyle} onSubmit={formik.handleSubmit}>
      <h2>Contact our team</h2>
        <div className="d-flex gap-5">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              aria-describedby="emailHelp"
              placeholder="First Name"
              name="fname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname}
            />
          </div>
          {formik.errors.fname && formik.touched.fname ? (
            <div class="alert alert-danger" role="alert">
              {formik.errors.fname}
            </div>
          ) : null}
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              aria-describedby="emailHelp"
              placeholder="Last Name"
              name="lname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lname}
            />
          </div>
          {formik.errors.lname && formik.touched.lname ? (
            <div class="alert alert-danger" role="alert">
              {formik.errors.lname}
            </div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder=" Email Address"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.email}
          </div>
        ) : null}

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            placeholder="Phone Number"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        {formik.errors.phone && formik.touched.phone ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.phone}
          </div>
        ) : null}

        <div className="form-group">
          <label htmlFor="text">Message</label>
          <textarea
            id="text"
            name="text"
            rows="4"
            cols="50"
            className="form-control"
            placeholder="Leave us a message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
            style={{ resize: "vertical", width: "100%" }}
          />
        </div>
        {formik.errors.text && formik.touched.text ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.text}
          </div>
        ) : null}

        <button type="submit" className="submitbtn" style={{ margin: "5px" }}>
          Send Message
        </button>
      </form>
        </div>
        {/* <div className="col-2 text-center align-self-center">
            <img src={img} style={{width:"400px",height:"100vh"}}/>

        </div> */}

    </div>
      
    </>
  );
}

export default Contact;
const styles = {
  formstyle: {
    display: "flex",
    flexDirection: "column",
    // justifyContent:"center",
    gap: "20px",
    margin: "40px",
    width: "50%",
  },
};

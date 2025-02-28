import { useFormik,Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { fetchRegister } from "../redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate= useNavigate()

  const dispatch = useDispatch();

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name must be at least 4 characters")
      .max(20, "Name must be less than 20 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid Email")
      .required("Email is required"),
      phone: Yup.string()
      .max(11, "Name must be less than 11 numbers")
      .required("Phone is required"),
    password: Yup.string()
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password must match")
      .required("ConfirmPassword is required"),
  });

  const handleSubmit = (data,{resetForm}) => {

    console.log(data);

    dispatch(fetchRegister(data))
    navigate('/login');
    alert("user registered successfully");
    resetForm();
    
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    
    onSubmit: handleSubmit,
    validationSchema: validation,
  });

  return (
    <>
      <form style={styles.formstyle} onSubmit={formik.handleSubmit}>
        <h1>Register Now</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        {formik.errors.name && formik.touched.name ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.name}
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your Email Address"
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
            placeholder="Enter your Phone Number"
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            placeholder="Enter your Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.errors.password && formik.touched.password ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.password}
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="rePassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="rePassword"
            placeholder="Confirm your Password"
            name="rePassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
          />
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? (
          <div class="alert alert-danger" role="alert">
            {formik.errors.rePassword}
          </div>
        ) : null}

        <button type="submit" className=" submitbtn" style={{ margin: "5px" }}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Register;
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

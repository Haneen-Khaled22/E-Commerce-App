import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailAddress = (event) => {
    setErrors({ ...errors, email: "" });
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setErrors({ ...errors, Password: "" });
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault;

    if (email.length < 3) {
        setErrors((prevstate)=>{
          return{
              ...prevstate,
              email:"Email must be at least 3 characters"
  
          }
        });
      }

    if (Password.length < 3) {
      setErrors((prevstate)=>{
        return{
            ...prevstate,
            Password:"Password must be at least 3 characters"

        }
      });
    }

    
  };

  return (
    <>
      <form style={styles.formstyle} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={handleEmailAddress}
          />
          {errors.email && (<p className="text-danger text-small">{errors.email}</p>)}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={handlePassword}
          />
           {errors.Password && (<p className="text-danger text-small">{errors.Password}</p>)}
        </div>

        <button type="submit" className="btn btn-primary" style={{ margin: "5px" }}>
          Submit
        </button>
      </form>
    </>
  );
}

export default FormLogin;

const styles = {

    formstyle:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"20px",
        margin: "auto" ,
        width:"50%",
       
    }
}

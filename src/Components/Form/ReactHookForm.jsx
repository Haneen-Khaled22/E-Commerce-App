import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



function ReactHookForm() {

  const navigate = useNavigate();
  const {loginError} = useSelector((state)=>state.auth);

  const dispatch = useDispatch();


  const { register, 
    formState:{errors}, handleSubmit ,reset} = useForm();

    const onSubmit =(data)=>{
      console.log(data);
      dispatch(fetchLogin(data))
      .unwrap()
      .then(() => {
      
        toast.success("user logged in successfully");
        navigate('/');
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
        toast.error("login failed");
      });
      reset();
    }
  return (
    <>
      <form style={styles.formstyle} onSubmit={handleSubmit(onSubmit)}>

        <h1>Login </h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {value:/^[a-z0-9]+@[a-z]+\.com$/,message:"Enter a valid Email Address"},
              
            })}
          />
          {errors.email && (
          <div class="alert alert-danger" role="alert">
            {errors.email.message}
          </div>
        )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength:{value:4,message:"Password should be at least 4 characters"},
            })}
          />
           {errors.password && (
          <div class="alert alert-danger" role="alert">
            {errors.password.message}
          </div>
        )}
        </div>
        {loginError && <p className="text-danger">{loginError}</p>}

        <button
          type="submit"
          className="submitbtn"
          style={{ margin: "5px" }}
        >
          Login
        </button>
        <p>Don't have an account ?<span><Link className="signupbtn" to={'/register'} ><b>Register</b></Link></span></p>
      </form>
    </>
  );
}

export default ReactHookForm;

const styles = {
  formstyle: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "40px",
    width: "50%",
  },
};

import React from "react";
import img from "../assets/person.png";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiLanguage } from "react-icons/hi2";
import { FiMessageCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/Slices/authSlice";
import toast from "react-hot-toast";


function Account() {
   const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
  const handleLogOut = () => {
      dispatch(logout());
      toast.success("user logged out successfully");
      navigate("/");
    };

  if (!user) {
    return <h3>Loading user data...</h3>;
  }
  return (
    <div className="row ">
      <div className="col-12 col-5 col-lg-5 col-xl-5 col-md-5 col-sm-12">
        <div style={{ margin: " 10px 50px" }}>
          <img src={img} style={styles.personimg} />
          <h3>{user.name}</h3>
          <p style={styles.email}>{user.email}</p>
        </div>
        <div style={{ margin: "50px" }}>
          <h3 style={styles.h3}>Personal Information</h3>
          <p style={styles.p}>Billing and Payments</p>
          <p style={styles.p}>Order History</p>
          <p style={styles.p}>Gift Cards</p>
          <button className="submitbtn" style={{width:"100px",backgroundColor: "rgb(191, 92, 26)"}}
          onClick={handleLogOut}>Logout</button>
        </div>
      </div>
      <div className="col-12 col-lg-7 col-xl-7 col-md-7 col-sm-12">
        <div style={{ margin: "10px" }}>
          <h3>Personal Information</h3>
          <p>
            Manage your personal information including phone number and email
            address<br></br> wher you can be connected{" "}
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2">
         <div className="col">
         <div className="d-flex justify-content-between align-items-center div">
            <div>
              <h5>Name</h5>
              <p style={styles.email}>{user.name}</p>
            </div>
            <IoPersonCircleOutline
              style={{ color: "rgb(215, 96, 17)", fontSize: "40px" }}
            />
          </div>
         </div>
         <div className="col">
         <div className="d-flex justify-content-between align-items-center div">
            <div>
              <h5>Date of Birth</h5>
              <p style={styles.email}>12 August 2002</p>
            </div>
            <SlCalender
              style={{ color: "rgb(215, 96, 17)", fontSize: "30px" }}
            />
          </div>
         </div>
         <div className="col">
         <div className="d-flex justify-content-between align-items-center div">
            <div>
              <h5>Country Region</h5>
              <p style={styles.email}>Egypt</p>
            </div>
            <FaEarthAmericas
              style={{ color: "rgb(215, 96, 17)", fontSize: "30px" }}
            />
          </div>
         </div>
          
         <div className="col">
         <div className="d-flex justify-content-between align-items-center div">
            <div>
              <h5>Language</h5>
              <p style={styles.email}>Arabic-English</p>
            </div>
            <HiLanguage
              style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
            />
          </div>
         </div>
         <div className="col">
         <div className="d-flex justify-content-between align-items-center div">
            <div>
              <h5>Contactable At</h5>
              <p style={styles.email}>{user.email}</p>
            </div>
            <FiMessageCircle
              style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
            />
          </div>
         </div>
          
        </div>
      </div>
    </div>
  );
}

export default Account;

const styles = {
  personimg: {
    width: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
  },
  email: {
    color: "grey",
  },
  h3: {
    color: "rgb(215, 96, 17)",
  },
  p: {
    color: "rgb(54, 50, 48)",
    fontSize: "17px",
  },
  
};

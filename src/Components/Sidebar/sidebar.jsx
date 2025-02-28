import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/person.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { BiSolidCategory } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import toast from "react-hot-toast";
import LogContext, { context } from "../../contexts/logContext";



function SideBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {userlog,setUserlog} = useContext(context);

  const handleLogOut = () => {
    setUserlog(null);
    dispatch(logout());
    toast.success("user logged out successfully");
    navigate("/");
  };

  if (!user) {
    return <></>;
  }
  return (
    userlog && (
      <>
        <div style={styles.sidebar}>
          <ul style={styles.ul}>
            <div>
              <li>
                <div>
                  <img src={img} alt="profile" className="img-box" />
                </div>
                <h4 style={{ marginTop: "10px" }}>{user.name}</h4>
              </li>
              <li
                style={styles.li}
                className="class"
                onClick={() => navigate("/")}
              >
                <MdHome style={{ fontSize: "30px" }} />
                <p style={{ paddingTop: "12px" }}>Home</p>
              </li>
              <li
                style={styles.li}
                className="class"
                onClick={() => navigate("/account")}
              >
                <IoPersonCircleOutline style={{ fontSize: "30px" }} />
                <p style={{ paddingTop: "12px" }}>Profile</p>
              </li>
              <li
                style={styles.li}
                className="class"
                onClick={() => navigate("/productswiththunk")}
              >
                <FaCartShopping style={{ fontSize: "25px" }} />
                <p style={{ paddingTop: "12px" }}>MarketPlace</p>
              </li>
              <li style={styles.li} className="class">
                <BiSolidCategory style={{ fontSize: "25px" }} />
                <p style={{ paddingTop: "12px" }}>Categories</p>
              </li>
              <li style={styles.li} className="class">
                <MdPayment style={{ fontSize: "25px" }} />
                <p style={{ paddingTop: "12px" }}>Payment</p>
              </li>
            </div>

            <div className=" logout">
              <li style={styles.li} className="class ">
                <IoMdSettings style={{ fontSize: "25px" }} />
                <p style={{ paddingTop: "12px" }}>Settings</p>
              </li>
              <li style={styles.li} className="class " onClick={handleLogOut}>
                <CiLogout style={{ fontSize: "25px" }} />
                <p style={{ paddingTop: "12px" }}>Log Out</p>
              </li>
            </div>
          </ul>
        </div>
      </>
    )
  );
}

export default SideBar;
const styles = {
  sidebar: {
    width: "250px",
    minHeight: "100vh",
    backgroundColor: "rgb(87, 82, 79)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  ul: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    gap: "15px",
    listStyle: "none",
    padding: "0 15px",
    width: "250px",
    backgroundColor: "rgb(98, 94, 92)",
    position: "relative",
    color: "white",
    justifyContect: "space-between",
  },
  li: {
    width: "100%",
    display: "flex",
    // backgroundColor:"grey",
    margin: "5px",
    padding: "10px",
    alignItems: "center",
    gap: "20px",
    fontSize: "18px",
    height: "80px",
  },
};

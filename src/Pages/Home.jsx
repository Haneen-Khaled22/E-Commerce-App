import React, { useContext } from "react";
import img1 from "../assets/sr.png";
import img2 from "../assets/sb.png";
import img3 from "../assets/su.png";
import img4 from "../assets/gg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import { IoRibbonOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoSyncCircleOutline } from "react-icons/io5";
import { context } from "../contexts/logContext";


function Home() {
  const navigate = useNavigate();
  // const {userlog} =useContext(context);


  return (
    // localStorage.getItem("token") && (
      <>
        <div
          className="row  justify-content-center align-items-center container-fluid"
          style={{ marginLeft: "35px" }}
        >
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 first">
            <div>
              <p style={{ fontSize: "50px", fontWeight: "500" }}  className=" fw-bold">
                New Casual
                <br />
                Style
                <br />
                Collections
              </p>
              <hr style={styles.hr} />
            </div>
            <div>
              <p style={styles.p}>
                Step into a world of style where comfort and elegance come
                <br /> together effortlessly.
              </p>
              <Link to={"/productswiththunk"}>
                <div className="discoverbtn">Discover Now</div>
              </Link>
            </div>
          </div>

          <div className="col-12 col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <div
              id="carouselExampleControls"
              className="carousel slide vh-100 d-flex align-items-center"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="3000">
                  <img
                    className="d-block w-100 img-fluid"
                    src={img1}
                    alt="First slide"
                    style={styles.img}
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="d-block w-100 img-fluid"
                    src={img2}
                    alt="Second slide"
                    style={styles.img}
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    className="d-block w-100 img-fluid"
                    src={img3}
                    alt="Third slide"
                    style={styles.img}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center align-items-center container-fluid "
          style={{ backgroundColor: "rgb(250, 248, 243)", marginTop: "50px" }}
        >
          <div className="col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
            <img src={img4} alt="img" style={styles.img4} className="img-fluid mt-5 mx-3" />
          </div>
          <div className="col-12 col-xl-7 col-lg-7 col-md-7  col-sm-12 ">
            <div style={{ marginLeft: "20px", marginBottom: "50px" }}>
              <p style={{ fontSize: "40px", fontWeight: "500" }}>
                Why Choosing Us
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2">
              <div className="col">
              <div style={styles.div} >
                <IoRibbonOutline
                  style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
                />
                <h4>Top Qualitiy</h4>
                <p style={styles.email}>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  Quae illo veritatis voluptas nesciunt <br />
                  fuga consequuntur quod
                  <br />
                </p>
              </div>

              </div>
              <div className="col"> <div style={styles.div} >
                <FaMoneyBillTransfer
                  style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
                />
                <h4>Checkback Rewards</h4>
                <p style={styles.email}>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  Quae illo veritatis voluptas nesciunt <br />
                  fuga consequuntur quod
                  <br />
                </p>
              </div></div>
             <div className="col">  <div style={styles.div} >
                <IoSyncCircleOutline
                  style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
                />
                <h4>Diversity</h4>
                <p style={styles.email}>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  Quae illo veritatis voluptas nesciunt <br />
                  fuga consequuntur quod
                  <br />
                </p>
              </div></div>
              <div className="col">
              <div style={styles.div} >
                <CiDeliveryTruck
                  style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
                />
                <h4>Fast Delivery</h4>
                <p style={styles.email}>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  Quae illo veritatis voluptas nesciunt <br />
                  fuga consequuntur quod
                  <br />
                </p>
              </div>

              </div>
            
            <div className="col">
            <div style={styles.div} >
                <CiMoneyCheck1
                  style={{ color: "rgb(215, 96, 17)", fontSize: "35px" }}
                />
                <h4>Secret Payment</h4>
                <p style={styles.email}>
                  Lorem ipsum dolor sit amet consectetur
                  <br />
                  Quae illo veritatis voluptas nesciunt <br />
                  fuga consequuntur quod
                  <br />
                </p>
              </div>
            </div>
              
              
            </div>
          </div>
        </div>
      </>
    )
  ;
}

export default Home;
const styles = {
  img: {
    maxWidth: "100%",
    height: "100vh",
    objectFit: "cover",
  },
  hr: {
    width: "170px",
    border: "1px solid black",
    margin: "50px 0",
    opacity: "1",
  },
  p: {
    color: "grey",
    fontSize: "20px",
    margin: " 50px 0",
  },
  img4: {
    maxWidth: "100%",
    height: "600px",
    marginTop: "100px",
    marginLeft: "25px",
  },
  div: {
    // width: "300px",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "20px",
    margin: "15px",
  },
  email: {
    color: "grey",
  },
};

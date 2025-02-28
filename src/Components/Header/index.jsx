import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import routes from "./route";
import { useState,useEffect } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import { createContext } from "react";
import SideBar from "../Sidebar/sidebar";
import { useContext } from "react";
import logo from "../../assets/HANEEN (2).png";
import { GoMoon } from "react-icons/go";
import { LuSunMoon } from "react-icons/lu";
import { IoLanguage } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { context } from "../../contexts/logContext";
import { useSelector } from "react-redux";




function Header({ setSideBar, sidebar }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const {userlog} = useContext(context);
  

  function toggleTheme() {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  function toggleLanguage() {
    let newLanguage = language === "En" ? "Ar" : "En";
    setLanguage(newLanguage);
  }
 

  

  return (
    <>
      <header className="header container-fluid d-flex flex-column flex-lg-row justify-content-between ">
        <div className="d-flex  align-items-center justify-content-around">
         <div >
         {userlog&& (
            <button
              onClick={() => setSideBar(!sidebar)}
              className=" sidebtn"
             
            >
              <FiMenu />
            </button>
          )}
         </div>
         <div>
          <h3 className="fw-bold m-5">EliteWear</h3>
          </div>
        
         
         <div>
         <ul className="d-flex   flex-lg-row navStyle ms-auto ">
            {userlog? (
              routes.map((route) => (
                
                <li className="p-2" key={route.path}>
                  <NavLink to={route.path}>{route.element}</NavLink>
                </li>
              )
            )
            ) : (
              <div className="d-flex justify-content-end">
                <li className="p-2 ms-auto">
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li className="p-2">
                  <NavLink to="/login">Login</NavLink>
                </li>
              </div>
            )}
          </ul>
         </div>
          
        </div>
        
       

        <div>
          <button onClick={toggleTheme} className="bgMode">
            {theme == "light" ? (
              <LuSunMoon style={{ fontSize: "25px" }} />
            ) : (
              <GoMoon style={{ fontSize: "25px" }} />
            )}
          </button>
          <button onClick={toggleLanguage} className=" bgMode">
            {language === "En" ? (
              <>
                <IoLanguage style={{ fontSize: "25px" }} />
              </>
            ) : (
              <IoLanguage style={{ fontSize: "25px" }} />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;

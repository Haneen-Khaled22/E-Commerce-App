import { React, useContext, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
import SideBar from "../Sidebar/sidebar";
import LanguageContext from "../../contexts/LanguageContext";
import { useDispatch } from "react-redux";
// import { useContext } from "react";
import { fetchLoggedInUser } from "./../../redux/Slices/authSlice";

function Layout() {
  const [sidebar, setSideBar] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.dir = language === "Ar" ? "rtl" : "ltr";
  }, [language]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, []);
  return (
    <>
      <div className="layout-container d-flex flex-column min-vh-100">
        <Header setSideBar={setSideBar} sidebar={sidebar} />
        <div className="d-flex flex-grow-1 ">
          {sidebar && localStorage.getItem("token") && (
            <SideBar className="sidebar" />
          )}

          <main
            className={`main ${
              theme == "light" ? "bg-dark text-light" : "bg-light"
            }`}
          >
            <Outlet />
          </main>
        </div>
        {localStorage.getItem("token")&&
        <Footer />}
      </div>
    </>
  );
}

export default Layout;

import React from "react";
import { Navigate } from "react-router-dom";

import {  useNavigate, } from "react-router-dom";


const ProtectedRoute = (props) => {

  // const navigate=useNavigate();
 
  
  if(localStorage.getItem('token')!==null){
    return props.children;
  }else{
    return <Navigate to={"/login"} />;
  }

};


export default ProtectedRoute;

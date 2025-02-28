import React from "react";

import { Navigate, useNavigate, } from "react-router-dom";


const ProtectedRoute = (props) => {

  const navigate=useNavigate();
 
  
  if(localStorage.getItem('token')!==null){
    return props.children;
  }else{
    navigate('/login');
  }

};


export default ProtectedRoute;

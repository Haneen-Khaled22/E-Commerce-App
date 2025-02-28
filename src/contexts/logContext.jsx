import React, { createContext, useEffect, useState } from "react";

export let context = createContext(null);

function LogContext({ children }) {
  const [userlog, setUserlog] = useState(()=>localStorage.getItem("token") || null);
  console.log(userlog);

  useEffect(() => {
    const handleStorageChange = () => {
      setUserlog(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Ensure `userlog` updates when login/logout happens in the same tab
  useEffect(() => {
    setUserlog(localStorage.getItem("token"));
  }, [localStorage.getItem("token")]);

  return (
    <context.Provider value={{ userlog, setUserlog }}>
      {children}
    </context.Provider>
  );
}

export default LogContext;

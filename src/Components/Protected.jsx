import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router";
// import Home from './Home';

const Protected = ({ Components }) => {
  // const {Components}=props
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("logedin"));
    if (!login) {
      console.log("login value---", login);
      navigate("/logpage");
      setIsLoggedin(false);
      return;
    } else {
      setIsLoggedin(true);
    }
    // let logvalue = JSON.parse(login);

    // if (logvalue !== true){
    //     nevigate('/')
    // }
  }, []);
  return <>{isLoggedin && <Outlet />}</>;
};

export default Protected;

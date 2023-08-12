import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Headers/> */}
      <h2 className="text-center text-success">Wellcome to Home</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quibusdam,
        ipsa, fugit similique eaque ullam corporis culpa quos illo laudantium
        fugiat. Officia, velit! Voluptate animi aliquid ducimus tempore dolorum
        asperiores?
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("logedin");
          navigate("/logpage");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

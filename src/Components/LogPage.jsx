import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const LogPage = () => {
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const register = (e) => {
    if (email === "" && passward === "") {
      alert("Plese input Details First");
    } else {
      localStorage.setItem("logDetails", JSON.stringify({ email, passward }));
      // Navigate.navigate("/home")
      setEmail("");
      setPassward("");
      alert("You registred successfully");
    }
  };
  let storeData = localStorage.getItem("logDetails");
  let data = JSON.parse(storeData);

  // const storage = localStorage.getItem("logDetails" , JSON.stringify({email,passward}));
  // console.log(storeData);
  // console.log(storeData.email);
  const nevigate = useNavigate();
  const logCheck = (e) => {
    // console.log(data);
    // console.log(data.email);
    if (email === "" && passward === "") {
      alert("Plese input Login Details First");
    } else if (email === data.email && passward === data.passward) {
      // console.log("the login data matched");
      localStorage.setItem("logedin", true);
      nevigate("/");
    } else {
      alert("Sorry Incorect Login Details !");
    }

    // if
    // console.log(email,passward);
    // e.preventDefault()
    // console.log(email === storage.email);
    // if(email===storage.email && passward === storage.passward)
    // {
    //   console.log("id passward matched");
    // }
    // else{
    //   console.log("id passwasr not matched");
    // }
  };

  return (
    <div>
      <Form className=" container mt-5">
        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passward}
            onChange={(e) => setPassward(e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="button" onClick={register}>
          Register
        </Button>
        <Button variant="success mx-3" type="button" onClick={logCheck}>
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LogPage;

// id='email' id='passward'

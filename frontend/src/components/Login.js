import React, { useState } from "react";
import SignInWithGoogle from "../LoginMethods/GoogleFirebase";
import rocket from "../images/rocket.jpg";
import "../LoginMethods/google.css";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");
  const navigate = useNavigate();
  const CrossEyeHandler = () => {
    setShow(!show);
    setType("password");
  };
  const fullEyeHandler = () => {
    setShow(!show);
    setType("text");
  };

  const signInHandler = () => {
    SignInWithGoogle();
    const status = sessionStorage.getItem("status");
    console.log(status);
    navigate("/home");
  };

  const SubmitHandler = () => [
    setTimeout(() => {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      navigate("/home");
    }, 1000),
  ];

  return (
    <div className="Login">
      <div className="card">
        <img className="rocket" src={rocket} alt="rocket" />
        <div>
          <h2 style={{ color: "#7c73e6", margin: "0" }}>Welcome to Bardeen</h2>
          <span style={{ fontWeight: "500", color: "grey" }}>
            Let's Login to launch your automations.
          </span>
        </div>

        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password">
          <input
            type={type}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {show ? (
            <i
              onClick={CrossEyeHandler}
              className="fa-regular fa-eye-slash"
            ></i>
          ) : (
            <i
              onClick={fullEyeHandler}
              className="fa-solid fa-eye"
              id="eye"
            ></i>
          )}
        </div>

        <div className="instructions">
          <span>Create Account</span>
          <span style={{ color: "#7c73e6" }}>Forgot Password ?</span>
        </div>
        <button onClick={SubmitHandler} className="signIn">
          Sign In
        </button>
        <button className="login-with-google-btn" onClick={signInHandler}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

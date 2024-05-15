import React, { useState, useRef } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  // Check the email & password then send data to the server.
  const loginHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email) setEmailError(true);
    if (!password) setPasswordError(true);

    if (!emailError && !passwordError) {
      console.log(email);
      console.log(password);
    }
  };

  return (
    <div className={loginstyle.login}>
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
        />
        <p className={basestyle.error}>{emailError}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <p className={basestyle.error}>{passwordError}</p>
        <button className={basestyle.button_common}>Login</button>
      </form>
      <NavLink to="/signup">Not registered yet? Register Now</NavLink>
    </div>
  );
};
export default Login;

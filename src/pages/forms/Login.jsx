import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("email is required");
    if (pass.trim() === "") return toast.error("password is required");
  };
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showpass, setshowPass] = useState(false);
  const showpasshandler = () => {
    setshowPass((prev) => !prev);
  };
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Login to your account</h1>
      <form action="" onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type={showpass?"text":"password"}
          placeholder="password"
        />
        {showpass ? (
          <i onClick={showpasshandler} className="bi bi-eye-slash-fill eye"></i>
        ) : (
          <i onClick={showpasshandler} className="bi bi-eye-fill eye"></i>
        )}
        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
}

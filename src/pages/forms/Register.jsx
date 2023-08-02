import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("email is required");
    if (pass.trim() === "") return toast.error("password is required");
    if (userName.trim() === "") return toast.error("User Name is required");
  };
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">login to your account</h1>
      <form action="" onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="user name"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button className="form-btn">Register</button>
      </form>
      <div className="form-footer">
        Already have an account{" "}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
    </div>
  )
}

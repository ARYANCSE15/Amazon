import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login() {
    if (email === "" || password === "") {
      setError("All fields required!");
    } else {
      localStorage.setItem("user", email);
      alert("Login Successful!");
      navigate("/");
    }
  }

  function createAccount() {
    if (!email) {
      alert("Enter email first!");
      return;
    }
    localStorage.setItem("user", email);
    alert("Account Created Successfully!");
    navigate("/");
  }

  return (
    <>
      <div className="login">
        <div className="box">
          <h1 className="title">Sign In</h1>

          <div className="logo">
            <img src={logo} alt="Amazon" />
          </div>

          <label className="label">Email</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login} className="btn-primary">
            Sign In
          </button>

          <p className="error">{error}</p>

          <hr />

          <p className="text">New to Amazon?</p>

          <button onClick={createAccount} className="btn-secondary">
            Create your Amazon account
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;

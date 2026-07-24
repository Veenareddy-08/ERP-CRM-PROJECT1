import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserShield,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/login.css";

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getStrength();

  const strengthText = () => {
    if (strength <= 2) return "Weak";
    if (strength === 3) return "Medium";
    return "Strong";
  };

  return (

    <div className="login-page">

      {/* LEFT PANEL */}

      <motion.div
        className="left-panel"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
          className="erp-image"
          alt="ERP"
        />

        <div className="overlay">

          <h1>Mini ERP CRM</h1>

          <p>

            Manage Customers<br />

            Manage Products<br />

            Inventory Control<br />

            Reports & Analytics

          </p>

        </div>

      </motion.div>

      {/* RIGHT PANEL */}

      <motion.div
        className="right-panel"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="login-card">

          <FaUserShield
            size={60}
            color="#2563eb"
            className="mx-auto mb-3"
          />

          <h2>Welcome Back 👋</h2>

          <p className="text-center">
            Login to continue managing your business.
          </p>

          {/* EMAIL */}

          <div className="input-group mb-3">

            <span className="input-group-text">

              <FaEnvelope />

            </span>

            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />

          </div>

          {/* PASSWORD */}

          <div className="input-group mb-2">

            <span className="input-group-text">

              <FaLock />

            </span>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="input-group-text eye"
              onClick={() => setShowPassword(!showPassword)}
            >

              {showPassword ? <FaEyeSlash /> : <FaEye />}

            </span>

          </div>

          {/* PASSWORD STRENGTH */}

          <div className="strength-box">

            <div className="progress">

              <div
                className="progress-bar bg-success"
                style={{
                  width: `${strength * 20}%`,
                }}
              ></div>

            </div>

            <small>

              Password Strength :
              <b> {strengthText()}</b>

            </small>

          </div>

          {/* PASSWORD RULES */}

          <div className="rules">

            <p className={password.length >= 8 ? "ok" : ""}>
              ✓ Minimum 8 Characters
            </p>

            <p className={/[A-Z]/.test(password) ? "ok" : ""}>
              ✓ Uppercase Letter
            </p>

            <p className={/[0-9]/.test(password) ? "ok" : ""}>
              ✓ One Number
            </p>

            <p className={/[^A-Za-z0-9]/.test(password) ? "ok" : ""}>
              ✓ One Special Character
            </p>

          </div>

          {/* ROLE */}

          <select className="form-select mb-3">

            <option>Admin</option>

            <option>Sales</option>

            <option>Warehouse</option>

            <option>Accounts</option>

          </select>

          {/* LOGIN BUTTON */}

          <button
            className="btn btn-primary w-100 login-btn"
            onClick={() => navigate("/dashboard")}
          >

            LOGIN

          </button>

          {/* SIGNUP */}

          <div className="signup mt-4 text-center">

            New User?

            <Link
              to="/signup"
              className="ms-2"
            >

              Create Account

            </Link>

          </div>

        </div>

      </motion.div>

    </div>

  );

}
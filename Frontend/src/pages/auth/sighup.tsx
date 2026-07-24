import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
} from "react-icons/fa";

import "../../styles/login.css";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

      {/* LEFT */}

      <div className="left-panel">

        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
          className="erp-image"
          alt="ERP"
        />

        <div className="overlay">
          <h1>Join Mini ERP CRM</h1>

          <p>
            Start managing Inventory,
            Customers,
            Sales,
            Reports and Analytics.
          </p>
        </div>

      </div>

      {/* RIGHT */}

      <div className="right-panel">

        <div className="login-card">

          <FaUserPlus
            size={55}
            color="#2563eb"
            className="mx-auto mb-3"
          />

          <h2>Create Account</h2>

          <p>Register your ERP account</p>

          <div className="input-group mb-3">

            <span className="input-group-text">

              <FaUser />

            </span>

            <input
              className="form-control"
              placeholder="Full Name"
            />

          </div>

          <div className="input-group mb-3">

            <span className="input-group-text">

              <FaEnvelope />

            </span>

            <input
              className="form-control"
              placeholder="Email"
            />

          </div>

          <div className="input-group mb-3">

            <span className="input-group-text">

              <FaPhone />

            </span>

            <input
              className="form-control"
              placeholder="Phone Number"
            />

          </div>

          <div className="input-group mb-3">

            <span className="input-group-text">

              <FaBuilding />

            </span>

            <input
              className="form-control"
              placeholder="Company"
            />

          </div>

          <div className="input-group mb-3">

            <span className="input-group-text">

              <FaLock />

            </span>

            <input
              className="form-control"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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

          <div className="progress mb-2">

            <div
              className="progress-bar bg-success"
              style={{
                width: `${strength * 20}%`,
              }}
            ></div>

          </div>

          <small>Password : {strengthText()}</small>

          <div className="input-group mt-3 mb-3">

            <span className="input-group-text">

              <FaLock />

            </span>

            <input
              className="form-control"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <span
              className="input-group-text eye"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          {confirmPassword !== "" && (

            <small
              style={{
                color:
                  password === confirmPassword
                    ? "lightgreen"
                    : "red",
              }}
            >
              {password === confirmPassword
                ? "Passwords Match"
                : "Passwords Do Not Match"}
            </small>

          )}

          <button
            className="btn btn-success login-btn mt-3"
            onClick={() => navigate("/")}
          >
            CREATE ACCOUNT
          </button>

          <div className="signup mt-4">

            Already have an account?

            <Link to="/">
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
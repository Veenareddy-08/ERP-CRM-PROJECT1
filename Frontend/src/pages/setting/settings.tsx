import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaCog,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaSave
} from "react-icons/fa";

import "../../styles/settings.css";

export default function Settings() {

  const [company, setCompany] = useState("Mini ERP CRM");
  const [email, setEmail] = useState("admin@gmail.com");
  const [phone, setPhone] = useState("9876543210");

  function saveSettings() {

    const settings = {

      company,
      email,
      phone

    };

    localStorage.setItem(

      "erp_settings",

      JSON.stringify(settings)

    );

    alert("Settings Saved Successfully");

  }

  return (

    <motion.div

      className="settings-page"

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      {/* HERO */}

      <div className="settings-hero">

        <div>

          <h1>

            Application Settings

          </h1>

          <p>

            Configure your ERP CRM system information.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"

          className="settings-image"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* FORM */}

      <div className="settings-card">

        <h2>

          <FaCog className="me-2" />

          Company Information

        </h2>

        <div className="mb-4">

          <label>

            <FaBuilding className="me-2" />

            Company Name

          </label>

          <input

            className="form-control"

            value={company}

            onChange={(e) => setCompany(e.target.value)}

          />

        </div>

        <div className="mb-4">

          <label>

            <FaEnvelope className="me-2" />

            Email

          </label>

          <input

            className="form-control"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </div>

        <div className="mb-4">

          <label>

            <FaPhone className="me-2" />

            Phone

          </label>

          <input

            className="form-control"

            value={phone}

            onChange={(e) => setPhone(e.target.value)}

          />

        </div>

        <button

          className="btn btn-success save-btn"

          onClick={saveSettings}

        >

          <FaSave className="me-2" />

          Save Settings

        </button>

      </div>

    </motion.div>

  );

}
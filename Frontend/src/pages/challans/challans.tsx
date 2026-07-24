import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaFileInvoice,
  FaClipboardList,
  FaCheckCircle
} from "react-icons/fa";

import "../../styles/challans.css";

export default function Challans() {

  return (

    <motion.div

      className="challan-page"

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      {/* HERO */}

      <div className="challan-hero">

        <div>

          <h1>

            Challan Management

          </h1>

          <p>

            Create, manage and monitor all challans
            in one centralized ERP dashboard.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

          className="challan-image"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* CARDS */}

      <div className="challan-grid">

        <motion.div

          whileHover={{ scale: 1.05 }}

          className="challan-card"

        >

          <FaFileInvoice />

          <h3>Create Challan</h3>

          <p>

            Create a brand new delivery challan.

          </p>

          <Link to="/challans/create">

            <button>

              Create

            </button>

          </Link>

        </motion.div>

        <motion.div

          whileHover={{ scale: 1.05 }}

          className="challan-card"

        >

          <FaClipboardList />

          <h3>Draft Challans</h3>

          <p>

            Review all saved draft challans.

          </p>

          <Link to="/challans/draft">

            <button>

              View Drafts

            </button>

          </Link>

        </motion.div>

        <motion.div

          whileHover={{ scale: 1.05 }}

          className="challan-card"

        >

          <FaCheckCircle />

          <h3>Confirmed Challans</h3>

          <p>

            View approved and dispatched challans.

          </p>

          <Link to="/challans/confirmed">

            <button>

              View Confirmed

            </button>

          </Link>

        </motion.div>

      </div>

    </motion.div>

  );

}
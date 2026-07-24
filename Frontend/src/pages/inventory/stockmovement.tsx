import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaArrowDown,
  FaArrowUp,
  FaWarehouse,
  FaBoxes
} from "react-icons/fa";

import "../../styles/stockmovement.css";

export default function StockMovement() {

  const navigate = useNavigate();

  const [movements, setMovements] = useState([

    {
      id: 1,
      product: "Rice Bag",
      quantity: 50,
      type: "IN",
      reason: "Purchase",
      createdBy: "Admin",
      time: "22-07-2026 10:30 AM"
    },

    {
      id: 2,
      product: "Cooking Oil",
      quantity: 5,
      type: "OUT",
      reason: "Customer Sale",
      createdBy: "Admin",
      time: "22-07-2026 11:00 AM"
    },

    {
      id: 3,
      product: "Sugar",
      quantity: 20,
      type: "IN",
      reason: "Supplier Delivery",
      createdBy: "Manager",
      time: "22-07-2026 12:00 PM"
    }

  ]);

  function addMovement(
    product: string,
    quantity: number,
    type: "IN" | "OUT"
  ) {

    const newMovement = {

      id: movements.length + 1,

      product,

      quantity,

      type,

      reason: "Manual Update",

      createdBy: "Admin",

      time: new Date().toLocaleString()

    };

    setMovements([...movements, newMovement]);

  }

  return (

    <motion.div

      className="movement-page"

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      {/* Back Button */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <button

          className="btn btn-primary back-btn"

          onClick={() => navigate("/inventory")}

        >

          <FaArrowLeft className="me-2" />

          Back to Inventory

        </button>

      </div>

      {/* Hero */}

      <div className="movement-hero">

        <div>

          <h1>

            Stock Movement

          </h1>

          <p>

            Track every stock entry and stock exit happening inside your warehouse.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

          className="movement-image"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* Statistics */}

      <div className="movement-cards">

        <div className="movement-card">

          <FaBoxes />

          <h3>Total Logs</h3>

          <h2>{movements.length}</h2>

        </div>

        <div className="movement-card">

          <FaWarehouse />

          <h3>Warehouse</h3>

          <h2>Main Store</h2>

        </div>

      </div>

      {/* Buttons */}

      <div className="movement-buttons">

        <button

          className="stock-in-btn"

          onClick={() =>

            addMovement("Rice Bag", 10, "IN")

          }

        >

          <FaArrowDown />

          Stock IN

        </button>

        <button

          className="stock-out-btn"

          onClick={() =>

            addMovement("Rice Bag", 5, "OUT")

          }

        >

          <FaArrowUp />

          Stock OUT

        </button>

      </div>

      {/* Table */}

      <div className="movement-table">

        <table className="table table-hover">

          <thead>

            <tr>

              <th>Product</th>

              <th>Quantity</th>

              <th>Movement</th>

              <th>Reason</th>

              <th>Created By</th>

              <th>Timestamp</th>

            </tr>

          </thead>

          <tbody>

            {

              movements.map(item => (

                <tr key={item.id}>

                  <td>{item.product}</td>

                  <td>{item.quantity}</td>

                  <td>

                    {

                      item.type === "IN"

                        ?

                        <span className="badge bg-success">

                          IN

                        </span>

                        :

                        <span className="badge bg-danger">

                          OUT

                        </span>

                    }

                  </td>

                  <td>{item.reason}</td>

                  <td>{item.createdBy}</td>

                  <td>{item.time}</td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </motion.div>

  );

}
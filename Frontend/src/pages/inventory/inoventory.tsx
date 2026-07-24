import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaWarehouse,
  FaBoxes,
  FaSearch,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaCheckCircle
} from "react-icons/fa";

import API from "../../api/axios";

import "../../styles/inventory.css";

export default function Inventory() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await API.get("/products");

        setProducts(response.data);

      }

      catch (err) {

        console.log(err);

      }

    };

    fetchProducts();

  }, []);

  const filtered = products.filter((p) =>

    p.name?.toLowerCase().includes(search.toLowerCase())

  );

  const lowStock = products.filter(

    (p) => p.stock <= p.minStock

  ).length;

  return (

    <div className="inventory-page">

      {/* HERO */}

      <div className="inventory-hero">

        <div>

          <h1>Inventory Management</h1>

          <p>

            Monitor warehouse stock,

            inventory movements,

            and low stock alerts in one place.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

          className="inventory-image"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* STATS */}

      <div className="inventory-stats">

        <div className="stat-card">

          <FaBoxes />

          <h3>Total Products</h3>

          <h2>{products.length}</h2>

        </div>

        <div className="stat-card">

          <FaWarehouse />

          <h3>Warehouse</h3>

          <h2>5</h2>

        </div>

        <div className="stat-card">

          <FaExclamationTriangle />

          <h3>Low Stock</h3>

          <h2>{lowStock}</h2>

        </div>

        <div className="stat-card">

          <FaCheckCircle />

          <h3>Available</h3>

          <h2>{products.length - lowStock}</h2>

        </div>

      </div>

      {/* TOOLBAR */}

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input

            placeholder="Search Product..."

            value={search}

            onChange={(e) =>

              setSearch(e.target.value)

            }

          />

        </div>

        <div className="button-group">

          <button

            className="movement-btn"

            onClick={() =>

              navigate("/inventory/stock")

            }

          >

            <FaExchangeAlt />

            Stock Movement

          </button>

          <button

            className="alert-btn"

            onClick={() =>

              navigate("/inventory/low-stock")

            }

          >

            <FaExclamationTriangle />

            Low Stock Alert

          </button>

        </div>

      </div>

      {/* TABLE */}

      <div className="table-container">

        <table className="table table-hover">

          <thead>

            <tr>

              <th>Product</th>

              <th>SKU</th>

              <th>Current Stock</th>

              <th>Minimum</th>

              <th>Warehouse</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {

              filtered.map((item) => (

                <tr key={item.id}>

                  <td>{item.name}</td>

                  <td>{item.sku}</td>

                  <td>{item.stock}</td>

                  <td>{item.minStock}</td>

                  <td>{item.location}</td>

                  <td>

                    {

                      item.stock <= item.minStock ?

                        <span className="low-stock">

                          Low Stock

                        </span>

                        :

                        <span className="available">

                          Available

                        </span>

                    }

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}
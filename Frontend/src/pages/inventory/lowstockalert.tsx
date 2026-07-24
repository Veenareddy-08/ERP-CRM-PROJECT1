import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaExclamationTriangle,
  FaBoxes
} from "react-icons/fa";

import API from "../../api/axios";

import "../../styles/lowstock.css";

export default function LowStockAlert() {

    const navigate = useNavigate();

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await API.get("/products");

                const lowStockProducts = response.data.filter(

                    (product: any) =>

                        product.stock <= product.minStock

                );

                setProducts(lowStockProducts);

            }

            catch (error) {

                console.log(error);

            }

        };

        fetchProducts();

    }, []);

    return (

        <motion.div

            className="lowstock-page"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

        >

            {/* Back Button */}

            <button

                className="btn btn-primary back-btn"

                onClick={() => navigate("/inventory")}

            >

                <FaArrowLeft className="me-2" />

                Back to Inventory

            </button>

            {/* Hero */}

            <div className="lowstock-hero">

                <div>

                    <h1>

                        Low Stock Alerts

                    </h1>

                    <p>

                        Products below minimum stock level require immediate replenishment.

                    </p>

                </div>

                <motion.img

                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

                    className="hero-image"

                    animate={{ y: [0, -15, 0] }}

                    transition={{

                        repeat: Infinity,

                        duration: 3

                    }}

                />

            </div>

            {/* Statistics */}

            <div className="stats-container">

                <div className="stat-card">

                    <FaBoxes />

                    <h3>Total Low Stock Products</h3>

                    <h2>{products.length}</h2>

                </div>

            </div>

            {/* Table */}

            <div className="table-card">

                <table className="table table-hover">

                    <thead>

                        <tr>

                            <th>Product</th>

                            <th>Current Stock</th>

                            <th>Minimum Stock</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            products.map((item) => (

                                <tr key={item.id}>

                                    <td>{item.name}</td>

                                    <td>{item.stock}</td>

                                    <td>{item.minStock}</td>

                                    <td>

                                        <span className="badge bg-danger">

                                            <FaExclamationTriangle className="me-1"/>

                                            Reorder Required

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </motion.div>

    );

}
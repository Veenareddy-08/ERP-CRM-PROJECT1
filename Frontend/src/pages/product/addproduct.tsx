import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaBoxOpen,
  FaBarcode,
  FaLayerGroup,
  FaWarehouse,
  FaRupeeSign,
  FaCubes,
  FaArrowLeft,
  FaSave
} from "react-icons/fa";

import API from "../../api/axios";
import "../../styles/addproduct.css";

export default function AddProduct() {

  const navigate = useNavigate();

  const [product, setProduct] = useState({

    name: "",
    sku: "",
    category: "",
    price: "",
    stock: "",
    minStock: "",
    location: ""

  });

  const handleChange = (
    field: string,
    value: string
  ) => {

    setProduct({

      ...product,

      [field]: value

    });

  };

  const saveProduct = async () => {

    try {

      await API.post("/products", {

        name: product.name,
        sku: product.sku,
        category: product.category,
        price: Number(product.price),
        stock: Number(product.stock),
        minStock: Number(product.minStock),
        location: product.location

      });

      alert("Product Added Successfully");

      navigate("/products");

    }

    catch (err) {

      console.log(err);

      alert("Unable to Add Product");

    }

  };

  return (

    <div className="add-product-page">

      <div className="overlay">

        {/* LEFT */}

        <motion.div

          className="left-panel"

          initial={{ x: -80, opacity: 0 }}

          animate={{ x: 0, opacity: 1 }}

        >

          <motion.img

            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

            className="warehouse-image"

            animate={{ y: [0, -15, 0] }}

            transition={{

              repeat: Infinity,

              duration: 3

            }}

          />

          <h1>Add Products</h1>

          <p>

            Create new products and manage inventory efficiently using the ERP CRM system.

          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          className="right-panel"

          initial={{ x: 80, opacity: 0 }}

          animate={{ x: 0, opacity: 1 }}

        >

          <div className="product-card">

            <div className="top-bar">

              <button

                className="back-btn"

                onClick={() => navigate("/products")}

              >

                <FaArrowLeft />

                Back

              </button>

            </div>

            <h2>

              <FaBoxOpen />

              Add Product

            </h2>

            <div className="form-grid">

              <div className="input-box">

                <FaBoxOpen />

                <input

                  placeholder="Product Name"

                  value={product.name}

                  onChange={(e) =>

                    handleChange("name", e.target.value)

                  }

                />

              </div>

              <div className="input-box">

                <FaBarcode />

                <input

                  placeholder="SKU"

                  value={product.sku}

                  onChange={(e) =>

                    handleChange("sku", e.target.value)

                  }

                />

              </div>

              <div className="input-box">

                <FaLayerGroup />

                <input

                  placeholder="Category"

                  value={product.category}

                  onChange={(e) =>

                    handleChange("category", e.target.value)

                  }

                />

              </div>

              <div className="input-box">

                <FaRupeeSign />

                <input

                  type="number"

                  placeholder="Price"

                  value={product.price}

                  onChange={(e) =>

                    handleChange("price", e.target.value)

                  }

                />

              </div>

              <div className="input-box">

                <FaCubes />

                <input

                  type="number"

                  placeholder="Current Stock"

                  value={product.stock}

                  onChange={(e) =>

                    handleChange("stock", e.target.value)

                  }

                />

              </div>

              <div className="input-box">

                <FaCubes />

                <input

                  type="number"

                  placeholder="Minimum Stock"

                  value={product.minStock}

                  onChange={(e) =>

                    handleChange("minStock", e.target.value)

                  }

                />

              </div>

              <div className="input-box full">

                <FaWarehouse />

                <input

                  placeholder="Warehouse Location"

                  value={product.location}

                  onChange={(e) =>

                    handleChange("location", e.target.value)

                  }

                />

              </div>

            </div>

            <button

              className="save-btn"

              onClick={saveProduct}

            >

              <FaSave />

              Save Product

            </button>

          </div>

        </motion.div>

      </div>

    </div>

  );

}
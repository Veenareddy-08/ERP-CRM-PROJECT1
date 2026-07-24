import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaBoxOpen,
  FaWarehouse,
  FaExclamationTriangle,
  FaTags,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch
} from "react-icons/fa";

import API from "../../api/axios";
import "../../styles/product.css";

export default function ProductList() {

  const navigate = useNavigate();

  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await API.get("/products");

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  function deleteProduct(id: number) {

    setProducts(

      products.filter(

        (product) => product.id !== id

      )

    );

  }

  const filteredProducts = products.filter((product) =>

    product.name?.toLowerCase().includes(search.toLowerCase()) ||

    product.category?.toLowerCase().includes(search.toLowerCase()) ||

    product.sku?.toLowerCase().includes(search.toLowerCase())

  );

  const lowStock = products.filter(

    (p) => p.stock <= p.minStock

  ).length;

  return (

    <div className="product-page">

      {/* HERO */}

      <div className="product-hero">

        <div>

          <h1>Inventory Management</h1>

          <p>

            Manage your warehouse inventory,

            monitor stock levels,

            update products and pricing effortlessly.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

          className="hero-image"

          alt="Warehouse"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* STATS */}

      <div className="product-stats">

        <div className="stat-card">

          <FaBoxOpen size={35} />

          <h3>Total Products</h3>

          <h2>{products.length}</h2>

        </div>

        <div className="stat-card">

          <FaWarehouse size={35} />

          <h3>Warehouses</h3>

          <h2>5</h2>

        </div>

        <div className="stat-card">

          <FaExclamationTriangle size={35} />

          <h3>Low Stock</h3>

          <h2>{lowStock}</h2>

        </div>

        <div className="stat-card">

          <FaTags size={35} />

          <h3>Categories</h3>

          <h2>12</h2>

        </div>

      </div>

      {/* TOOLBAR */}

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input

            placeholder="Search Product..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

          />

        </div>

        <button

          className="add-btn"

          onClick={() => navigate("/products/add")}

        >

          <FaPlus />

          Add Product

        </button>

      </div>

      {/* TABLE */}

      <motion.div

        className="table-container"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

      >

        <table className="table table-hover">

          <thead>

            <tr>

              <th>Product</th>

              <th>SKU</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Warehouse</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {

              filteredProducts.map((product) => (

                <tr key={product.id}>

                  <td>{product.name}</td>

                  <td>{product.sku}</td>

                  <td>{product.category}</td>

                  <td>₹ {product.price}</td>

                  <td>

                    {

                      product.stock <= product.minStock ?

                        <span className="low-stock">

                          {product.stock} (Low)

                        </span>

                        :

                        product.stock

                    }

                  </td>

                  <td>{product.location}</td>

                  <td>

                    <button

                      className="edit-btn"

                      onClick={() =>

                        navigate(`/products/edit/${product.id}`)

                      }

                    >

                      <FaEdit />

                    </button>

                    <button

                      className="delete-btn"

                      onClick={() => deleteProduct(product.id)}

                    >

                      <FaTrash />

                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </motion.div>

    </div>

  );

}
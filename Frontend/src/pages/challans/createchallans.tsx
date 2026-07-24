import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaFileInvoice,
  FaPlus,
  FaSave,
  FaCheckCircle
} from "react-icons/fa";

import API from "../../api/axios";

import "../../styles/createchallan.css";

export default function CreateChallan() {

  const navigate = useNavigate();

  const challanNo = "CH-" + Date.now();

  const [customer, setCustomer] = useState("");

  const [customers, setCustomers] = useState<any[]>([]);

  const [availableProducts, setAvailableProducts] = useState<any[]>([]);

  const [items, setItems] = useState([
    {
      product_id: "",
      product_name: "",
      price: 0,
      stock: 0,
      quantity: 1
    }
  ]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const customerResponse = await API.get("/customers");
        setCustomers(customerResponse.data);

        const productResponse = await API.get("/products");
        setAvailableProducts(productResponse.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchData();

  }, []);

  function selectProduct(index: number, id: number) {

    const product = availableProducts.find((p) => p.id === id);

    const updated = [...items];

    updated[index] = {

      ...updated[index],

      product_id: product.id,

      product_name: product.name,

      price: product.price,

      stock: product.stock

    };

    setItems(updated);

  }

  function changeQuantity(index: number, value: number) {

    const updated = [...items];

    updated[index].quantity = value;

    setItems(updated);

  }

  function addProduct() {

    setItems([
      ...items,
      {
        product_id: "",
        product_name: "",
        price: 0,
        stock: 0,
        quantity: 1
      }
    ]);

  }

  async function saveDraft() {

    try {

      await API.post("/challans", {

        challan_number: challanNo,

        customer_id: customer,

        status: "DRAFT",

        items

      });

      alert("Draft Saved Successfully");

    } catch {

      alert("Failed");

    }

  }

  async function confirmChallan() {

    for (const item of items) {

      if (item.quantity > item.stock) {

        alert(item.product_name + " has insufficient stock");

        return;

      }

    }

    await API.post("/challans", {

      challan_number: challanNo,

      customer_id: customer,

      status: "CONFIRMED",

      items

    });

    alert("Challan Confirmed");

  }

  return (

    <motion.div

      className="challan-page"

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      <button

        className="btn btn-light back-btn"

        onClick={() => navigate("/challans")}

      >

        <FaArrowLeft className="me-2"/>

        Back

      </button>

      <div className="challan-hero">

        <div>

          <h1>Create Sales Challan</h1>

          <p>Create and dispatch wholesale challans instantly.</p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

          className="hero-image"

          animate={{ y: [0, -15, 0] }}

          transition={{ repeat: Infinity, duration: 3 }}

        />

      </div>

      <div className="challan-card">

        <h2>

          <FaFileInvoice />

          Sales Challan

        </h2>

        <label>Challan Number</label>

        <input

          value={challanNo}

          readOnly

        />

        <label>Select Customer</label>

        <select

          value={customer}

          onChange={(e) => setCustomer(e.target.value)}

        >

          <option>Select Customer</option>

          {

            customers.map((c) => (

              <option

                key={c.id}

                value={c.id}

              >

                {c.name}

              </option>

            ))

          }

        </select>

        <h3>Products</h3>

        {

          items.map((item, index) => (

            <div

              className="product-row"

              key={index}

            >

              <select

                value={item.product_id}

                onChange={(e) =>

                  selectProduct(

                    index,

                    Number(e.target.value)

                  )

                }

              >

                <option>Select Product</option>

                {

                  availableProducts.map((p) => (

                    <option

                      key={p.id}

                      value={p.id}

                    >

                      {p.name}

                    </option>

                  ))

                }

              </select>

              <input

                type="number"

                value={item.quantity}

                onChange={(e) =>

                  changeQuantity(

                    index,

                    Number(e.target.value)

                  )

                }

              />

              <input

                value={item.stock}

                readOnly

              />

            </div>

          ))

        }

        <button

          className="btn btn-primary mt-3"

          onClick={addProduct}

        >

          <FaPlus />

          Add Product

        </button>

        <div className="button-group">

          <button

            className="btn btn-warning"

            onClick={saveDraft}

          >

            <FaSave />

            Save Draft

          </button>

          <button

            className="btn btn-success"

            onClick={confirmChallan}

          >

            <FaCheckCircle />

            Confirm Challan

          </button>

        </div>

      </div>

    </motion.div>

  );

}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaUserPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye
} from "react-icons/fa";

import API from "../../api/axios";
import SearchBar from "../../components/common/searchbar";

import "../../styles/customer.css";

export default function CustomerList() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {

    const fetchCustomers = async () => {

      try {

        const response = await API.get("/customers");

        setCustomers(response.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchCustomers();

  }, []);

  function deleteCustomer(id: number) {

    setCustomers(customers.filter(c => c.id !== id));

  }

  const filtered = customers.filter(customer =>

    customer.name?.toLowerCase().includes(search.toLowerCase()) ||

    customer.company?.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <motion.div
      className="customer-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* HERO */}

      <div className="customer-hero">

        <div>

          <h1>👥 Customer Management</h1>

          <p>

            Manage customers, update information, search records and monitor customer activity.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"

          className="customer-image"

          animate={{ y: [0, -12, 0] }}

          transition={{
            repeat: Infinity,
            duration: 3
          }}

        />

      </div>

      {/* KPI */}

      <div className="customer-stats">

        <div className="stat-box">

          <FaUsers />

          <h3>Total Customers</h3>

          <h2>{customers.length}</h2>

        </div>

        <div className="stat-box">

          <FaUserPlus />

          <h3>New Customers</h3>

          <h2>25</h2>

        </div>

      </div>

      {/* SEARCH + BUTTONS */}

      <div className="toolbar">

        <div className="search-wrapper">

          <FaSearch />

          <SearchBar

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />

        </div>

        <div className="button-group">

          <button

            className="add-btn"

            onClick={()=>navigate("/customers/add")}

          >

            ➕ Add Customer

          </button>

          <button

            className="edit-top-btn"

            onClick={()=>navigate("/customers/edit")}

          >

            ✏ Edit Customer

          </button>

        </div>

      </div>

      {/* TABLE */}

      <div className="table-box">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Phone</th>

              <th>Email</th>

              <th>Business</th>

              <th>GST</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {

              filtered.map(customer => (

                <tr key={customer.id}>

                  <td>{customer.name}</td>

                  <td>{customer.phone}</td>

                  <td>{customer.email}</td>

                  <td>{customer.company}</td>

                  <td>{customer.gst}</td>

                  <td>

                    <button

                      className="view-btn"

                      onClick={()=>navigate("/customers/details")}

                    >

                      <FaEye />

                    </button>

                    <button

                      className="edit-btn"

                      onClick={()=>navigate(`/customers/edit/${customer.id}`)}

                    >

                      <FaEdit />

                    </button>

                    <button

                      className="delete-btn"

                      onClick={()=>deleteCustomer(customer.id)}

                    >

                      <FaTrash />

                    </button>

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
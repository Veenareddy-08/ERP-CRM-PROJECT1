import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaCheckCircle,
  FaClipboardCheck
} from "react-icons/fa";

import API from "../../api/axios";

import "../../styles/confirmedchallans.css";

type Challan = {
  id: number;
  challan_number: string;
  customer_name?: string;
  status: string;
};

export default function ConfirmedChallans() {

  const navigate = useNavigate();

  const [challans, setChallans] = useState<Challan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchChallans = async () => {

      try {

        const response = await API.get("/challans");

        setChallans(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchChallans();

  }, []);

  const confirmedChallans = challans.filter(

    (c) => c.status === "CONFIRMED"

  );

  return (

    <motion.div

      className="confirmed-page"

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      {/* Back Button */}

      <button

        className="btn btn-primary back-btn"

        onClick={() => navigate("/challans")}

      >

        <FaArrowLeft className="me-2" />

        Back

      </button>

      {/* Hero */}

      <div className="confirmed-hero">

        <div>

          <h1>

            Confirmed Challans

          </h1>

          <p>

            View all successfully confirmed challans.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900"

          className="hero-image"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* Statistics */}

      <div className="confirmed-stats">

        <div className="confirmed-card">

          <FaClipboardCheck />

          <h3>Total Confirmed</h3>

          <h2>{confirmedChallans.length}</h2>

        </div>

      </div>

      {/* Table */}

      <div className="confirmed-table">

        {

          loading ?

          <h3 className="text-white">

            Loading...

          </h3>

          :

          <table className="table table-hover">

            <thead>

              <tr>

                <th>Challan No</th>

                <th>Customer</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {

                confirmedChallans.length === 0 ?

                <tr>

                  <td colSpan={3} className="text-center">

                    No Confirmed Challans Found

                  </td>

                </tr>

                :

                confirmedChallans.map((c) => (

                  <tr key={c.id}>

                    <td>{c.challan_number}</td>

                    <td>{c.customer_name || "Unknown"}</td>

                    <td>

                      <span className="badge bg-success">

                        <FaCheckCircle className="me-1" />

                        Confirmed

                      </span>

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        }

      </div>

    </motion.div>

  );

}
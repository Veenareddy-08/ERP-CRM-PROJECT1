import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaFileInvoice,
  FaClipboardList
} from "react-icons/fa";

import API from "../../api/axios";

import "../../styles/draftchallans.css";

type Challan = {
  id: number;
  challan_number: string;
  customer_name?: string;
  status: string;
};

export default function DraftChallans() {

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

  const draftChallans = challans.filter(
    (c) => c.status === "DRAFT"
  );

  return (

    <motion.div

      className="draft-page"

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

      <div className="draft-hero">

        <div>

          <h1>

            Draft Challans

          </h1>

          <p>

            View all saved draft challans before confirmation.

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

      <div className="draft-stats">

        <div className="draft-card">

          <FaClipboardList />

          <h3>Total Drafts</h3>

          <h2>{draftChallans.length}</h2>

        </div>

      </div>

      {/* Table */}

      <div className="draft-table">

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

                draftChallans.length === 0 ?

                <tr>

                  <td colSpan={3} className="text-center">

                    No Draft Challans Found

                  </td>

                </tr>

                :

                draftChallans.map((c) => (

                  <tr key={c.id}>

                    <td>{c.challan_number}</td>

                    <td>{c.customer_name || "Unknown"}</td>

                    <td>

                      <span className="badge bg-warning text-dark">

                        <FaFileInvoice className="me-1"/>

                        Draft

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
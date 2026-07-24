import { motion } from "framer-motion";

import {
  FaUsers,
  FaBox,
  FaRupeeSign,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";

import StatCard from "../../components/widges/StatCard";
import RecentCustomers from "../../components/widges/RecentCustomers";
import LowStockWidget from "../../components/widges/LowStockWidget";

import SalesChart from "../../components/charts/SalesChart";
import RevenueChart from "../../components/charts/RevenueChart";
import InventoryChart from "../../components/charts/InventoryChart";

import "../../styles/dashboard.css";

export default function Dashboard() {

  return (

    <motion.div
      className="dashboard"

      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:.8 }}
    >

      {/* HERO */}

      <div className="hero">

        <div>

          <h1>🚀 ERP CRM Dashboard</h1>

          <p>

            Welcome Back 👋

            Manage Products, Customers,

            Inventory and Sales

            from one place.

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"

          className="hero-image"

          animate={{
            y:[0,-15,0]
          }}

          transition={{
            duration:3,
            repeat:Infinity
          }}

        />

      </div>

      {/* KPI */}

      <div className="stats">

        <StatCard
          title="Customers"
          value="250"
          icon={FaUsers}
        />

        <StatCard
          title="Products"
          value="120"
          icon={FaBox}
        />

        <StatCard
          title="Revenue"
          value="₹50,000"
          icon={FaRupeeSign}
        />

        <StatCard
          title="Pending"
          value="35"
          icon={FaTruck}
        />

      </div>

      {/* CHARTS */}

      <div className="charts">

        <div className="chart-box">

          <h3>

            <FaChartLine />

            Sales

          </h3>

          <SalesChart/>

        </div>

        <div className="chart-box">

          <h3>

            Revenue

          </h3>

          <RevenueChart/>

        </div>

        <div className="chart-box">

          <h3>

            Inventory

          </h3>

          <InventoryChart/>

        </div>

      </div>

      {/* WIDGETS */}

      <div className="widgets">

        <RecentCustomers/>

        <LowStockWidget/>

      </div>

    </motion.div>

  );

}
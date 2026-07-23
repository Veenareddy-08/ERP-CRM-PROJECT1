
import { motion } from "framer-motion";

import {
  FaUsers,
  FaBox,
  FaRupeeSign,
  FaTruck
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

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.6 }}

    >

      <motion.h1

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.2 }}

      >

        🚀 ERP Dashboard

      </motion.h1>
      <img
    src="/dashboard.jpg"
    alt="Dashboard"
    style={{
        width:"300px",
        borderRadius:"20px",
        margin:"20px 0"
    }}
/>


      {/* Statistics Cards */}

      <div className="stats">

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >

          <StatCard
            title="Total Customers"
            value="250"
            icon={FaUsers}
          />

        </motion.div>


        <motion.div
          whileHover={{ scale: 1.05 }}
        >

          <StatCard
            title="Total Products"
            value="120"
            icon={FaBox}
          />

        </motion.div>


        <motion.div
          whileHover={{ scale: 1.05 }}
        >

          <StatCard
            title="Today's Sales"
            value="₹50,000"
            icon={FaRupeeSign}
          />

        </motion.div>


        <motion.div
          whileHover={{ scale: 1.05 }}
        >

          <StatCard
            title="Pending Challans"
            value="35"
            icon={FaTruck}
          />

        </motion.div>

      </div>



      {/* Charts */}

      <motion.div

        className="charts"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.5 }}

      >

        <div className="chart-box">
          <SalesChart />
        </div>

        <div className="chart-box">
          <RevenueChart />
        </div>

        <div className="chart-box">
          <InventoryChart />
        </div>

      </motion.div>



      {/* Widgets */}

      <motion.div

        className="widgets"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.8 }}

      >

        <RecentCustomers />

        <LowStockWidget />

      </motion.div>

    </motion.div>

  );
  <img

src={dashboardImg}

style={{

width:"300px",
borderRadius:"20px"

}}

/>

}
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaChartLine,
  FaUsers,
  FaBoxes,
  FaFileInvoiceDollar,
  FaMoneyBillWave
} from "react-icons/fa";

import API from "../../api/axios";

import "../../styles/reports.css";

export default function Reports() {

  const [stats, setStats] = useState({

    sales: 0,
    challans: 0,
    customers: 0,
    products: 0

  });

  const [monthlySales, setMonthlySales] = useState<any[]>([]);

  useEffect(() => {

    const fetchReports = async () => {

      try {

        const productsResponse = await API.get("/products");
        const customersResponse = await API.get("/customers");
        const challansResponse = await API.get("/challans");

        const products = productsResponse.data;
        const customers = customersResponse.data;
        const challans = challansResponse.data;

        const confirmed = challans.filter(

          (c: any) => c.status === "CONFIRMED"

        );

        const totalSales = confirmed.reduce(

          (sum: any, c: any) =>

            sum + Number(c.total_amount || 0),

          0

        );

        setStats({

          sales: totalSales,
          challans: challans.length,
          customers: customers.length,
          products: products.length

        });

      } catch (error) {

        console.log(error);

      }

    };

    fetchReports();

  }, []);

  return (

    <motion.div

      className="reports-page"

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

    >

      {/* HERO */}

      <div className="reports-hero">

        <div>

          <h1>

            Reports Dashboard

          </h1>

          <p>

            Sales • Customers • Products • Challans Analytics

          </p>

        </div>

        <motion.img

          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"

          className="reports-image"

          animate={{ y: [0, -15, 0] }}

          transition={{

            repeat: Infinity,

            duration: 3

          }}

        />

      </div>

      {/* STATS */}

      <div className="reports-stats">

        <div className="report-card">

          <FaMoneyBillWave />

          <h3>Total Sales</h3>

          <h2>₹{stats.sales}</h2>

        </div>

        <div className="report-card">

          <FaFileInvoiceDollar />

          <h3>Total Challans</h3>

          <h2>{stats.challans}</h2>

        </div>

        <div className="report-card">

          <FaUsers />

          <h3>Customers</h3>

          <h2>{stats.customers}</h2>

        </div>

        <div className="report-card">

          <FaBoxes />

          <h3>Products</h3>

          <h2>{stats.products}</h2>

        </div>

      </div>

      {/* MONTHLY SALES */}

      <div className="report-table">

        <h3>

          <FaChartLine />

          Monthly Sales

        </h3>

        <table className="table table-hover">

          <thead>

            <tr>

              <th>Month</th>

              <th>Sales</th>

            </tr>

          </thead>

          <tbody>

            {

              monthlySales.length === 0 ?

              <tr>

                <td colSpan={2}>

                  No Sales Data Available

                </td>

              </tr>

              :

              monthlySales.map((item, index) => (

                <tr key={index}>

                  <td>{item.month}</td>

                  <td>₹{item.sales}</td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </motion.div>

  );

}
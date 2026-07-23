import pool from "../config/db";
import { Customer } from "../models/customermodel";

export const getCustomers = async () => {
  const [rows] = await pool.query("SELECT * FROM customers");
  return rows;
};

export const addCustomer = async (customer: Customer) => {

  const sql = `
  INSERT INTO customers
  (name,email,phone,company,gst,address,city,state,pincode)
  VALUES (?,?,?,?,?,?,?,?,?)
  `;

  const values = [
    customer.name,
    customer.email,
    customer.phone,
    customer.company,
    customer.gst,
    customer.address,
    customer.city,
    customer.state,
    customer.pincode
  ];

  const [result] = await pool.query(sql, values);

  return result;
};
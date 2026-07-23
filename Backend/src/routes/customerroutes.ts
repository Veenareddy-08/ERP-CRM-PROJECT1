import express from "express";
import {
  getAllCustomers,
  createCustomer
} from "../controllers/customercontroler";
import { Routes } from "react-router-dom";

const router = express.Router();

router.get("/", getAllCustomers);

router.post("/", createCustomer);

export default router;
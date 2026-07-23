import express from "express";

import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct
} from "../controllers/productcontrolers";

const router = express.Router();

// Get all products
router.get("/", getAllProducts);

// Get product by ID
router.get("/:id", getProductById);

// Add product
router.post("/", createProduct);

// Update product
router.put("/:id", updateProduct);

export default router;
import { Request, Response } from "express";
import * as productService from "../services/productservices";

export const getAllProducts = async (
req: Request,
res: Response
) => {

    const products = await productService.getProducts();

    res.json(products);

};

export const createProduct = async (
req: Request,
res: Response
) => {

    const result = await productService.addProduct(req.body);

    res.status(201).json({
        message: "Product Added Successfully",
        result
    });

};

// ✅ ADD THIS (don't replace anything above)

export const getProductById = async (
req: Request,
res: Response
) => {

    const product = await productService.getProductById(
        Number(req.params.id)
    );

    res.json(product);

};

export const updateProduct = async (
req: Request,
res: Response
) => {

    const result = await productService.updateProduct(
        Number(req.params.id),
        req.body
    );

    res.json({
        message: "Product Updated Successfully",
        result
    });

};
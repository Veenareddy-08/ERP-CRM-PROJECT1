import pool from "../config/db";
import { Product } from "../models/productmodels";

export const getProducts = async () => {

    const [rows] = await pool.query(
        "SELECT * FROM products"
    );

    return rows;
};

export const addProduct = async (product: Product) => {

    const sql = `
    INSERT INTO products
    (name,sku,category,price,stock,minStock,location)
    VALUES(?,?,?,?,?,?,?)
    `;

    const values = [
        product.name,
        product.sku,
        product.category,
        product.price,
        product.stock,
        product.minStock,
        product.location
    ];

    const [result] = await pool.query(sql, values);

    return result;

};

// ✅ NEW
export const getProductById = async (id: number) => {

    const [rows]: any = await pool.query(

        "SELECT * FROM products WHERE id=?",

        [id]

    );

    return rows[0];

};

// ✅ NEW
export const updateProduct = async (
    id: number,
    product: Product
) => {

    const sql = `
    UPDATE products
    SET
    name=?,
    sku=?,
    category=?,
    price=?,
    stock=?,
    minStock=?,
    location=?
    WHERE id=?
    `;

    const values = [
        product.name,
        product.sku,
        product.category,
        product.price,
        product.stock,
        product.minStock,
        product.location,
        id
    ];

    const [result] = await pool.query(sql, values);

    return result;

};
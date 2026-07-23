import pool from "../config/db";


export const addStock = async(data:any)=>{

    await pool.query(
        "UPDATE products SET stock = stock + ? WHERE id=?",
        [data.quantity,data.product_id]
    );


    const [result]=await pool.query(
        `INSERT INTO inventory
        (product_id,quantity,movement_type,reason,created_by)
        VALUES(?,?,?,?,?)`,
        [
            data.product_id,
            data.quantity,
            "IN",
            data.reason,
            data.created_by
        ]
    );


    return result;

};



export const removeStock = async(data:any)=>{


    const [rows]: any = await pool.query(
    "SELECT stock FROM products WHERE id=?",
    [data.product_id]
);


    await pool.query(
        "UPDATE products SET stock = stock - ? WHERE id=?",
        [data.quantity,data.product_id]
    );


    const [result]=await pool.query(
        `INSERT INTO inventory
        (product_id,quantity,movement_type,reason,created_by)
        VALUES(?,?,?,?,?)`,
        [
            data.product_id,
            data.quantity,
            "OUT",
            data.reason,
            data.created_by
        ]
    );


    return result;

};
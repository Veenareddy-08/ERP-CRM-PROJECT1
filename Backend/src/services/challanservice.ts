import pool from "../config/db";


// Create Challan
export const createChallan = async(data:any)=>{

    const challanNumber = "CH-" + Date.now();

    const [result]: any = await pool.query(
        `INSERT INTO challans
        (challan_number, challan_no, customer_name, customer_id, status)
        VALUES(?,?,?,?,?)`,
        [
            challanNumber,
            challanNumber,
            data.customer_name,
            data.customer_id,
            "DRAFT"
        ]
    );

    return {
        id: result.insertId,
        challanNumber
    };

};



// Get All Challans
export const getChallans = async()=>{

    const [rows] = await pool.query(
        "SELECT * FROM challans"
    );

    return rows;

};



// Add Product Item to Challan
export const addItem = async(
    challanId:number,
    data:any
)=>{

    // Get product price
    const [product]:any = await pool.query(
        "SELECT price FROM products WHERE id=?",
        [data.product_id]
    );


    if(product.length === 0){
        throw new Error("Product not found");
    }


    const price = product[0].price;

    const subtotal = price * data.quantity;



    // Insert item
    const [result]:any = await pool.query(
        `INSERT INTO challan_items
        (challan_id, product_id, quantity, price, subtotal)
        VALUES(?,?,?,?,?)`,
        [
            challanId,
            data.product_id,
            data.quantity,
            price,
            subtotal
        ]
    );



    // Update challan total
    await pool.query(
        `UPDATE challans
         SET total_amount = total_amount + ?
         WHERE id=?`,
        [
            subtotal,
            challanId
        ]
    );


    return {
        id: result.insertId,
        challanId,
        product_id:data.product_id,
        quantity:data.quantity,
        price,
        subtotal
    };

};




// Confirm Challan + Reduce Stock
export const confirmChallan = async(id:number)=>{


    // Get items
    const [items]:any = await pool.query(
        "SELECT product_id, quantity FROM challan_items WHERE challan_id=?",
        [id]
    );


    if(items.length === 0){
        throw new Error("No items found in challan");
    }



    // Check stock
    for(const item of items){

        const [product]:any = await pool.query(
            "SELECT stock FROM products WHERE id=?",
            [item.product_id]
        );


        if(product.length === 0){
            throw new Error("Product not found");
        }


        if(product[0].stock < item.quantity){
            throw new Error("Insufficient Stock");
        }

    }



    // Reduce stock
    for(const item of items){

        await pool.query(
            `UPDATE products
             SET stock = stock - ?
             WHERE id=?`,
            [
                item.quantity,
                item.product_id
            ]
        );

    }



    // Confirm challan
    await pool.query(
        "UPDATE challans SET status='CONFIRMED' WHERE id=?",
        [id]
    );


    return {
        challan_id:id,
        status:"CONFIRMED"
    };

};
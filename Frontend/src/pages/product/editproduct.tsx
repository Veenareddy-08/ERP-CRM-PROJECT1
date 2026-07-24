import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
FaBoxOpen,
FaBarcode,
FaTags,
FaRupeeSign,
FaWarehouse,
FaMapMarkerAlt
} from "react-icons/fa";

import API from "../../api/axios";


export default function EditProduct(){

const navigate=useNavigate();

const {id}=useParams();

const [product,setProduct]=useState({

name:"",
sku:"",
category:"",
price:"",
stock:"",
minStock:"",
location:""

});

useEffect(()=>{

const fetchProduct=async()=>{

try{

const response=await API.get(`/products/${id}`);

setProduct({

name:response.data.name||"",
sku:response.data.sku||"",
category:response.data.category||"",
price:String(response.data.price||""),
stock:String(response.data.stock||""),
minStock:String(response.data.minStock||""),
location:response.data.location||""

});

}

catch(err){

console.log(err);

}

};

fetchProduct();

},[id]);

function handleChange(field:string,value:string){

setProduct({

...product,

[field]:value

});

}

async function updateProduct(){

try{

await API.put(`/products/${id}`,{

...product,

price:Number(product.price),
stock:Number(product.stock),
minStock:Number(product.minStock)

});

alert("Product Updated Successfully");

navigate("/products");

}

catch(err){

console.log(err);

alert("Update Failed");

}

}

return(

<div className="edit-product-page">

<div className="overlay">

<div className="left-panel">

<motion.img

src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"

className="product-image"

animate={{y:[0,-15,0]}}

transition={{

repeat:Infinity,

duration:3

}}

/>

<h1>Edit Product</h1>

<p>

Update inventory information

Manage warehouse stock

Modify pricing

Track inventory efficiently

</p>

</div>

<div className="right-panel">

<motion.div

className="edit-card"

initial={{x:100,opacity:0}}

animate={{x:0,opacity:1}}

>

<h2>

<FaBoxOpen/>

Update Product

</h2>

<div className="grid">

<div className="input-box">

<FaBoxOpen/>

<input

placeholder="Product Name"

value={product.name}

onChange={(e)=>handleChange("name",e.target.value)}

/>

</div>

<div className="input-box">

<FaBarcode/>

<input

placeholder="SKU"

value={product.sku}

onChange={(e)=>handleChange("sku",e.target.value)}

/>

</div>

<div className="input-box">

<FaTags/>

<input

placeholder="Category"

value={product.category}

onChange={(e)=>handleChange("category",e.target.value)}

/>

</div>

<div className="input-box">

<FaRupeeSign/>

<input

type="number"

placeholder="Price"

value={product.price}

onChange={(e)=>handleChange("price",e.target.value)}

/>

</div>

<div className="input-box">

<FaWarehouse/>

<input

type="number"

placeholder="Stock"

value={product.stock}

onChange={(e)=>handleChange("stock",e.target.value)}

/>

</div>

<div className="input-box">

<FaWarehouse/>

<input

type="number"

placeholder="Minimum Stock"

value={product.minStock}

onChange={(e)=>handleChange("minStock",e.target.value)}

/>

</div>

<div className="input-box full">

<FaMapMarkerAlt/>

<input

placeholder="Warehouse Location"

value={product.location}

onChange={(e)=>handleChange("location",e.target.value)}

/>

</div>

</div>

<div className="buttons">

<button

className="update-btn"

onClick={updateProduct}

>

Update Product

</button>

<button

className="cancel-btn"

onClick={()=>navigate("/products")}

>

Cancel

</button>

</div>

</motion.div>

</div>

</div>

</div>

);

}
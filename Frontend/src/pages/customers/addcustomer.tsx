import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

import {
FaUserPlus,
FaUser,
FaPhone,
FaEnvelope,
FaBuilding,
FaIdCard,
FaStickyNote,
FaCalendarAlt
} from "react-icons/fa";

import "../../styles/addcustomer.css";

export default function AddCustomer(){

const navigate = useNavigate();

const [customer,setCustomer]=useState({

name:"",
mobile:"",
email:"",
businessName:"",
gstNumber:"",
customerType:"Wholesaler",
status:"Active",
followUpDate:"",
notes:""

});

function handleChange(field:string,value:string){

setCustomer({

...customer,

[field]:value

});

}

function saveCustomer(){

alert("Customer Added Successfully");

navigate("/customers");

}

return(

<div className="add-page">

<div className="overlay">

<div className="left-side">

<motion.img

src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"

className="erp-image"

animate={{y:[0,-15,0]}}

transition={{

repeat:Infinity,

duration:3

}}

/>

<h1>

Customer Registration

</h1>

<p>

Register new customers

Maintain business records

Track follow-ups

Generate reports

</p>

</div>

<div className="right-side">

<motion.div

className="form-card"

initial={{x:100,opacity:0}}

animate={{x:0,opacity:1}}

>
    <div className="top-bar">

  <button
    className="back-btn"
    onClick={() => navigate("/customers")}
  >
    <FaArrowLeft /> Back
  </button>

</div>

<h2>

<FaUserPlus/>

Add Customer

</h2>

<div className="grid">

<div className="input-box">

<FaUser/>

<input

placeholder="Customer Name"

value={customer.name}

onChange={(e)=>handleChange("name",e.target.value)}

/>

</div>

<div className="input-box">

<FaPhone/>

<input

placeholder="Mobile"

value={customer.mobile}

onChange={(e)=>handleChange("mobile",e.target.value)}

/>

</div>

<div className="input-box">

<FaEnvelope/>

<input

placeholder="Email"

value={customer.email}

onChange={(e)=>handleChange("email",e.target.value)}

/>

</div>

<div className="input-box">

<FaBuilding/>

<input

placeholder="Business Name"

value={customer.businessName}

onChange={(e)=>handleChange("businessName",e.target.value)}

/>

</div>

<div className="input-box">

<FaIdCard/>

<input

placeholder="GST Number"

value={customer.gstNumber}

onChange={(e)=>handleChange("gstNumber",e.target.value)}

/>

</div>

<select

value={customer.customerType}

onChange={(e)=>handleChange("customerType",e.target.value)}

>

<option>Wholesaler</option>

<option>Retailer</option>

<option>Distributor</option>

<option>Corporate</option>

</select>

<select

value={customer.status}

onChange={(e)=>handleChange("status",e.target.value)}

>

<option>Active</option>

<option>Inactive</option>

<option>Lead</option>

<option>Follow Up</option>

</select>

<div className="input-box">

<FaCalendarAlt/>

<input

type="date"

value={customer.followUpDate}

onChange={(e)=>handleChange("followUpDate",e.target.value)}

/>

</div>

<textarea

placeholder="Customer Notes"

value={customer.notes}

onChange={(e)=>handleChange("notes",e.target.value)}

/>

<div className="buttons">

<button

className="save-btn"

onClick={saveCustomer}

>

Save Customer

</button>

<button

className="cancel-btn"

onClick={()=>navigate("/customers")}

>

Cancel

</button>

</div>

</div>

</motion.div>

</div>

</div>

</div>

);

}
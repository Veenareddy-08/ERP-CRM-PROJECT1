import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";


import Input from "../../components/common/input";


export default function AddCustomer(){

const navigate = useNavigate();


const [customer,setCustomer] = useState({

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



function handleChange(
field:string,
value:string
){

setCustomer({

...customer,

[field]:value

});

}



function saveCustomer(){

console.log(customer);

alert("Customer Added Successfully");

navigate("/customers");

}



return(

<div className="dashboard">


<div className="form-card">


<h1>
Add Customer
</h1>



<Input

label="Customer Name"

value={customer.name}

onChange={(e)=>
handleChange(
"name",
e.target.value
)
}

/>



<Input

label="Mobile Number"

value={customer.mobile}

onChange={(e)=>
handleChange(
"mobile",
e.target.value
)
}

/>



<Input

label="Email"

value={customer.email}

onChange={(e)=>
handleChange(
"email",
e.target.value
)
}

/>



<Input

label="Business Name"

value={customer.businessName}

onChange={(e)=>
handleChange(
"businessName",
e.target.value
)
}

/>



<Input

label="GST Number"

value={customer.gstNumber}

onChange={(e)=>
handleChange(
"gstNumber",
e.target.value
)
}

/>



<div className="input-field">

<label>
Customer Type
</label>


<select

value={customer.customerType}

onChange={(e)=>
handleChange(
"customerType",
e.target.value
)
}

>

<option>
Wholesaler
</option>

<option>
Retailer
</option>

<option>
Distributor
</option>

<option>
Dealer
</option>

<option>
Corporate
</option>


</select>


</div>





<div className="input-field">

<label>
Status
</label>


<select

value={customer.status}

onChange={(e)=>
handleChange(
"status",
e.target.value
)
}

>

<option>
Active
</option>

<option>
Inactive
</option>

<option>
Follow Up
</option>

<option>
Lead
</option>

<option>
Converted
</option>


</select>


</div>





<div className="input-field">

<label>
Follow Up Date
</label>


<input

type="date"

value={customer.followUpDate}

onChange={(e)=>
handleChange(
"followUpDate",
e.target.value
)
}

/>


</div>





<div className="input-field">

<label>
Notes
</label>


<textarea

value={customer.notes}

onChange={(e)=>
handleChange(
"notes",
e.target.value
)
}

/>


</div>





<button

className="btn"

onClick={saveCustomer}

>

Save Customer

</button>



</div>


</div>


)

}
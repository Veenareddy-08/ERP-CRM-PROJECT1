import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

import Input from "../../components/common/input";


export default function EditCustomer(){

const navigate = useNavigate();


const [customer,setCustomer]=useState({

name:"Ravi Traders",
phone:"9876543210",
email:"ravi@gmail.com",
city:"Hyderabad",
address:"Hyderabad Main Road"

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



function updateCustomer(){

console.log(customer);

alert("Customer Updated Successfully");

navigate("/customers");

}



return(

<div className="dashboard">


<div className="form-card">


<h1>
Edit Customer
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

label="Phone Number"

value={customer.phone}

onChange={(e)=>
handleChange(
"phone",
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

label="City"

value={customer.city}

onChange={(e)=>
handleChange(
"city",
e.target.value
)
}

/>



<Input

label="Address"

value={customer.address}

onChange={(e)=>
handleChange(
"address",
e.target.value
)
}

/>



<button

className="btn"

onClick={updateCustomer}

>

Update Customer

</button>


</div>


</div>

)

}
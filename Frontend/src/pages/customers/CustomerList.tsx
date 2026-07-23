import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

import SearchBar from "../../components/common/searchbar";



export default function CustomerList(){

const navigate = useNavigate();

const [search,setSearch] = useState("");

const [customers,setCustomers] = useState<any[]>([]);


// Fetch customers from backend
useEffect(()=>{

    const fetchCustomers = async()=>{

        try{

            const response = await API.get("/customers");

            setCustomers(response.data);

        }
        catch(error){

            console.log(error);

        }

    };


    fetchCustomers();

},[]);



// Delete customer (frontend only)
function deleteCustomer(id:number){

    setCustomers(
        customers.filter(
            customer=>customer.id !== id
        )
    );

}



// Search filter
const filtered = customers.filter(customer =>

    customer.name?.toLowerCase()
    .includes(search.toLowerCase())

    ||

    customer.company?.toLowerCase()
    .includes(search.toLowerCase())

);



return(

<div className="dashboard">


<div className="page-header">

<h1>
Customers
</h1>


<button

className="btn"

onClick={()=>navigate("/customers/add")}

>

+ Add Customer

</button>


</div>



<SearchBar

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>




<table>


<thead>

<tr>

<th>Name</th>

<th>Mobile</th>

<th>Email</th>

<th>Business</th>

<th>GST Number</th>

<th>Actions</th>


</tr>

</thead>



<tbody>


{

filtered.map(customer=>(


<tr key={customer.id}>


<td>
{customer.name}
</td>


<td>
{customer.phone}
</td>


<td>
{customer.email}
</td>


<td>
{customer.company}
</td>


<td>
{customer.gst}
</td>



<td>


<button

className="view-btn"

onClick={()=>navigate("/customers/details")}

>

View

</button>




<button

className="edit-btn"

onClick={()=>navigate("/customers/edit")}

>

Edit

</button>




<button

className="delete-btn"

onClick={()=>deleteCustomer(customer.id)}

>

Delete

</button>


</td>



</tr>


))


}



</tbody>


</table>



</div>


);

}
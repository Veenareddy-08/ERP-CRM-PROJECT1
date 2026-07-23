import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import "../../styles/login.css";


export default function Login(){

const navigate = useNavigate();

const [show,setShow]=useState(false);


return(

<div className="login-container">


<div className="login-card">


<h1>
Mini ERP + CRM
</h1>


<p>
Wholesale Management Portal
</p>


<div className="input-group">

<FaUser/>

<input
type="text"
placeholder="Username"
/>

</div>



<div className="input-group">

<FaLock/>

<input
type={show ? "text":"password"}
placeholder="Password"
/>


<span
onClick={()=>setShow(!show)}
>

{
show ?
<FaEyeSlash/>
:
<FaEye/>
}

</span>


</div>



<select>

<option>
Admin
</option>

<option>
Sales
</option>

<option>
Warehouse
</option>

<option>
Accounts
</option>

</select>



<button
onClick={()=>navigate("/dashboard")}
>

LOGIN

</button>


</div>


</div>

)

}
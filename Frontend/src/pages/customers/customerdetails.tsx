import { useState } from "react";
import API from "../../api/axios";



export default function CustomerDetails(){


const [open,setOpen]=useState(true);



if(!open)
return null;



return(

<div className="modal-overlay">


<div className="modal">


<h2>
Customer Details
</h2>


<p>
Name : Ravi Traders
</p>


<p>
Phone : 9876543210
</p>


<p>
Email : ravi@gmail.com
</p>


<p>
City : Hyderabad
</p>


<button

className="btn"

onClick={()=>setOpen(false)}

>

Close

</button>


</div>


</div>


)

}
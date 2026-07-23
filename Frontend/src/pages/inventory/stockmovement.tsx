import { useState } from "react";

export default function StockMovement(){


const [movements, setMovements] = useState([

{
id:1,
product:"Rice Bag",
quantity:50,
type:"IN",
reason:"Purchase",
createdBy:"Admin",
time:"22-07-2026 10:30 AM"
},


{
id:2,
product:"Cooking Oil",
quantity:5,
type:"OUT",
reason:"Customer Sale",
createdBy:"Admin",
time:"22-07-2026 11:00 AM"
},


{
id:3,
product:"Sugar",
quantity:20,
type:"IN",
reason:"Supplier Delivery",
createdBy:"Manager",
time:"22-07-2026 12:00 PM"
}

]);



function addMovement(
product:string,
quantity:number,
type:"IN"|"OUT"
){


const newMovement={

id: movements.length + 1,

product,

quantity,

type,

reason:"Manual Update",

createdBy:"Admin",

time:new Date().toLocaleString()

};


setMovements([

...movements,

newMovement

]);


}



return(

<div className="page-container">


<div className="table-container">


<h2>
Stock Movement Log
</h2>



<div style={{marginBottom:"20px"}}>


<button

className="save-btn"

onClick={()=>addMovement(
"Rice Bag",
10,
"IN"
)}

>

Rice +10

</button>



<button

className="cancel-btn"

style={{marginLeft:"10px"}}

onClick={()=>addMovement(
"Rice Bag",
5,
"OUT"
)}

>

Rice -5

</button>


</div>





<table>


<thead>

<tr>

<th>
Product
</th>

<th>
Quantity Changed
</th>

<th>
Movement Type
</th>

<th>
Reason
</th>

<th>
Created By
</th>

<th>
Timestamp
</th>


</tr>

</thead>



<tbody>


{

movements.map((item)=>(


<tr key={item.id}>


<td>
{item.product}
</td>


<td>
{item.quantity}
</td>



<td>

{

item.type==="IN"

?

<span className="stock-in">
IN
</span>

:

<span className="stock-out">
OUT
</span>

}


</td>



<td>
{item.reason}
</td>


<td>
{item.createdBy}
</td>


<td>
{item.time}
</td>



</tr>


))


}



</tbody>



</table>



</div>


</div>


)

}
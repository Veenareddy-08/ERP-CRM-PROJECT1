export default function RecentCustomers(){

const customers=[
{
name:"Ravi Traders",
city:"Hyderabad"
},
{
name:"Sri Lakshmi Stores",
city:"Warangal"
},
{
name:"ABC Wholesale",
city:"Vijayawada"
}
];


return(

<div className="widget">

<h3>
Recent Customers
</h3>


<table>

<thead>

<tr>
<th>Name</th>
<th>City</th>
</tr>

</thead>


<tbody>

{
customers.map((c,index)=>(

<tr key={index}>

<td>{c.name}</td>

<td>{c.city}</td>

</tr>

))
}


</tbody>

</table>


</div>

)

}
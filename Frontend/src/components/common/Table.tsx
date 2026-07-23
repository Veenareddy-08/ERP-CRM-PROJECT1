interface Props{

data:any[];

}


export default function Table({data}:Props){


return(

<table>

<thead>

<tr>

<th>Name</th>

<th>Phone</th>

<th>Email</th>

<th>City</th>

</tr>

</thead>


<tbody>


{
data.map((customer)=>(


<tr key={customer.id}>


<td>{customer.name}</td>

<td>{customer.phone}</td>

<td>{customer.email}</td>

<td>{customer.city}</td>


</tr>


))
}


</tbody>


</table>


)

}
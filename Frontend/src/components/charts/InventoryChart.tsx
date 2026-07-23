import {
PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[

{
name:"Available",
value:70
},

{
name:"Low Stock",
value:30
}

];


export default function InventoryChart(){

return(

<div className="chart">

<h3>
Inventory Status
</h3>


<ResponsiveContainer width="100%" height={250}>


<PieChart>


<Pie
data={data}
dataKey="value"
outerRadius={90}
>

{
data.map((_,index)=>(

<Cell key={index}/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


)

}
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[

{
name:"Jan",
revenue:10000
},

{
name:"Feb",
revenue:15000
},

{
name:"Mar",
revenue:20000
}

];


export default function RevenueChart(){

return(

<div className="chart">

<h3>
Revenue
</h3>


<ResponsiveContainer width="100%" height={250}>


<BarChart data={data}>


<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>


<Bar
dataKey="revenue"
fill="#16a34a"
/>


</BarChart>


</ResponsiveContainer>


</div>

)

}
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
}
from "recharts";


const data=[
{
month:"Jan",
sales:4000
},
{
month:"Feb",
sales:6000
},
{
month:"Mar",
sales:8000
},
{
month:"Apr",
sales:5000
}
];


export default function SalesChart(){


return(

<div className="chart">

<h3>
Sales Overview
</h3>


<ResponsiveContainer width="100%" height={250}>

<LineChart data={data}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line 
dataKey="sales"
stroke="#2563eb"
/>

</LineChart>


</ResponsiveContainer>


</div>

)

}
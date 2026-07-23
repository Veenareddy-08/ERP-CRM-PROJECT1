export default function LowStockWidget(){


const products=[
"Rice Bags",
"Cooking Oil",
"Sugar"
];


return(

<div className="widget">


<h3>
Low Stock Alert
</h3>


<ul>

{
products.map((p,index)=>(

<li key={index}>
{p}
</li>

))
}

</ul>


</div>

)

}
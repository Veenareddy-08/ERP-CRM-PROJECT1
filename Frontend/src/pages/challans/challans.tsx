import { Link } from "react-router-dom";

export default function Challans(){

return(

<div className="page-container">


<div className="table-container">


<h2>
Challan Management
</h2>



<div className="stats-grid">


<div className="stat-card">

<h3>
Create Challan
</h3>

<Link to="/challans/create">

<button className="save-btn">

Create

</button>

</Link>

</div>




<div className="stat-card">

<h3>
Draft Challans
</h3>

<Link to="/challans/draft">

<button className="save-btn">

View Drafts

</button>

</Link>

</div>





<div className="stat-card">

<h3>
Confirmed Challans
</h3>

<Link to="/challans/confirmed">

<button className="save-btn">

View Confirmed

</button>

</Link>

</div>



</div>



</div>


</div>

)

}
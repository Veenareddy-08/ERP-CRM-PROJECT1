import { Link } from "react-router-dom";

import {
    FaHome,
    FaUsers,
    FaBox,
    FaWarehouse,
    FaFileInvoice,
    FaChartBar,
    FaCog
} from "react-icons/fa";


export default function Sidebar() {


return (

<div className="sidebar">


<h2>
ERP CRM
</h2>



<li>

<Link to="/dashboard">

<FaHome />

<span>
Dashboard
</span>

</Link>

</li>





<li>

<Link to="/customers">

<FaUsers />

<span>
Customers
</span>

</Link>

</li>





<li>

<Link to="/products">

<FaBox />

<span>
Products
</span>

</Link>

</li>





<li>

<Link to="/inventory">

<FaWarehouse />

<span>
Inventory
</span>

</Link>

</li>





<li>

<Link to="/challans">

<FaFileInvoice />

<span>
Challans
</span>

</Link>

</li>





<li>

<Link to="/reports">

<FaChartBar />

<span>
Reports
</span>

</Link>

</li>





<li>

<Link to="/settings">

<FaCog />

<span>
Settings
</span>

</Link>

</li>




</div>

);

}
import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";
import Navbar from "./navbar";


export default function DashboardLayout(){

return(

<div className="layout">


<Sidebar/>


<div className="main">


<Navbar/>


<Outlet/>


</div>


</div>

)

}
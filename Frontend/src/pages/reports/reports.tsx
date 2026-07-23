import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Reports() {


    const [stats,setStats] = useState({

        sales:0,
        challans:0,
        customers:0,
        products:0

    });



    const [monthlySales,setMonthlySales] = useState<any[]>([]);



    useEffect(()=>{


        const fetchReports = async()=>{


            try{


                const productsResponse = await API.get("/products");

                const customersResponse = await API.get("/customers");

                const challansResponse = await API.get("/challans");



                const products = productsResponse.data;

                const customers = customersResponse.data;

                const challans = challansResponse.data;



                // Calculate total sales from confirmed challans

                const confirmed = challans.filter(

                    (c:any)=>
                    c.status === "CONFIRMED"

                );



                const totalSales = confirmed.reduce(

                    (sum:any,c:any)=>

                    sum + Number(c.total_amount || 0),

                    0

                );



                setStats({

                    sales: totalSales,

                    challans: challans.length,

                    customers: customers.length,

                    products: products.length

                });



            }
            catch(error){


                console.log(error);


            }


        };



        fetchReports();



    },[]);





    return(


    <div className="page-container">


        <h2>
            Reports Dashboard
        </h2>




        <div className="stats-grid">



            <div className="stat-card">

                <h3>
                    Total Sales
                </h3>

                <h1>
                    ₹{stats.sales}
                </h1>

            </div>





            <div className="stat-card">

                <h3>
                    Total Challans
                </h3>

                <h1>
                    {stats.challans}
                </h1>

            </div>





            <div className="stat-card">

                <h3>
                    Customers
                </h3>

                <h1>
                    {stats.customers}
                </h1>

            </div>





            <div className="stat-card">

                <h3>
                    Products
                </h3>

                <h1>
                    {stats.products}
                </h1>

            </div>




        </div>





        <br/>





        <div className="table-container">


            <h3>
                Monthly Sales
            </h3>



            <table>


            <thead>

            <tr>

                <th>
                    Month
                </th>


                <th>
                    Sales
                </th>


            </tr>


            </thead>




            <tbody>


            {

            monthlySales.length===0 ?


            <tr>

                <td colSpan={2}>
                    No Sales Data
                </td>

            </tr>



            :


            monthlySales.map((item,index)=>(


            <tr key={index}>

                <td>
                    {item.month}
                </td>


                <td>
                    ₹{item.sales}
                </td>


            </tr>


            ))


            }



            </tbody>



            </table>



        </div>



    </div>


    );


}
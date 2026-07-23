import { useEffect, useState } from "react";
import API from "../../api/axios";


type Challan = {

    id:number;
    challan_number:string;
    customer_name?:string;
    status:string;

};



export default function ConfirmedChallans(){


    const [challans,setChallans] = useState<Challan[]>([]);


    const [loading,setLoading] = useState(true);



    useEffect(()=>{


        const fetchChallans = async()=>{


            try{


                const response = await API.get("/challans");


                setChallans(response.data);


            }
            catch(error){


                console.log(error);


            }
            finally{


                setLoading(false);


            }


        };


        fetchChallans();


    },[]);





    const confirmedChallans = challans.filter(

        (c)=>c.status === "CONFIRMED"

    );





    return(


        <div className="table-container">


            <h2>
                Confirmed Challans
            </h2>




            {

            loading ?


            <p>
                Loading...
            </p>


            :



            <table>


            <thead>


            <tr>


            <th>
                Challan No
            </th>


            <th>
                Customer
            </th>


            <th>
                Status
            </th>


            </tr>


            </thead>




            <tbody>



            {


            confirmedChallans.length === 0 ?


            <tr>

                <td colSpan={3}>

                    No Confirmed Challans Found

                </td>

            </tr>



            :



            confirmedChallans.map((c)=>(


            <tr key={c.id}>


                <td>
                    {c.challan_number}
                </td>


                <td>
                    {c.customer_name || "Unknown"}
                </td>


                <td>

                    <span className="stock-in">

                        {c.status}

                    </span>

                </td>


            </tr>


            ))



            }



            </tbody>



            </table>


            }



        </div>


    );


}
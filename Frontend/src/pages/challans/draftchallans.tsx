import { useEffect, useState } from "react";
import API from "../../api/axios";

type Challan = {
    id: number;
    challan_number: string;
    customer_name?: string;
    status: string;
};


export default function DraftChallans() {


    const [challans, setChallans] = useState<Challan[]>([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {


        const fetchChallans = async () => {


            try {


                const response = await API.get("/challans");


                setChallans(response.data);



            } catch(error) {


                console.log(error);


            }
            finally {


                setLoading(false);


            }


        };


        fetchChallans();


    }, []);




    const draftChallans = challans.filter(
        (c)=>c.status === "DRAFT"
    );



    return (

        <div className="table-container">


            <h2>
                Draft Challans
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


                    draftChallans.length === 0 ?


                    <tr>

                        <td colSpan={3}>

                            No Draft Challans Found

                        </td>

                    </tr>


                    :


                    draftChallans.map((c)=>(


                        <tr key={c.id}>


                            <td>
                                {c.challan_number}
                            </td>


                            <td>
                                {c.customer_name || "Unknown"}
                            </td>


                            <td>

                                <span className="stock-out">

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
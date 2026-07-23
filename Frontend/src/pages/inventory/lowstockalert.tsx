import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function LowStockAlert(){

    const [products, setProducts] = useState<any[]>([]);


    useEffect(()=>{

        const fetchProducts = async()=>{

            try{

                const response = await API.get("/products");

                const lowStockProducts = response.data.filter(
                    (product:any)=>
                    product.stock <= product.minStock
                );

                setProducts(lowStockProducts);

            }
            catch(error){

                console.log(error);

            }

        };


        fetchProducts();

    },[]);



    return(

        <div className="page-container">


            <div className="table-container">


                <h2>
                    Low Stock Alert
                </h2>



                <table>


                <thead>

                <tr>

                    <th>
                        Product
                    </th>

                    <th>
                        Current Stock
                    </th>

                    <th>
                        Minimum Required
                    </th>

                    <th>
                        Status
                    </th>

                </tr>

                </thead>



                <tbody>


                {


                products.map((item)=>(


                <tr key={item.id}>


                    <td>
                        {item.name}
                    </td>


                    <td>
                        {item.stock}
                    </td>


                    <td>
                        {item.minStock}
                    </td>


                    <td>

                        <span className="stock-out">
                            Reorder Required
                        </span>

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
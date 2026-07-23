import { useState, useEffect } from "react";
import API from "../../api/axios";

export default function Inventory() {

    const [search, setSearch] = useState("");

    const [products, setProducts] = useState<any[]>([]);


    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await API.get("/products");

                setProducts(response.data);

            }
            catch(error){

                console.log(error);

            }

        };


        fetchProducts();

    }, []);



    const filtered = products.filter((p)=>


        p.name
        .toLowerCase()
        .includes(search.toLowerCase())


    );



    return(

        <div className="page-container">


            <div className="table-container">


                <div className="page-header">

                    <h2>
                        Inventory Management
                    </h2>

                </div>



                <div
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginBottom:"20px"
                }}
                >


                <input

                placeholder="Search Product..."

                value={search}

                onChange={(e)=>
                    setSearch(e.target.value)
                }

                style={{
                    width:"300px",
                    padding:"10px"
                }}

                />



                <div>


                <button className="save-btn">

                    + Stock IN

                </button>



                <button

                className="cancel-btn"

                style={{
                    marginLeft:"10px"
                }}

                >

                    - Stock OUT

                </button>


                </div>


                </div>





                <table>


                <thead>

                <tr>

                <th>Product</th>

                <th>SKU</th>

                <th>Current Stock</th>

                <th>Minimum</th>

                <th>Warehouse</th>

                <th>Status</th>


                </tr>

                </thead>



                <tbody>


                {

                filtered.map((item)=>(


                <tr key={item.id}>


                <td>
                    {item.name}
                </td>


                <td>
                    {item.sku}
                </td>


                <td>
                    {item.stock}
                </td>


                <td>
                    {item.minStock}
                </td>


                <td>
                    {item.location}
                </td>



                <td>


                {

                item.stock <= item.minStock

                ?

                <span className="stock-out">
                    Low Stock
                </span>

                :

                <span className="stock-in">
                    Available
                </span>

                }


                </td>


                </tr>


                ))

                }


                </tbody>


                </table>


            </div>





            <br />





            <div className="table-container">


                <h2>
                    Low Stock Products
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
                    Required
                </th>

                </tr>


                </thead>



                <tbody>


                {


                products

                .filter(
                    (p)=>
                    p.stock <= p.minStock
                )


                .map((p)=>(


                <tr key={p.id}>


                <td>
                    {p.name}
                </td>


                <td>
                    {p.stock}
                </td>


                <td>
                    {p.minStock}
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
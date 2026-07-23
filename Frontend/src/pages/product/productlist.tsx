import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

export default function ProductList() {

    const navigate = useNavigate();

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await API.get("/products");

                setProducts(response.data);

            }
            catch (error) {

                console.log(error);

            }

        };

        fetchProducts();

    }, []);

    function deleteProduct(id: number) {

        setProducts(

            products.filter(
                (product) => product.id !== id
            )

        );

    }

    return (

        <div className="dashboard">

            <div className="page-header">

                <h1>
                    Products
                </h1>

                <button

                    className="btn"

                    onClick={() =>
                        navigate("/products/add")
                    }

                >

                    + Add Product

                </button>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Product Name</th>

                        <th>SKU</th>

                        <th>Category</th>

                        <th>Price</th>

                        <th>Current Stock</th>

                        <th>Warehouse</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        products.map(product => (

                            <tr key={product.id}>

                                <td>
                                    {product.name}
                                </td>

                                <td>
                                    {product.sku}
                                </td>

                                <td>
                                    {product.category}
                                </td>

                                <td>
                                    ₹{product.price}
                                </td>

                                <td>

                                    {

                                        product.stock <= product.minStock ?

                                            <span style={{ color: "red" }}>

                                                {product.stock} (Low Stock)

                                            </span>

                                            :

                                            product.stock

                                    }

                                </td>

                                <td>
                                    {product.location}
                                </td>

                                <td>

                                    <button

                                        className="edit-btn"

                                        onClick={() =>
                                            navigate("/products/edit")
                                        }

                                    >

                                        Edit

                                    </button>

                                    <button

                                        className="delete-btn"

                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

export default function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({

        name: "",
        sku: "",
        category: "",
        price: "",
        stock: "",
        minStock: "",
        location: ""

    });

    function handleChange(
        field: string,
        value: string
    ) {

        setProduct({

            ...product,

            [field]: value

        });

    }

    async function saveProduct() {

        try {

            await API.post("/products", {

                name: product.name,
                sku: product.sku,
                category: product.category,
                price: Number(product.price),
                stock: Number(product.stock),
                minStock: Number(product.minStock),
                location: product.location

            });

            alert("Product Added Successfully");

            navigate("/products");

        }
        catch (error) {

            console.log(error);

            alert("Failed to Add Product");

        }

    }

    return (

        <div className="dashboard">

            <div className="form-card">

                <h1>
                    Add Product
                </h1>

                <div className="input-field">

                    <label>
                        Product Name
                    </label>

                    <input

                        value={product.name}

                        onChange={(e) =>
                            handleChange("name", e.target.value)
                        }

                    />

                </div>

                <div className="input-field">

                    <label>
                        SKU Code
                    </label>

                    <input

                        value={product.sku}

                        onChange={(e) =>
                            handleChange("sku", e.target.value)
                        }

                    />

                </div>

                <div className="input-field">

                    <label>
                        Category
                    </label>

                    <input

                        value={product.category}

                        onChange={(e) =>
                            handleChange("category", e.target.value)
                        }

                    />

                </div>

                <div className="input-field">

                    <label>
                        Unit Price
                    </label>

                    <input

                        type="number"

                        value={product.price}

                        onChange={(e) =>
                            handleChange("price", e.target.value)
                        }

                    />

                </div>

                <div className="input-field">

                    <label>
                        Current Stock
                    </label>

                    <input

                        type="number"

                        value={product.stock}

                        onChange={(e) =>
                            handleChange("stock", e.target.value)
                        }

                    />

                </div>

                <div className="input-field">

                    <label>
                        Minimum Stock Alert Quantity
                    </label>

                    <input

                        type="number"

                        value={product.minStock}

                        onChange={(e) =>
                            handleChange("minStock", e.target.value)
                        }

                    />

                </div>

                <div className="input-field">

                    <label>
                        Warehouse Location
                    </label>

                    <input

                        value={product.location}

                        onChange={(e) =>
                            handleChange("location", e.target.value)
                        }

                    />

                </div>

                <button

                    className="btn"

                    onClick={saveProduct}

                >

                    Save Product

                </button>

            </div>

        </div>

    );

}
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../../styles/dashboard.css";
import API from "../../api/axios";

export default function EditProduct() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: "",
        sku: "",
        category: "",
        price: "",
        stock: "",
        minStock: "",
        location: ""
    });

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await API.get(`/products/${id}`);

                setProduct({
                    name: response.data.name || "",
                    sku: response.data.sku || "",
                    category: response.data.category || "",
                    price: String(response.data.price || ""),
                    stock: String(response.data.stock || ""),
                    minStock: String(response.data.minStock || ""),
                    location: response.data.location || ""
                });

            } catch (error) {

                console.log(error);
                alert("Failed to load product");

            }

        };

        fetchProduct();

    }, [id]);

    const handleChange = (field: string, value: string) => {

        setProduct({

            ...product,
            [field]: value

        });

    };

    const updateProduct = async () => {

        try {

            await API.put(`/products/${id}`, {

                name: product.name,
                sku: product.sku,
                category: product.category,
                price: Number(product.price),
                stock: Number(product.stock),
                minStock: Number(product.minStock),
                location: product.location

            });

            alert("Product Updated Successfully");

            navigate("/products");

        } catch (error) {

            console.log(error);
            alert("Failed to update product");

        }

    };

    return (

        <div className="page-container">

            <div className="form-container">

                <h2>Edit Product</h2>

                <div className="form-grid">

                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            value={product.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>SKU Code</label>
                        <input
                            value={product.sku}
                            onChange={(e) =>
                                handleChange("sku", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input
                            value={product.category}
                            onChange={(e) =>
                                handleChange("category", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Unit Price (₹)</label>
                        <input
                            type="number"
                            value={product.price}
                            onChange={(e) =>
                                handleChange("price", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Current Stock</label>
                        <input
                            type="number"
                            value={product.stock}
                            onChange={(e) =>
                                handleChange("stock", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Minimum Stock Alert</label>
                        <input
                            type="number"
                            value={product.minStock}
                            onChange={(e) =>
                                handleChange("minStock", e.target.value)
                            }
                        />
                    </div>

                    <div className="form-group full">
                        <label>Warehouse Location</label>
                        <input
                            value={product.location}
                            onChange={(e) =>
                                handleChange("location", e.target.value)
                            }
                        />
                    </div>

                </div>

                <div className="button-area">

                    <button
                        className="save-btn"
                        onClick={updateProduct}
                    >
                        Update Product
                    </button>

                    <button
                        className="cancel-btn"
                        onClick={() => navigate("/products")}
                    >
                        Cancel
                    </button>

                </div>

            </div>

        </div>

    );

}
import { Product } from "../types/Product";

export const products: Product[] = [

  {
    id: 1,
    name: "Rice Bag",
    sku: "RICE001",
    category: "Food",
    price: 1200,
    stock: 50,
    minStock: 10,
    location: "Hyderabad Warehouse"
  },

  {
    id: 2,
    name: "Cooking Oil",
    sku: "OIL001",
    category: "Grocery",
    price: 900,
    stock: 30,
    minStock: 10,
    location: "Warangal Warehouse"
  },

  {
    id: 3,
    name: "Sugar",
    sku: "SUGAR001",
    category: "Food",
    price: 500,
    stock: 8,
    minStock: 15,
    location: "Vijayawada Warehouse"
  }

];
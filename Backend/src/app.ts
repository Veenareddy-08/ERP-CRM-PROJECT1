import express from "express";
import cors from "cors";

import customerRoutes from "./routes/customerroutes";
import productRoutes from "./routes/productroutes";
import inventoryRoutes from "./routes/inventoryroutes";
import challanRoutes from "./routes/challanroutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mini ERP Backend Running Successfully"
  });
});


app.use("/customers", customerRoutes);

app.use("/products", productRoutes);

app.use("/inventory", inventoryRoutes);

app.use("/challans", challanRoutes);


export default app;
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import productModel from "./models/productModel.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import 'dotenv/config'

const app = express();

// Wrap database connection and cloudinary connection with error handling
const init = async () => {
  try {
    await connectDB();  // Assuming connectDB is an async function
    await connectCloudinary();  // Assuming connectCloudinary is an async function
  } catch (error) {
    console.error("Failed to connect to DB or Cloudinary:", error);
  }
};

init();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;  // Export the app so Vercel can handle it correctly.

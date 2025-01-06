import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";
import userRouter from "../routes/userRoute.js";
import productRouter from "../routes/productRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";

const app = express();

// Connect to database and cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Export for Vercel
export default app;

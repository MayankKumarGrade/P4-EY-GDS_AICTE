import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongu is connected");
  });

  await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`);
};

export default connectDB;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();

const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}));
app.use(express.static("public"));

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods: ["GET","POST","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"],
}))

app.use("/api/orders", orderRoutes);

connectDB();

app.listen(8000, () => {
    console.log("Server runnning on port 8000");
})


export default app;
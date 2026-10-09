import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/enquiries", enquiryRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Athang Enterprises Backend is running");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
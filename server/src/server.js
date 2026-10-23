<<<<<<< HEAD

=======
>>>>>>> aa599d7 (Save local changes)
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

const app = express();

<<<<<<< HEAD
const corsOptions = {
  origin: [
    "https://athangexim.com",
    "https://www.athangexim.com",
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

=======
app.use(cors());
app.use(express.json());

app.use("/api/enquiries", enquiryRoutes);

connectDB();

>>>>>>> aa599d7 (Save local changes)
app.get("/", (req, res) => {
  res.send("Athang Enterprises Backend is running");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working",
  });
});

<<<<<<< HEAD
app.use("/api/enquiries", enquiryRoutes);

connectDB();
=======
>>>>>>> aa599d7 (Save local changes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server running on port ${PORT}`);
});
=======
  console.log(`Server running on http://localhost:${PORT}`);
});
>>>>>>> aa599d7 (Save local changes)

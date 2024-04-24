import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileRoute from "./routes/file.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/files", fileRoute);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});

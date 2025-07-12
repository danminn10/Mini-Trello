import express from "express";
import dotenv from "dotenv";
import "@models/user.models"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

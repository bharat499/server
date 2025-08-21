import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
import createConnection from "./db/db.js";
dotenv.config(); 

const app = express();

app.use(cors({
   origin: "http://localhost:3000",
   credentials: true
}));
 
app.use(express.json());
await createConnection();
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});

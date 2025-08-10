import express from 'express';
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import serverless from 'serverless-http';

const app = express()

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();


app.use(cors());
// Middleware
app.use(express.json());

// Routes (example)
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

app.get('/',(req, res) => {
  res.status(200).json({ message: "API is running..." });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/ping',(req,res) => {
  res.send('PONG')
});

app.use("/book", bookRoute);
app.use("/user", userRoute);

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel!" });
}

export const handler = serverless(app);

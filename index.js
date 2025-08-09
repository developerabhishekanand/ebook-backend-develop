import express from 'express';
const app = express()
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
 const MongoDBURI = process.env.MongoDBURI;
// const MongoDBURI = "mongodb+srv://developerabhishekmca:<W7vdVNncUY4A5pcK>@ebook-backend.xn0ubt3.mongodb.net/?retryWrites=true&w=majority&appName=ebook-backend";
// Connect to MongoDB

try {
    mongoose.connect(MongoDBURI,{
         useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB and running on PORT:',port)
}
catch(e) {
  console.log("Error",e)
}

// defining routes
app.get('/',(req,res) => {
  res.send('product is running')
});

app.use('/ping',(req,res) => {
  res.send('PONG')
});

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

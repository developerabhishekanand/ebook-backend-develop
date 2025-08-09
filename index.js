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
// Connect to MongoDB

try {
    mongoose.connect(MongoDBURI,{
         useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB')
}
catch(e) {
  console.log("Error",e)
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

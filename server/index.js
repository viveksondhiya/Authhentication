import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Routes/user.js"; 
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3001;

// Middleware to parse URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser);

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Specify the directory where your views are located
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));

// Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://root:root@vivekdb.er1uwnq.mongodb.net/Auth';
mongoose.connect(mongoURI)
    .then(() => { console.log("MongoDB Atlas Connected") })
    .catch((err) => { console.log("Error connecting to MongoDB Atlas: ", err) });

// Routes
app.use("/", userRoutes); 

// Start the server
app.listen(port, () => {
    console.log(`Server is live ${port}`);
});

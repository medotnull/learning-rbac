const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv')

dotenv.config();

const connectDB = require('./config/db');
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//routes


//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
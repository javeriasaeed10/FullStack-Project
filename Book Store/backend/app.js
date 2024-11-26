const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const user= require("./routes/user")
const Books = require("./routes/book")
const Favourite = require("./routes/favourite")
const Cart = require("./routes/cart")
const Order = require("./routes/order")

const PORT = process.env.PORT || 1000;
app.use(cors());
app.use(express.json());

//Connection
require("./conn/conn");

//Calling routes
app.use("/api/v1", user)
app.use("/api/v1", Books)
app.use("/api/v1",Favourite)
app.use("/api/v1",Cart)
app.use("/api/v1",Order)


//SERVER
app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT} `);
  });
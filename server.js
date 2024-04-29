require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const { connectDB } = require("./db/dbconnect");
const route = require("./routes");
// const cors = require("cors")
const app = express();
// const cookieparser = require("cookie-parser")


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


// routes
app.use("/v1",route)

connectDB();

http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server started success",process.env.PORT);
});
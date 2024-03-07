const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 5000
const app = express();
const router = require("./user/routes/router");
const Dbconnect = require("./config/Dbconnection");
const bodyParser= require("body-parser")
const Base_url = process.env.BASE_URL



// const corsOptions = {
//     origin: `${Base_url}`,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 200
    
// };


app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions));
app.use(bodyParser.json())

app.use(`${Base_url}/admin`, router);

Dbconnect();

const server = app.listen(port, () => {
    console.log("server is running", port)
})
process.on("unhandledRejection",(err)=>{
    console.log(err,"promise Rejection error")
    
});

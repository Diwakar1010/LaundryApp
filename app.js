const express = require("express");
const mongoose = require('mongoose');
const CreateBlog = require("./model/data");
const bodyParser = require("body-parser")
const connection = require("./connect/connection");
connection();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.get("/" , async (req,res) => {
    const data = await CreateBlog.find();
    console.log(data);
    res.status(200).json({
        status: "success",
        data
    })
})

app.post("/order" , async (req,res) => {
    try {
        const data = await CreateBlog.create(req.body);
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        })
    }
})

app.get("*" , (req,res) => {
    res.status(404).send(" Error page ")
})




app.listen(5000, ()=> console.log("Server is running at 5000"))

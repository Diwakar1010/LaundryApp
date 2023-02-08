const mongoose = require("mongoose");
async function getConnection(){
    await mongoose.connect('mongodb://localhost/orderPage');
}
module.exports = getConnection;
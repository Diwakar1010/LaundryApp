const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createPage = new Schema({
  order: Object,
  washtype:Array,
  phone: Number,
  quantity : Number,
  location: String,
  price:Number,
  address: String,
  date: {
		type: Date,
		default: Date.now,
  }	
  
});

const createBlog = mongoose.model('CreateOrder', createPage);
module.exports = createBlog;
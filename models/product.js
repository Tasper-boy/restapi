//dependencies

var restful = require ('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku : String,
    price : Number
});


//module.exports
module.exports = restful.model('Products', productSchema);
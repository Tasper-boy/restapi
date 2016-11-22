//dependencies
var restful = require ('node-restful');
var mongoose = restful.mongoose;

//Schema
var exerciseprogramSchema = new mongoose.Schema({
        exercise    : String,
        description : String,
        setNum      : Number,
        repsOrTime  : String
});


//module.exports
module.exports = restful.model('Exerciseprogram', exerciseprogramSchema);
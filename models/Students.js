const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    birthDay : {
        type : String,
        required : true
    },
   
    gender : {
        type : String,
        required : true
    },
  
    health : {
        type : String,
        required : true
    },
   
    street : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    tel : {
        type : Number,
        required : true
    },
    avatar: {
        type: String,
      },
})

const students = mongoose.model('Student' , studentSchema)

module.exports = students
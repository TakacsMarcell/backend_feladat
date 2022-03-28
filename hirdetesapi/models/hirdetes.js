const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function arFtvalidator(value){
    return value % 1000 === 0
}

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria :{
        type : Number,
        default : 1,
        ref: 'Kategoria'
    },
    cim: {
        type: String,
        required : true,
        unique: true,
        maxlength : 100
    },
    leiras: {
        type : String,
        maxlength : 3000
    },
    hirdetesDatum :{
        type :Date,
        default : Date.now
    },
    serulesmentes : Boolean,
    arFt: {
        type : Number,
        required : true,
        validate : [arFtvalidator, "Az ár nem oszthtó  1000-el"]
    },
    kepUrl:{
        type : String,
        maxlength : 300
    }
});

module.exports = mongoose.model('Hirdetes',hirdetesSchema, 'hirdetesek');
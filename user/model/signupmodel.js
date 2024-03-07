const mongoose = require("mongoose");
const fs = require("fs")
const signupschema = new mongoose.Schema({
    verifieduser: {
        name: {
            type: String,
            required: [true]
        },
        email: {
            type: String,
            required: [true]
        },
        avaiter: {
            data: Buffer,
            type: String,

        },
        password: {
            type: String,
            required: [true]
        },
         role: {
            type: String,
            required: [true]
        },
    },
    createdAt: { type: String },
    updatedAt: { type: String, },
    isActive: { type: Boolean }
},);
module.exports = mongoose.model("signup", signupschema)
import mongoose from 'mongoose';
const PostSchema = new mongoose.Schema({
    body:{
        type:String,

    },
    title:{
        type:String,

    },
    subtitle:{
        type:String,

    }
})
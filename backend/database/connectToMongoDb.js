import mongoose from "mongoose";
const connectToMongoDb = () => {
    const uri="mongodb://localhost:27017/codemem"
    try{
        mongoose.connect(uri).then(()=>{
            console.log("Connected to MongoDB");
        }).catch((err) => {console.log(err)});
    }catch (err){
        console.log(err);
    }
}
export default connectToMongoDb;
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectToDatabase = async () => {
    try {

        const uri = process.env.URI + process.env.DATABASE
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000
        })
        console.log("connecting to mongo db atlas sucessfully");

    }
    catch (e) {
        console.log('error in connecting mongo db atlas ' + e)
        throw (e)
    }

}

export default connectToDatabase
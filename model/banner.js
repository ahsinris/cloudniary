import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true },
    status: { type: String, required: true },
    desktopImage: { type: String, reqiured: true },
    mobileImage: { type: String, required: true }
})

const Banner = mongoose.model('banner', bannerSchema)


export default Banner


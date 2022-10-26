import mongoose from "mongoose"


const VideoSchema = new mongoose.Schema({
    videoname: {
        type: String
    },
    description: {
        type: String
    },
    author:{
        type: String
    },
    imgcoverurl: {
        type: String
    },
    videourl: {
        type: String
    }
})

export default mongoose.models.videos ||  mongoose.models("videos",VideoSchema)
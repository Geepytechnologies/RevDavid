import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
    imagename: {
        type: String
    },
    alt:{
        type: String
    },
    url:{
        type: String
    }
})

export default mongoose.models.images ||  mongoose.model("images",ImageSchema);
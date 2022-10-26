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

export default mongoose.model.images ||  mongoose.models("images",ImageSchema);
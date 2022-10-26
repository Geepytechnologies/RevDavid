import mongoose from "mongoose"


const BookSchema = new mongoose.Schema({
    bookname: {
        type: String
    },
    description: {
        type: String
    },
    author:{
        type: String
    },
    bookcoverurl: {
        type: String
    }
})

export default mongoose.models.books ||  mongoose.models("books",BookSchema)
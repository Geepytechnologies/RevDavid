import mongoose from 'mongoose'


const passion5Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    amount:{
        type: String,
    }
},
{timestamps: true}
)

export default mongoose.models.passion5 || mongoose.model("passion5",passion5Schema);
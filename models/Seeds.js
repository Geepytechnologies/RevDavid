import mongoose from 'mongoose'


const seedsSchema = new mongoose.Schema({
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

export default mongoose.models.seeds || mongoose.model("seeds",seedsSchema);
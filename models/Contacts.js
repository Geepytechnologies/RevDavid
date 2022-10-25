import mongoose from 'mongoose'


const contactSchema = new mongoose.Schema({
    firstname:{
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
    testimonies:{
        type: String,
        maxlength: 200
    },
    prayerRequest:{
        type: String,
        maxlength: 200
    },
},
{timestamps: true}
)

export default mongoose.models.contacts || mongoose.model("contacts",contactSchema);
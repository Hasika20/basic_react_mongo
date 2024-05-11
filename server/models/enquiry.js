import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date().toISOString()
    }
});

const enquiry = mongoose.model('enquiry', enquirySchema);

export default enquiry;
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensure name is provided          
    },      
    email: {
        type: String,
        required: true, // Ensure email is provided
        match: /.+\@.+\..+/ // Basic email validation
    },
    message: {
        type: String,
        required: true, // Ensure message is provided
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the creation date
    }
});


const contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactModel = require('./models/contact'); // Assuming you have a contact model defined


const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://akshat:akshatkala1234@cluster0.lt5t7ny.mongodb.net/PORTFOLIO?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
.then(
    console.log('Yay! Connected to MongoDB')).catch(err => {
    console.error('Error connecting to MongoDB:', err);
}); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.post('/contact', async (req, res) => {  
    try{
        await contactModel.create(req.body)
        res.json({success:true});
    } 
    catch (err){
        res.status(500).json({success:false});
    }
});

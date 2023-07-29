const express = require('express');
const db = require('./config/mongoose.js');

// Creating an App with Express
const app = express();
const port = 4000;

//Enable us to pass data through URL
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/product'));

app.listen(port,()=>{
    console.log(`Server up and running on port:  ${port}`);
});
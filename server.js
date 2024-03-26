
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const RouteName = require('./routes/routing'); 

const app = express();

const PORT = process.env.PORT;

//middleware
app.use((req , res , next) => {
    console.log(req.method, req.path);
    next()
})

app.use(express.json());

//routes
// app.get('/', (req, res) => {
//     res.json({message: 'Welcome to the server'});
// });

app.use('/backend/routes',RouteName);

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(PORT, () => {
        console.log(`connected to db and Server is running on port ${PORT}`);
    })
  })

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
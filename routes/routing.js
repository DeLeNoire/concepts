const express = require('express');
const CodeBlock = require('../models/contentModel.js');

const  router = express.Router()

// get all routes
router.get('/', (req, res) => {
    res.json({message: 'Getting all the routes available'});
});

// get a specific route
router.get('/:id', (req, res) => {
    res.json({message: `Getting the route with id ${req.params.id}`});
});

// create a new route
router.post('/', async (req, res) => {
    const {title, code, description} = req.body;

    try{

        const newCodeBlock = await CodeBlock.create({
            title,
            code,
            description
        });

        res.status(200).json(newCodeBlock);

    }catch(err){

        res.status(400).json({message: 'Error creating a new route'});
        console.log(err);

    }

    // res.json({message: 'Creating a new route'});
});

//creating a specific route with id
router.post('/:id', (req, res) => {
    res.json({message: `Creating a new route with id ${req.params.id}`});
});

// update a route
router.patch('/:id', (req, res) => {
    res.json({message: `Updating the route with id ${req.params.id}`});
});

// delete a route
router.delete('/:id', (req, res) => {
    res.json({message: `Deleting the route with id ${req.params.id}`});
});



module.exports = router;
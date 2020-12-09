const express = require('express');
const bodyParse = require('body-parser');
const path = require('path');
const crypto =  require ('crypto');
const mongoose = require( 'mongoose');
const multer= require ('multer');
const GridFsStorage =  require ('multer-gridfs-storage');
const Grid =  require ('gridfs-stream');
const methodOverride = require ('method-override');

const app = express();

//Middleware
app.use(bodyParse.json())
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Mongo URI
const mongoURI='mongodb+srv://m001-student:<password>@sandbox.t3hs7.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Create mongo 

// Init gfs

app.get('/', (req,res) => {
    res.render('index');
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

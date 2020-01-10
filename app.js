const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

/* Configure Mongoose to connect to MongoDB database */
mongoose.connect('mongodb://localhost:27017/nodeCMS', { useNewUrlParser: true })
    .then(response => {
        console.log('MongoDB connected successfully!');
    }).catch(err => {
        console.log('Error detected.');
    })

/* Configure express server */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


/* Routes */
app.use('/', (req, res) => {
    res.send('Welcome to my NodeJS CMS');
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongoDBurl, PORT} = require('./config/configuration');
const flash = require('connect-flash');
const session = require('express-session');
const {globalVariables} = require('./config/configuration');

const app = express();

/* Configure Mongoose to connect to MongoDB database */
mongoose.connect(mongoDBurl, { useNewUrlParser: true })
    .then(response => {
        console.log('MongoDB connected successfully!');
    }).catch(err => {
        console.log('Error detected.');
    })

/* Configure express server */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

/* Flash and Session */
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(globalVariables);

/* Setup View engine to use handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');


/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
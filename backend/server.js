const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
//disable cors
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port} 🌎`));

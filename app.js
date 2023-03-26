const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Port = process.env.PORT || 5000;
// connect to db:
mongoose.connect('mongodb://localhost:27017/gold-market', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// check if db is connected:
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});


app.use(express.json());

const portfolioRoutes = require('./routes/portfolio.js');
const userRoutes = require('./routes/user.js');
const transactionRoutes = require('./routes/transaction.js');


app.use('/api/user', userRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/portfolio', portfolioRoutes);





app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
}   );

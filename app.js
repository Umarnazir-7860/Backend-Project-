const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const userModel = require('./models/user-model');
const productModel = require('./models/product-model');
const db = require('./config/mongoose.connection');
const usersRouter = require('./routes/userRouter');
const ownersRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/users', usersRouter);
app.use('/owners', ownersRouter);
app.use('/products', productsRouter);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
import express from 'express';
import config from './config/config.js ';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';


const app = express();

const MONGODB_URI = `mongodb+srv://${config.mongo.user}:${config.mongo.password}@mycluster.eruob.mongodb.net/${config.mongo.host}`;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/user', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready!');
});


mongoose.connect(MONGODB_URI).then(() => {
    app.listen(8000, () => {
        console.log('Running on port 8000');
    }) 
}).catch(err => {
    console.log(err)
})

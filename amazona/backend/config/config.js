import dotenv from 'dotenv';
dotenv.config();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const SERVER_API_SECRET = process.env.SERVER_API_SECRET || '';



const SECRET_KEY = {
    secret: SERVER_API_SECRET
}


const MONGO = {
    user: MONGO_USER,
    password: MONGO_PASSWORD,
    host: MONGO_HOST
};

const config = {
    mongo: MONGO,
    secret: SECRET_KEY
};

export default config;
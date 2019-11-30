import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB_URL = process.env.DB_URL!;

import Board from './Board';
import Thread from './Thread';
import Message from './Message';

const connectDB = () => {
    return mongoose.connect(DB_URL, { useNewUrlParser: true });
};

const models = { Board, Thread, Message };

export { models, connectDB };
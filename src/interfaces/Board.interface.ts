import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';

export default interface Board extends Document {
    _id: ObjectID,
    board_name: string,
    created_on: Date,
    threads: [ObjectID],
};
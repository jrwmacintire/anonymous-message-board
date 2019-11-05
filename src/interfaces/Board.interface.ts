import { ObjectID } from 'mongodb';

export default interface Board {
    _id: ObjectID,
    board_name: string,
    created_on: Date,
    threads: [ObjectID],
};
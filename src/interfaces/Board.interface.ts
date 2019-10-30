import { ObjectID } from 'mongodb';

export interface Board {
    _id: ObjectID,
    board_name: string,
    created_on: Date,
    threads: [ObjectID],
};
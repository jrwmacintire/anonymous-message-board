import { ObjectID } from "bson";

export interface Thread {
    _id: ObjectID,
    board_id: ObjectID,
    craeted_on: Date,
    bumped_on: Date,
    replies: [ObjectID],
    reported: boolean,
    delete_password: string
};
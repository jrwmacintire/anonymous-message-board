import { ObjectID } from "bson";
import { MongooseDocument } from "mongoose";

export default interface Thread extends MongooseDocument {
    _id: ObjectID,
    board_id: ObjectID,
    craeted_on: Date,
    bumped_on: Date,
    replies: [ObjectID],
    reported: boolean,
    delete_password: string
};
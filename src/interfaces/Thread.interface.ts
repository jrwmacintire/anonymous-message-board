import { ObjectID } from "bson";
import { Document } from "mongoose";
 
export default interface Thread extends Document {
    _id: ObjectID,
    board_id: ObjectID,
    created_on: Date,
    bumped_on: Date,
    replies: [ObjectID],
    reported: boolean,
    delete_password: string,
    thread_text: string
};
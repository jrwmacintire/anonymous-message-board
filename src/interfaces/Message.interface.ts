import { ObjectID } from "bson";
import { MongooseDocument } from "mongoose";

export default interface Message extends MongooseDocument {
    _id: ObjectID,
    created_on: Date,
    text: string,
    reported: boolean,
    delete_password: string
}
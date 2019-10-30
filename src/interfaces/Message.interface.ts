import { ObjectID } from "bson";

export interface Message {
    _id: ObjectID,
    created_on: Date,
    text: string,
    reported: boolean,
    delete_password: string
}
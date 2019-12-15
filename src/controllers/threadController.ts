import ThreadInterface from '../interfaces/Thread.interface';
import ResponseBody from '../interfaces/PostThreadBody.interface';
import Thread from '../models/Thread';
import { ObjectId, ObjectID } from 'bson';
import { domainToASCII } from 'url';

class ThreadController {

    createNewThread = async <ThreadInterface>(board: string, body: ResponseBody, boardId: ObjectId) => {
        console.log('attempt to create a new thread!');
        try {
            const threadBody = { ...body, boardId: boardId };
            const newThread = await Thread.create(threadBody);
            return newThread;
        } catch(err) {
            throw err;
        }
    }

    getThreadsBySortString = async <ThreadInterface>(sort: string, limit: number) => {
        console.log('Getting threads ~ sort:', sort);
        try {
            if(limit) return await Thread.find({}).sort(sort).limit(limit);
            return await Thread.find({}).sort(sort);
        } catch (error) {
            throw error;
        }
    };

    getThreadByID = async <ThreadInterface>(id: ObjectID) => {
        try {
            return await Thread.find({ _id: new ObjectID(id) });
        } catch (error) {
            throw error;
        }
    };

    getThreadForDeleteTest = async <ThreadInterface>() => {
        try {
            return await Thread.findOne({});
        } catch(err) {
            throw err;
        }
    }

    // findThreadByName = (name) => {
    //     console.log(`attempt to find thread by name! ~ name: ${name}`)
    // }

    addReply = (reply: string) => {
        console.log(`adding reply!?1`);
    };

    deleteReply = (reply: string) => {

    };

    deleteThread = (delete_password: string) => {

    };

    reportThread = (report: string) => {

    };

}

export default ThreadController;
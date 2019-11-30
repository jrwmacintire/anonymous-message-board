import ThreadInterface from '../interfaces/Thread.interface';
import ResponseBody from '../interfaces/PostThreadBody.interface';
import Thread from '../models/Thread';

class ThreadController {

    createNewThread = (board: string, body: ResponseBody) => {
        console.log('attempt to create a new thread!');
        try {
            const newThread = Thread.create()
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
import ThreadInterface from '../interfaces/Thread.interface';

class Thread {

    createNewThread = () => {
        console.log('attempt to create a new thread!');
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

export default Thread;
import ThreadInterface from '../interfaces/Thread.interface';

class Thread {

    createNewThread = () => {
        console.log('attempt to create a new thread!');
    }

    // findThreadByName = (name) => {
    //     console.log(`attempt to find thread by name! ~ name: ${name}`)
    // }

    addReply = (reply) => {
        console.log(`adding reply!?`);
    };

    deleteReply = (reply) => {

    };

    deleteThread = (delete_password) => {

    };

    reportThread = (report) => {

    };

}

export default Thread;
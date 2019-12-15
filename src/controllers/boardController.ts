import Board from "../models/Board";
import Body from '../interfaces/PostThreadBody.interface';
import BoardInterface from '../interfaces/Board.interface';
import { ObjectID } from "bson";

class BoardController {

    public createNewBoard = async (name : string) => {
        // console.log('attempt to create a new board!');
        
        try {
            const newBoard = await new Board({ board_name : name });
            newBoard.save(function(doc : Document) {
                // console.log(`New '${name}' board created!`);
            });
            return newBoard;
        } catch(err) {
            throw err;
        }
    };

    public getBoardByName = async (name : string) => {
        // console.log(`attempt to find board by name! ~ name: ${name}`);

        try {
            const board = await Board.findOne({ board_name: name });
            return board;
        } catch(err) {
            throw err;
        }
    };

    public updateBoard = async (board: BoardInterface, threadId: ObjectID) => {
        try {
            const { threads } = board;
            // console.log(`Updating board! ~ threads: `, threads);
            board.threads.push(threadId);
            board.save();
            return board;
        } catch(err) {
            throw err;
        }
    };

    public validateBoardByName = async (name : string) => {
        // console.log(`Validating board by name: ${name}`);
        const regex = /^[a-z]{1}$/;

        if(name.match(regex)) return true;
        else return false;
    };

    public validateBody = async (body : Body) => {
        // console.log(`Validating body: `, body);
        const { thread_text, delete_password } = body,
                               textType = typeof thread_text,
                           passwordType = typeof delete_password;
            
        const validated = {
            thread_text: textType === 'string' && thread_text !== '' ? true : false,
            delete_password: passwordType === 'string' && delete_password !== '' ? true : false
        };

        return validated;
    };

    public reportBoard = async (report : string) => {
        console.log(`reporting board -> report: ${report}`);
    };

    public deleteBoard = async (deletePassword : string) => {
        console.log(`deleting board with -> ${deletePassword}`);
    };

    public addThread = async (threadName : string) => {
        console.log(`add a '${threadName}' thread to board`);
    };

}

export default BoardController;
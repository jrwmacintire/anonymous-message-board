import Board from "../models/Board";

class BoardController {

    public createNewBoard = async (name : string) => {
        console.log('attempt to create a new board!');
        
        try {
            const newBoard = await new Board({ board_name : name });
            newBoard.save(function(doc : Document) {
                console.log(`New '${name}' board created!`);
            });
            return newBoard;
        } catch(err) {
            throw err;
        }
    };

    public findBoardByName = async (name : string) => {
        console.log(`attempt to find board by name! ~ name: ${name}`);
        try {
            const board = await Board.findOne({ board_name: name });
            return board;
        } catch(err) {
            throw err
        }
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
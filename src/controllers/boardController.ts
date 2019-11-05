import BoardInterface from '../interfaces/Board.interface';

class BoardController {

    public createNewBoard = (name : string) => {
        console.log('attempt to create a new board!');
    };

    public findBoardByName = (name : string) => {
        console.log(`attempt to find board by name! ~ name: ${name}`)
    };

    public reportBoard = (report : string) => {
        console.log(`reporting board -> report: ${report}`);
    };

    public deleteBoard = (deletePassword : string) => {
        console.log(`deleting board with -> ${deletePassword}`);
    };

    public addThread = (threadName : string) => {
        console.log(`add a '${threadName}' thread to board`);
    };

}

export default BoardController;
/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

// const expect = require('chai').expect;

import BoardController from '../controllers/boardController';
const boardController = new BoardController();
import ThreadController from '../controllers/threadController';
const threadController = new ThreadController();
import BoardInterface from '../interfaces/Board.interface';
import { Request, Response, Application } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export default function (app: Application) {

  app.route('/api/threads/:board')
    .get(async function (req: Request, res: Response) {

      try {
        const boardName: string = req.params.board;
        const validBoardName = await boardController.validateBoardByName(boardName);

        if (validBoardName) {
          const board = await boardController.getBoardByName(boardName);
          if (board) {
            console.log(`Board FOUND:`, board);

            // start: 

            // end: array of objects with critical info removed

            res.send([]);
          } else {
            console.log('Board not found - prepare to create board!');
            const newBoard = await boardController.createNewBoard(boardName);
            res.json(newBoard);
          }

          // validate boardName
          // throw error if invalid
          // query thread ids from board
          // filter 10 threads with the highest bumps/replies
          // display with json, or send 'No replies were found on this thread.'
          // res.sendFile(process.cwd() + `/src/views/board.html`);

        } else { // Invalid board name, send error response
          res.status(400).send('Error: invalid board name');
        }

      } catch (err) {
        // res.send(err);
        throw err;
      }

    })
    .post(async function (req: Request, res: Response) {
      const boardName: string = req.params.board;
      const body = {
        text: req.body.text,
        delete_password: req.body.delete_password
      };

      const valid = await Promise.all([
        boardController.validateBoardByName(boardName),
        boardController.validateBody(body)
      ]);

      const validatedBoardName: boolean = valid[0],
        validatedBody: ResponseBody = valid[1];

      interface ResponseBody {
        text: boolean,
        delete_password: boolean
      };

      // console.log(`valid: `, valid);
      // If board's name is valid
      if (validatedBoardName) {
        // use board controller query the DB for a matching board

        const board = await boardController.getBoardByName(boardName);

        // and both 'body' properties are valid
        if (validatedBody.text && validatedBody.delete_password) {

          const thread = await threadController.createNewThread(boardName, body);

          // then redirect to the newly created thread's board.
          res.redirect(303, `/api/threads/${boardName}`);
        }
        // the 'body' contains invalid info
        else {
          if (!validatedBody.text && !validatedBody.delete_password) {
            // Error: all inputs invalid
            res.status(400).send('Please ensure all input fields are filled out and try again.');
          } else if (!validatedBody.text) {
            // Error: 'text' field is invalid
            res.status(400).send('Invalid input for text. Please try again.');
          } else if (!validatedBody.delete_password) {
            // Error: 'delete_password' field is invalid
            res.status(400).send('Invalid input for delete_password field. Please try again.');
          } else {
            throw Error('Catch all error for error-handling on body validation.');
          }
        }
      } else {
        res.status(400).send('Invalid input for board name. Please try again.');
      }

      // validate boardName with DB
      // if not found, make a new board (any letter 'a-z')
      // board is now found/created and ready for use
      // validate the 'text' and 'delete_password' fields
      // throw error if invalid 
      // or create new thread with model
      // add new thread's id to current board
      // add 'text' and 'delete_password'
      // automatically generate other fields ('bumped_on, created_on')
      // res.redirect(307, `/api/threads/${boardName}`);

    })
    .put(function (req: Request, res: Response) {
      res.send(req.body);
    })
    .delete(function (req: Request, res: Response) {
      res.send('Request to delete a thread?');
    });

  app.route('/api/replies/:board')
    .get(function (req: Request, res: Response) {
      const params: ParamsDictionary = req.params;
      res.send(`params: ${params}`);
    })
    .post(function (req: Request, res: Response) {
      res.send(req.body);
    })
    .put(function (req: Request, res: Response) {
      res.send(req.body);
    })
    .delete(function (req: Request, res: Response) {
      res.send(req.body);
    });

};

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
import Board from '../models/Board';
import { Request, Response, Application } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export default function (app : Application) {
  
  app.route('/api/threads/:board')
      .get(async function(req : Request, res : Response) {
        const boardName : string = req.params.board;
        
        try {

          // validate boardName
          // throw error if invalid
          // query thread ids from board
          // filter 10 threads with the highest bumps/replies
          // display with json, or send 'No replies were found on this thread.'
          res.sendFile(process.cwd() + `/src/views/board.html`);

        } catch(err) {
          throw err;
        }

      })
      .post(async function(req : Request, res : Response) {
        const boardName : string = req.params.board;
        const body : object = req.body;

        try {

          // validate boardName with DB
          // if not found, make a new board (any letter 'a-z')
          // board is now found/created and ready for use
          // validate the 'text' and 'delete_password' fields
          // throw error if invalid 
          // or create new thread with model
          // add new thread's id to current board
          // add 'text' and 'delete_password'
          // automatically generate other fields ('bumped_on, created_on')
          //

          const board = await boardController.findBoardByName(boardName);

          if(board === null || board === undefined) {
            console.log(`'${boardName}' board not found!`);
            // create new board
            const newBoard = await boardController.createNewBoard(boardName);
          } else {
            console.log(`'${boardName}' board was FOUND.`);
          }

          res.status(307).redirect(`/api/threads/${boardName}`);

        } catch(err) {
          throw err;
        }
        
      })
      .put(function(req : Request, res : Response) {
        res.send(req.body);
      })
      .delete(function(req : Request, res : Response) {
        res.send('Request to delete a thread?');
      });
    
  app.route('/api/replies/:board')
      .get(function(req : Request, res : Response) {
        const params : ParamsDictionary = req.params;
        res.send(`params: ${params}`);
      })
      .post(function(req : Request, res : Response) {
        res.send(req.body);
      })
      .put(function(req : Request, res : Response) {
        res.send(req.body);
      })
      .delete(function(req : Request, res : Response) {
        res.send(req.body);
      });

};

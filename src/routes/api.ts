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
import { Request, Response } from 'express';

export default function (app) {
  
  app.route('/api/threads/:board')
      .get(async function(req : Request, res : Response) {
        const params : string = req.params;
        // console.log(`params: `, params);
 
        res.send(params);
      })
      .post(function(req : Request, res : Response) {
        res.send(req.body);
      })
      .put(function(req : Request, res : Response) {
        res.send(req.body);
      })
      .delete(function(req : Request, res : Response) {
        res.send('Request to delete a thread?');
      });
    
  app.route('/api/replies/:board')
      .get(function(req : Request, res : Response) {
        const params : string = req.params;
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

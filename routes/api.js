/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;

module.exports = function (app) {
  
  app.route('/api/threads/:board')
      .get(async function(req, res) {

        const board = req.params.board;
        const boards = boardController.getBoards();

        if(board) {
          res.send({ 
            message: 'threads will be here, eventually',
            board: req.params.board
          });
        } else {
          res.send({
            error: 'Board not found with given input.',
            params: req.params
          });
        }
      })
      .post(function(req, res) {

      })
      .put(function(req, res) {

      })
      .delete(function(req, res) {

      });
    
  app.route('/api/replies/:board')
      .get(function(req, res) {
        res.send({ 
          message: 'replies will be here, eventually',
          params: req.params
        });
      })
      .post(function(req, res) {
        
      })
      .put(function(req, res) {
        
      })
      .delete(function(req, res) {
        
      });

};

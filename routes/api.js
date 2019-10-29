/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;

module.exports = function (app) {
  
  app.route('/api/threads/:board')
      .get(function(req, res) {
        res.send({ 
          message: 'threads will be here, eventually',
          params: req.params
        });
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

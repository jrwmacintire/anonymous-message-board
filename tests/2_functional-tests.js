/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../public/index');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    suite('POST', function() {

      // this.beforeAll(function(done) {
      //   console.log(`Deleting items from DB.`);
      //   issueHandler.deleteAllIssuesFromProject('test')
      //     .then(() => done()); 
      // });

      test('Every field filled in', function(done) {
       chai.request(server)
        .post('/api/threads/test')
        .send({
          
        })
        .end(function(err, res){
          const { body } = res;
          assert.equal(res.status, 200);
          assert.equal(body.issue.issue_title, 'Title');
          assert.equal(body.issue.issue_text, 'text');
          assert.equal(body.issue.created_by, 'Functional Test - Every field filled in');
          assert.equal(body.issue.assigned_to, 'Chai and Mocha');
          assert.equal(body.issue.status_text, 'In QA');
          done();
        });
      });
    });
    
    suite('GET', function() {
      
    });
    
    suite('DELETE', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    

  });
  
  suite('API ROUTING FOR /api/replies/:board', function() {
    
    suite('POST', function() {
      
    });
    
    suite('GET', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    
    suite('DELETE', function() {
      
    });
    
  });

});

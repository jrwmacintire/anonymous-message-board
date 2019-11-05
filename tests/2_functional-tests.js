/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */

var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var server = require("../public/index");

chai.use(chaiHttp);

suite("Functional Tests", function() {
  suite("API ROUTING FOR /api/threads/:board", function() {
    suite("POST", function() {
      // this.beforeAll(function(done) {
      //   console.log(`Deleting items from DB.`);
      //   issueHandler.deleteAllIssuesFromProject('test')
      //     .then(() => done());
      // });

      test("Every field filled in", function(done) {
        chai
          .request(server)
          .post("/api/threads/test")
          .send({
            board: "test_board",
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            assert.equal(body.board, "test_board");
            assert.equal(body.text, "test text for board");
            assert.equal(body.delete_password, "password1234");
            done();
          });
      });

      test(`Missing 'board' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/test")
          .send({
            board: "",
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Missing 'text' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/test")
          .send({
            board: "test_board",
            text: "",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            // assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Missing 'delete_password' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/test")
          .send({
            board: "test_board",
            text: "test text for board",
            delete_password: ""
          })
          .end(function(err, res) {
            const { body } = res;
            // assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Missing all fields in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });

    suite("GET", function() {
      test(``, function(done) {
        chai
          .request(server)
          .get("/api/threads/test")
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(``, function(done) {
        chai
          .request(server)
          .get("/api/threads/test")
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(``, function(done) {
        chai
          .request(server)
          .get("/api/threads/test")
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(``, function(done) {
        chai
          .request(server)
          .get("/api/threads/test")
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });

    suite("DELETE", function() {
      test(`Delete thread with 'delete_password'.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Delete failed due to invalid board name.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Delete failed due to invalid thread ID.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Delete failed due to invalid 'delete_password'.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });

    suite("PUT", function() {
      test(`Report thread given valid ID.`, function(done) {
        chai
          .request(server)
          .put("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Fail to report thread with invalid thread ID.`, function(done) {
        chai
          .request(server)
          .put("/api/threads/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });
  });

  suite("API ROUTING FOR /api/replies/:board", function() {
    suite("POST", function() {
      test(`Create new reply on 'test' thread`, function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });

    suite("GET", function() {
      test(``, function(done) {
        chai
          .request(server)
          .get("/api/replies/test")
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });

    suite("PUT", function() {
      test(`Fail to report thread due to invalid thread ID.`, function(done) {
        chai
          .request(server)
          .put("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Reported thread with valid thread ID.`, function(done) {
        chai
          .request(server)
          .put("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });

    suite("DELETE", function() {
      test(`Deleting reply from thread.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Invalid 'delete_password' in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Invalid 'board' name in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Invalid thread ID in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });

      test(`Invalid reply ID in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            //  assert.equal(res.status, 200);
            //  done();
          });
      });
    });
  });
});

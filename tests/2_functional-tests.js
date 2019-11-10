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
          .post("/api/threads/t")
          .send({
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            console.log(`body:`, body);
            assert.equal(res.status, 200);
            assert.isArray(body);
            assert.isAbove(body.length, 0);
            done();
          });
      });

      test(`Invalid board name.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/t2")
          .send({
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { text } = res;
            assert.equal(res.status, 400);
            assert.equal(
              text,
              `Invalid input for board name. Please try again.`
            );
            done();
          });
      });

      test(`Missing 'board' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/")
          .send({
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { text } = res;
            assert.equal(res.status, 404);
            assert.equal(
              text,
              `Not found. If you\'re attempting to access a board, please try something like \'/api/threads/{a-z}\'.`
            );
            done();
          });
      });

      test(`Missing 'text' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/t")
          .send({
            text: "",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { text } = res;
            assert.equal(res.status, 400);
            assert.equal(
              text,
              `Invalid input for text. Please try again.`
            );
            done();
          });
      });

      test(`Missing 'delete_password' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/t")
          .send({
            text: "test text for board",
            delete_password: ""
          })
          .end(function(err, res) {
            const { text } = res;
            assert.equal(res.status, 400);
            assert.equal(
              text,
              "Invalid input for delete_password field. Please try again."
            );
            done();
          });
      });

      test(`Missing all fields in input.`, function(done) {
        chai
          .request(server)
          .post("/api/threads/t")
          .send({})
          .end(function(err, res) {
            const { text } = res;
            assert.equal(res.status, 400);
            assert.equal(
              text,
              "Please ensure all input fields are filled out and try again."
            );
            done();
          });
      });
    });

    suite("GET", function() {
      test(`Get current board's threads as an array of objects.`, function(done) {
        chai
          .request(server)
          .get("/api/threads/t")
          .end(function(err, res) {
            const { body } = res;
            const firstThread = body[0],
              secondThread = body[1],
              thirdThread = body[2];
            assert.equal(res.status, 200);
            assert.isArray(body);
            assert.isObject(firstThread);
            assert.doesNotHaveAnyKeys(body, ["reported", "delete_password"]);
            assert.isTrue(body.length > 0);
            done();
          });
      });

      test(`Invalid input, can't find a board with that name.`, function(done) {
        chai
          .request(server)
          .get("/api/threads/t2")
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              "A board with that name could not be found. Please enter a different board name."
            );
            assert.isString(body.board);
            done();
          });
      });

      test(`Invalid input, empty input for board name.`, function(done) {
        chai
          .request(server)
          .get("/api/threads/")
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(body.message, `Invalid/empty input for 'board' name.`);
            done();
          });
      });
    });

    suite("DELETE", function() {
      test(`Delete thread with 'delete_password' and 'thread_id'.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/t")
          .send({
            delete_password: "password1234",
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            assert.equal(
              body.message,
              `Success deleting thread '${thread_id}'!`
            );
            done();
          });
      });

      test(`Delete failed due to invalid board name.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/t")
          .send({
            delete_password: "password1234",
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to find and delete thread due to invalid board name!`
            );
            done();
          });
      });

      test(`Delete failed due to invalid thread ID.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/t")
          .send({
            delete_password: "password1234",
            thread_id: "1234zxz89"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid ID!`
            );
            done();
          });
      });

      test(`Delete failed due to invalid 'delete_password'.`, function(done) {
        chai
          .request(server)
          .delete("/api/threads/t")
          .send({
            delete_password: "pas214rd1234",
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid 'delete_password'!`
            );
            done();
          });
      });
    });

    suite("PUT", function() {
      test(`Fail to report thread with invalid thread ID.`, function(done) {
        chai
          .request(server)
          .put("/api/threads/t")
          .send({
            thread_id: "1234lkjlkj"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid 'thread_id'`
            );
            assert.isNotTrue(body.thread.reported);
            done();
          });
      });

      test(`Fail to report thread with invalid board name.`, function(done) {
        chai
          .request(server)
          .put("/api/threads/t")
          .send({
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid board name`
            );
            done();
          });
      });

      test(`Report thread given valid ID.`, function(done) {
        chai
          .request(server)
          .put("/api/threads/t")
          .send({
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            assert.equal(body.message, "Successfully reported thread!");
            assert.isTrue(body.thread.reported);
            done();
          });
      });
    });
  });

  suite("API ROUTING FOR /api/replies/:board", function() {
    suite("POST", function() {
      test("Every field filled in", function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({
            board: "test_board",
            thread_id: "123456789",
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            done();
          });
      });

      test(`Missing 'board' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({
            board: "",
            thread_id: "123456789",
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Invalid input for board name. Please try again.`
            );
            assert.equal(body.params.board, "");
            assert.equal(body.params.thread_id, "123456789");
            assert.equal(body.params.text, "");
            assert.equal(body.params.delete_password, "password1234");
            done();
          });
      });

      test(`Missing 'text' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({
            board: "test_board",
            thread_id: "123456789",
            text: "",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Invalid input for text. Please try again.`
            );
            assert.equal(body.params.board, "test_board");
            assert.equal(body.params.thread_id, "123456789");
            assert.equal(body.params.text, "");
            assert.equal(body.params.delete_password, "password1234");
            done();
          });
      });

      test(`Missing 'thread_id' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({
            board: "test_board",
            thread_id: "",
            text: "test text for board",
            delete_password: "password1234"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Invalid input for text. Please try again.`
            );
            assert.equal(body.params.board, "test_board");
            assert.equal(body.params.thread_id, "");
            assert.equal(body.params.text, "test text for board");
            assert.equal(body.params.delete_password, "password1234");
            done();
          });
      });

      test(`Missing 'delete_password' field in input.`, function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({
            board: "test_board",
            thread_id: "123456789",
            text: "test text for board",
            delete_password: ""
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              "Invalid input for delete_password field. Please try again."
            );
            assert.equal(body.params.board, "test_board");
            assert.equal(body.params.text, "test text for board");
            assert.equal(body.params.thread_id, "123456789");
            assert.equal(body.params.delete_password, "");
            done();
          });
      });

      test(`Missing all fields in input.`, function(done) {
        chai
          .request(server)
          .post("/api/replies/test")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              "Please ensure all input fields are filled out and try again."
            );
            assert.isEmpty(body);
            done();
          });
      });
    });

    suite("GET", function() {
      test(`Get current thread's replies as an array of objects.`, function(done) {
        chai
          .request(server)
          .get("/api/replies/t")
          .query({
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            const firstReply = body[0],
              secondReply = body[1],
              thirdReply = body[2];
            assert.equal(res.status, 200);
            assert.isArray(body);
            assert.isObject(firstReply);
            assert.doesNotHaveAnyKeys(body, ["reported", "delete_password"]);
            assert.isTrue(body.length > 0);
            done();
          });
      });

      test(`Invalid input, can't find a thread with that name.`, function(done) {
        chai
          .request(server)
          .get("/api/replies/t")
          .query({
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              "A thread with that name could not be found. Please enter a different thread name."
            );
            assert.isString(body.thread_id);
            done();
          });
      });

      test(`Invalid input, empty input for 'thread_id'.`, function(done) {
        chai
          .request(server)
          .get("/api/replies/t")
          .query({
            thread_id: ""
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(body.message, `Invalid/empty input for 'board' name.`);
            done();
          });
      });
    });

    suite("PUT", function() {
      test(`Failed to report thread with invalid 'thread_id'.`, function(done) {
        chai
          .request(server)
          .put("/api/replies/t")
          .send({
            thread_id: "1234lkjlkj",
            reply_id: "987654321"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid 'thread_id'`
            );
            assert.isNotTrue(body.reply.reported);
            done();
          });
      });

      test(`Failed to report thread with invalid 'reply_id'.`, function(done) {
        chai
          .request(server)
          .put("/api/replies/t")
          .send({
            thread_id: "123456789",
            reply_id: "98dsff4321"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid 'reply_id'`
            );
            assert.isNotTrue(body.reply.reported);
            done();
          });
      });

      test(`Fail to report reply with invalid board name.`, function(done) {
        chai
          .request(server)
          .put("/api/replies/t")
          .send({
            thread_id: "123456789",
            reply_id: "987654321"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(
              body.message,
              `Failed to delete thread due to invalid board name`
            );
            assert.isNotTrue(body.reply.reported);
            done();
          });
      });

      test(`Report thread given valid ID.`, function(done) {
        chai
          .request(server)
          .put("/api/replies/t")
          .send({
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            assert.equal(body.message, "Successfully reported thread!");
            assert.isTrue(body.thread.reported);
            done();
          });
      });
    });

    suite("DELETE", function() {
      test(`Delete reply from thread with 'delete_password', 'reply_id' and 'thread_id'.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/t")
          .send({
            delete_password: "password1234",
            reply_id: "987654321",
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 200);
            assert.equal(body.message, `Success deleting reply from thread!`);
            done();
          });
      });

      test(`Invalid 'delete_password' in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/t")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(body.message, `Invalid password - failed to delete reply!`);
            done();
          });
      });

      test(`Invalid 'board' name in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/t2")
          .send({
            delete_password: "password1234",
            reply_id: '987654321',
            thread_id: "123456789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(body.message, `Invalid 'board' name - failed to delete reply!`);
            done();
          });
      });

      test(`Invalid 'thread_id' in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/t")
          .send({
            delete_password: "password1234",
            reply_id: '987654321',
            thread_id: "123sdfsf6789"
          })
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(body.message, `Invalid 'thread_id' - failed to delete reply!`);
            done();
          });
      });

      test(`Invalid 'reply_id' in delete request.`, function(done) {
        chai
          .request(server)
          .delete("/api/replies/t")
          .send({})
          .end(function(err, res) {
            const { body } = res;
            assert.equal(res.status, 400);
            assert.equal(body.message, `Invalid 'reply_id' - failed to delete reply!`);
            done();
          });
      });
    });
  });
});

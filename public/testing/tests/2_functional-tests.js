"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../../index"));

/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *       (if additional are added, keep them at the very end!)
 */
var assert = _chai["default"].assert;

_chai["default"].use(_chaiHttp["default"]);

suite("Functional Tests", function () {
  suite("API ROUTING FOR /api/threads/:board", function () {
    suite("POST", function () {
      test("Every field filled in", function (done) {
        _chai["default"].request(_index["default"]).post("/api/threads/t").send({
          text: "test text for board",
          delete_password: "password1234"
        }).end(function (err, res) {
          var board = res.body.board;
          console.log("board:", board);
          assert.equal(res.status, 200); // assert.isArray(body);
          // assert.isAbove(body.length, 0);

          done();
        });
      });
      test("Invalid board name.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/threads/t2").send({
          text: "test text for board",
          delete_password: "password1234"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for board name. Please try again.");
          done();
        });
      });
      test("Missing 'board' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/threads/").send({
          text: "test text for board",
          delete_password: "password1234"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 404);
          assert.equal(text, "Not found. If you're attempting to access a board, please try something like '/api/threads/{a-z}'.");
          done();
        });
      });
      test("Missing 'text' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/threads/t").send({
          text: "",
          delete_password: "password1234"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for text. Please try again.");
          done();
        });
      });
      test("Missing 'delete_password' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/threads/t").send({
          text: "test text for board",
          delete_password: ""
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for delete_password field. Please try again.");
          done();
        });
      });
      test("Missing all fields in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/threads/t").send({}).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Please ensure all input fields are filled out and try again.");
          done();
        });
      });
    });
    suite("GET", function () {
      test("Get current board's threads as an array of objects.", function (done) {
        _chai["default"].request(_index["default"]).get("/api/threads/t").end(function (err, res) {
          var body = res.body;
          var firstThread = body[0],
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
      test("Invalid input, can't find a board with that name.", function (done) {
        _chai["default"].request(_index["default"]).get("/api/threads/t2").end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 400);
          assert.equal(body.message, "A board with that name could not be found. Please enter a different board name.");
          assert.isString(body.board);
          done();
        });
      });
      test("Invalid input, empty input for board name.", function (done) {
        _chai["default"].request(_index["default"]).get("/api/threads/").end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 404);
          assert.equal(body.message, "Invalid/empty input for 'board' name.");
          done();
        });
      });
    });
    suite("DELETE", function () {
      test("Delete thread with 'delete_password' and 'thread_id'.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/threads/t").send({
          delete_password: "password1234",
          thread_id: "123456789"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 200);
          assert.equal(text, "Success deleting thread!");
          done();
        });
      });
      test("Delete failed due to invalid board name.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/threads/t").send({
          delete_password: "password1234",
          thread_id: "123456789"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to find and delete thread due to invalid board name!");
          done();
        });
      });
      test("Delete failed due to invalid thread ID.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/threads/t").send({
          delete_password: "password1234",
          thread_id: "1234zxz89"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid ID!");
          done();
        });
      });
      test("Delete failed due to invalid 'delete_password'.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/threads/t").send({
          delete_password: "pas214rd1234",
          thread_id: "123456789"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid 'delete_password'!");
          done();
        });
      });
    });
    suite("PUT", function () {
      test("Fail to report thread with invalid thread ID.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/threads/t").send({
          thread_id: "1234lkjlkj"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid 'thread_id'");
          done();
        });
      });
      test("Fail to report thread with invalid board name.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/threads/t").send({
          thread_id: "123456789"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid board name");
          done();
        });
      });
      test("Report thread given valid ID.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/threads/t").send({
          thread_id: "123456789"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 200);
          assert.equal(text, "Successfully reported thread!");
          done();
        });
      });
    });
  });
  suite("API ROUTING FOR /api/replies/:board", function () {
    suite("POST", function () {
      test("Every field filled in", function (done) {
        _chai["default"].request(_index["default"]).post("/api/replies/test").send({
          board: "test_board",
          thread_id: "123456789",
          text: "test text for board",
          delete_password: "password1234"
        }).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 200);
          done();
        });
      });
      test("Missing 'board' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/replies/test").send({
          board: "",
          thread_id: "123456789",
          text: "test text for board",
          delete_password: "password1234"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for board name. Please try again.");
          done();
        });
      });
      test("Missing 'text' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/replies/test").send({
          board: "test_board",
          thread_id: "123456789",
          text: "",
          delete_password: "password1234"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for text. Please try again.");
          done();
        });
      });
      test("Missing 'thread_id' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/replies/test").send({
          board: "test_board",
          thread_id: "",
          text: "test text for board",
          delete_password: "password1234"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for text. Please try again.");
          done();
        });
      });
      test("Missing 'delete_password' field in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/replies/test").send({
          board: "test_board",
          thread_id: "123456789",
          text: "test text for board",
          delete_password: ""
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid input for delete_password field. Please try again.");
          done();
        });
      });
      test("Missing all fields in input.", function (done) {
        _chai["default"].request(_index["default"]).post("/api/replies/test").send({}).end(function (err, res) {
          var text = res.text,
              body = res.body;
          assert.equal(res.status, 400);
          assert.equal(text, "Please ensure all input fields are filled out and try again.");
          assert.isEmpty(body);
          done();
        });
      });
    });
    suite("GET", function () {
      test("Get current thread's replies as an array of objects.", function (done) {
        _chai["default"].request(_index["default"]).get("/api/replies/t").query({
          thread_id: "123456789"
        }).end(function (err, res) {
          var body = res.body;
          var firstReply = body[0],
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
      test("Invalid input, can't find a thread with that name.", function (done) {
        _chai["default"].request(_index["default"]).get("/api/replies/t").query({
          thread_id: "123456789"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "A thread with that name could not be found. Please enter a different thread name.");
          done();
        });
      });
      test("Invalid input, empty input for 'thread_id'.", function (done) {
        _chai["default"].request(_index["default"]).get("/api/replies/t").query({
          thread_id: ""
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Invalid/empty input for 'board' name.");
          done();
        });
      });
    });
    suite("PUT", function () {
      test("Failed to report thread with invalid 'thread_id'.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/replies/t").send({
          thread_id: "1234lkjlkj",
          reply_id: "987654321"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid 'thread_id'");
          done();
        });
      });
      test("Failed to report thread with invalid 'reply_id'.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/replies/t").send({
          thread_id: "123456789",
          reply_id: "98dsff4321"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid 'reply_id'");
          done();
        });
      });
      test("Fail to report reply with invalid board name.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/replies/t").send({
          thread_id: "123456789",
          reply_id: "987654321"
        }).end(function (err, res) {
          var text = res.text;
          assert.equal(res.status, 400);
          assert.equal(text, "Failed to delete thread due to invalid board name");
          done();
        });
      });
      test("Report thread given valid ID.", function (done) {
        _chai["default"].request(_index["default"]).put("/api/replies/t").send({
          thread_id: "123456789"
        }).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 200);
          assert.equal(body.message, "Successfully reported thread!");
          assert.isTrue(body.thread.reported);
          done();
        });
      });
    });
    suite("DELETE", function () {
      test("Delete reply from thread with 'delete_password', 'reply_id' and 'thread_id'.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/replies/t").send({
          delete_password: "password1234",
          reply_id: "987654321",
          thread_id: "123456789"
        }).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 200);
          assert.equal(body.message, "Success deleting reply from thread!");
          done();
        });
      });
      test("Invalid 'delete_password' in delete request.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/replies/t").send({}).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 400);
          assert.equal(body.message, "Invalid password - failed to delete reply!");
          done();
        });
      });
      test("Invalid 'board' name in delete request.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/replies/t2").send({
          delete_password: "password1234",
          reply_id: '987654321',
          thread_id: "123456789"
        }).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 400);
          assert.equal(body.message, "Invalid 'board' name - failed to delete reply!");
          done();
        });
      });
      test("Invalid 'thread_id' in delete request.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/replies/t").send({
          delete_password: "password1234",
          reply_id: '987654321',
          thread_id: "123sdfsf6789"
        }).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 400);
          assert.equal(body.message, "Invalid 'thread_id' - failed to delete reply!");
          done();
        });
      });
      test("Invalid 'reply_id' in delete request.", function (done) {
        _chai["default"].request(_index["default"])["delete"]("/api/replies/t").send({}).end(function (err, res) {
          var body = res.body;
          assert.equal(res.status, 400);
          assert.equal(body.message, "Invalid 'reply_id' - failed to delete reply!");
          done();
        });
      });
    });
  });
});
//# sourceMappingURL=2_functional-tests.js.map
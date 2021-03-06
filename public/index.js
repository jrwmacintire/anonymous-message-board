'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _dotenv = require("dotenv");

var _api = _interopRequireDefault(require("./routes/api.js"));

var _fcctesting = _interopRequireDefault(require("./routes/fcctesting"));

var _testRunner = _interopRequireDefault(require("./testing/test-runner2"));

var _index = require("./models/index");

(0, _dotenv.config)();
var runner = new _testRunner["default"]();
var runTests = runner.run; // Establish connection to MongoDB with 

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use(_helmet["default"].referrerPolicy({
  policy: 'same-origin'
}));
app.use('/public', _express["default"]["static"](process.cwd() + '/public'));
app.use((0, _cors["default"])({
  origin: '*'
})); //For FCC testing purposes only

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); //Sample front-end

app.route('/b/:board/').get(function (req, res) {
  res.sendFile(process.cwd() + '/src/views/board.html');
});
app.route('/b/:board/:threadid').get(function (req, res) {
  res.sendFile(process.cwd() + '/src/views/thread.html');
}); //Index page (static HTML)

app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/src/views/index.html');
}); //For FCC testing purposes

(0, _fcctesting["default"])(app); //Routing for API 

(0, _api["default"])(app); //Sample Front-end
//404 Not Found Middleware

app.use(function (req, res, next) {
  res.status(404).type('text').send("Not found. If you're attempting to access a board, please try something like '/api/threads/{a-z}'.");
}); //Start our server and tests!

(0, _index.connectDB)().then(function _callee() {
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.listen(process.env.PORT || 3000, function () {
            console.log("Listening on port " + process.env.PORT);

            if (process.env.NODE_ENV === 'test') {
              console.log('Running Tests...');
              setTimeout(function () {
                try {
                  runTests();
                } catch (e) {
                  var error = e;
                  console.log('Tests are not valid:');
                  console.log(error);
                }
              }, 1500);
            }
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = app; //for testing

exports["default"] = _default;
//# sourceMappingURL=index.js.map
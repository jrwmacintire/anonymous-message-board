"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _assertionAnalyser = _interopRequireDefault(require("../../assertion-analyser"));

var _events = require("events");

var _mocha = _interopRequireDefault(require("mocha"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var mocha = new _mocha["default"]();
var testDir = __dirname + '/tests'; // Add each .js file to the mocha instance.
// fs.readdirSync(testDir)
//   .filter(file => {
//     return file.substr(-3) === ".js";
//   })
//   .forEach(file => {
//     mocha.addFile(path.join(testDir, file));
//   });

_fs["default"].readdir(testDir, function (err, files) {
  files.filter(function (file) {
    return file.substr(-3) === '.js';
  }).forEach(function (file) {
    mocha.addFile(_path["default"].join(testDir, file));
  });
});

var TestEmitter =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2["default"])(TestEmitter, _EventEmitter);

  function TestEmitter() {
    var _this;

    (0, _classCallCheck2["default"])(this, TestEmitter);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TestEmitter).call(this));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "report", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "run", function () {
      // Run the tests...
      var tests = [];
      var context = "";
      var separator = " ~> ";

      try {
        var runner = mocha.ui("tdd").run().on("test end", function (test) {
          // remove comments
          var body = test.body.replace(/\/\/.*\n|\/\*.*\\/g, ""); // collapse spaces

          body = body.replace(/\s+/g, "");
          var obj = {
            title: test.title,
            context: context.slice(0, -separator.length),
            state: test.state,
            body: body,
            assertions: (0, _assertionAnalyser["default"])(body)
          };
          tests.push(obj);
        }).on("end", function () {
          _this.report = tests;

          _this.emit("done", tests);
        }).on("suite", function (s) {
          context += s.title + separator;
        }).on("suite end", function (s) {
          context = context.slice(0, -(s.title.length + separator.length));
        });
      } catch (err) {
        throw err;
      }
    });
    _this.report = [];
    return _this;
  }

  return TestEmitter;
}(_events.EventEmitter);

var _default = TestEmitter;
exports["default"] = _default;
//# sourceMappingURL=test-runner2.js.map
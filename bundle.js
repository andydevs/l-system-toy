/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/controls.js":
/*!*************************!*\
  !*** ./app/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controls)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Handles input controls
 */
var Controls = /*#__PURE__*/function () {
  /**
   * Construct
   * 
   * @param {object} param0 callbacks
   */
  function Controls(_ref) {
    var _ref$onRender = _ref.onRender,
        onRender = _ref$onRender === void 0 ? function () {} : _ref$onRender,
        _ref$onReset = _ref.onReset,
        onReset = _ref$onReset === void 0 ? function () {} : _ref$onReset,
        _ref$onGenerate = _ref.onGenerate,
        onGenerate = _ref$onGenerate === void 0 ? function () {} : _ref$onGenerate;

    _classCallCheck(this, Controls);

    // Inputs
    this.distanceInput = document.querySelector('#distance');
    this.angleInput = document.querySelector('#angle');
    this.radiusInput = document.querySelector('#radius');
    this.resetButton = document.querySelector('#reset');
    this.generateButton = document.querySelector('#generate'); // Bind callbacks

    var bOnRender = onRender.bind(this);
    var bOnReset = onReset.bind(this);
    var bOnGenerate = onGenerate.bind(this); // Add event listener

    this.distanceInput.addEventListener('change', bOnRender);
    this.angleInput.addEventListener('change', bOnRender);
    this.radiusInput.addEventListener('change', bOnRender);
    this.resetButton.addEventListener('click', bOnReset);
    this.generateButton.addEventListener('click', bOnGenerate); // Initial render call

    bOnRender();
  }
  /**
   * Get distance value
   */


  _createClass(Controls, [{
    key: "distance",
    get: function get() {
      return parseInt(this.distanceInput.value);
    }
    /**
     * Get angle value
     */

  }, {
    key: "angle",
    get: function get() {
      return parseInt(this.angleInput.value);
    }
    /**
     * Get radius value
     */

  }, {
    key: "radius",
    get: function get() {
      return parseInt(this.radiusInput.value);
    }
  }]);

  return Controls;
}();



/***/ }),

/***/ "./app/lsystem.js":
/*!************************!*\
  !*** ./app/lsystem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LSystem)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Contains information and logic for
 * generating turtle lang strings via
 * an L-System
 */
var LSystem = /*#__PURE__*/function () {
  /**
   * Constructor
   * 
   * @param {object} param0 L-System options
   */
  function LSystem(_ref) {
    var _ref$axiom = _ref.axiom,
        axiom = _ref$axiom === void 0 ? '' : _ref$axiom,
        _ref$productions = _ref.productions,
        productions = _ref$productions === void 0 ? {} : _ref$productions;

    _classCallCheck(this, LSystem);

    this.axiom = axiom;
    this.productions = productions;
    this.reset();
  }
  /**
   * Reset current L-System state
   */


  _createClass(LSystem, [{
    key: "reset",
    value: function reset() {
      this.string = this.axiom;
    }
    /**
     * Run generation routine on new string
     */

  }, {
    key: "generate",
    value: function generate() {
      var old = this.string;
      this.string = '';

      var _iterator = _createForOfIteratorHelper(old),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          this.string += this._processCommand(c);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // PRIVATE

    /**
     * Process command character
     * 
     * @param {char} c command character
     * 
     * @returns corresponding production string
     */

  }, {
    key: "_processCommand",
    value: function _processCommand(c) {
      if (this.productions.hasOwnProperty(c)) {
        if (this.productions[c] instanceof Array) {
          var index = Math.floor(Math.random() * this.productions[c].length);
          return this.productions[c][index];
        } else {
          return this.productions[c];
        }
      } else {
        return c;
      }
    }
  }]);

  return LSystem;
}();



/***/ }),

/***/ "./app/screen.js":
/*!***********************!*\
  !*** ./app/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./app/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
 // Color map

var colors = {
  'k': 'black',
  'r': 'red',
  'o': 'orange',
  'y': '#aa0',
  'g': 'green',
  'b': 'blue',
  'v': '#a0a',
  'n': '#530'
};
/**
 * Wrapper around canvas to make it easier to
 * draw objects around canvas
 */

var Screen = /*#__PURE__*/function () {
  /**
   * Construct screen around canvas
   * 
   * @param {string} selector html selctor of canvas object
   */
  function Screen(selector) {
    _classCallCheck(this, Screen);

    this.canvas = document.querySelector(selector);
    this.ctx = this.canvas.getContext('2d');
    this.shift = 0.98;
  }
  /**
   * Clear screen
   */


  _createClass(Screen, [{
    key: "clear",
    value: function clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    /**
     * Converts vector from world coords to screen coords
     * 
     * @param {Vector} v input vector in world coords
     * 
     * @returns vector converted to screen coords
     */

  }, {
    key: "center",
    value: function center(v) {
      return new _vector__WEBPACK_IMPORTED_MODULE_0__.default(Math.round(this.canvas.width / 2) + v.x, Math.round(this.shift * this.canvas.height) - v.y);
    }
    /**
     * Draw line on screen
     * 
     * @param {Vector} fm from vector
     * @param {Vector} to to vector
     * @param {string} c color
     * @param {int} w line width
     */

  }, {
    key: "drawLine",
    value: function drawLine(fm, to) {
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'k';
      var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var fmc = this.center(fm);
      var toc = this.center(to);
      this.ctx.strokeStyle = colors[c];
      this.ctx.lineWidth = w;
      this.ctx.beginPath();
      this.ctx.moveTo(fmc.x, fmc.y);
      this.ctx.lineTo(toc.x, toc.y);
      this.ctx.stroke();
      this.ctx.lineWidth = 1;
    }
    /**
     * Draw circle on screen
     * 
     * @param {Vector} ct circle center
     * @param {int} r circle radius
     * @param {string} c circle color
     */

  }, {
    key: "drawCircle",
    value: function drawCircle(ct, r) {
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'k';
      var cc = this.center(ct);
      this.ctx.strokeStyle = colors[c];
      this.ctx.beginPath();
      this.ctx.arc(cc.x, cc.y, r, 0, 2 * Math.PI);
      this.ctx.stroke();
    }
  }]);

  return Screen;
}();



/***/ }),

/***/ "./app/turtle.js":
/*!***********************!*\
  !*** ./app/turtle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Turtle)
/* harmony export */ });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./app/vector.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */
 // Default turtle state

var DEFAULT_STATE = {
  pos: new _vector__WEBPACK_IMPORTED_MODULE_0__.default(0, 0),
  angle: 90,
  color: 'k',
  thickness: 1
}; // Default turtle param configuration

var DEFAULT_CONFIG = {
  distance: 100,
  angle: 30,
  radius: 1
};
/**
 * Turtle system that processes 
 * turtle lang and draws on
 * the attached screen
 */

var Turtle = /*#__PURE__*/function () {
  /**
   * Construct turtle
   * 
   * @param {Screen} screen screen to attach this turtle to
   */
  function Turtle(screen) {
    _classCallCheck(this, Turtle);

    this.screen = screen;
    this.config = Object.assign({}, DEFAULT_CONFIG);
    this.state = Object.assign({}, DEFAULT_STATE);
    this.stack = [];
  }
  /**
   * Runs the turtle lang string and draws the respective
   * shape on the screen
   * 
   * @param {string} string turtle lang string to process
   */


  _createClass(Turtle, [{
    key: "process",
    value: function process(string) {
      var _iterator = _createForOfIteratorHelper(string),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;

          switch (c) {
            case 'F':
              this.forwardLine();
              break;

            case 'f':
              this.forward();
              break;

            case '+':
              this.left();
              break;

            case '-':
              this.right();
              break;

            case '[':
              this.push();
              break;

            case ']':
              this.pop();
              break;

            case '(':
              this.thicker();
              break;

            case ')':
              this.thinner();
              break;

            case 'C':
              this.circle();
              break;

            case 'k':
              this.color('k');
              break;

            case 'r':
              this.color('r');
              break;

            case 'o':
              this.color('o');
              break;

            case 'y':
              this.color('y');
              break;

            case 'g':
              this.color('g');
              break;

            case 'b':
              this.color('b');
              break;

            case 'v':
              this.color('v');
              break;

            case 'n':
              this.color('n');
              break;

            default:
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Clear screen and reset turtle state
     */

  }, {
    key: "reset",
    value: function reset() {
      this.screen.clear();
      this.state = Object.assign({}, DEFAULT_STATE);
      this.stack = [];
    }
    /**
     * Push current state to stack
     */

  }, {
    key: "push",
    value: function push() {
      this.stack.push(Object.assign({}, this.state));
    }
    /**
     * Pop last stack state
     */

  }, {
    key: "pop",
    value: function pop() {
      this.state = this.stack.pop();
    }
    /**
     * Increase line thickness
     */

  }, {
    key: "thicker",
    value: function thicker() {
      this.state.thickness += 1;
    }
    /**
     * Decrease line thickness
     */

  }, {
    key: "thinner",
    value: function thinner() {
      this.state.thickness -= 1;
    }
    /**
     * Set color of line
     * 
     * @param {string} col new line color
     */

  }, {
    key: "color",
    value: function color(col) {
      this.state.color = col;
    }
    /**
     * Turn left
     */

  }, {
    key: "left",
    value: function left() {
      this.state.angle += this.config.angle;
    }
    /**
     * Turn right
     */

  }, {
    key: "right",
    value: function right() {
      this.state.angle -= this.config.angle;
    }
    /**
     * Go forward but don't draw line
     */

  }, {
    key: "forward",
    value: function forward() {
      this.state.pos = this._nextPos();
    }
    /**
     * Go forward and draw line
     */

  }, {
    key: "forwardLine",
    value: function forwardLine() {
      var newpos = this._nextPos();

      this.screen.drawLine(this.state.pos, newpos, this.state.color, this.state.thickness);
      this.state.pos = newpos;
    }
    /**
     * Create a circle
     */

  }, {
    key: "circle",
    value: function circle() {
      var center = this._posAt(this.config.radius);

      this.screen.drawCircle(center, this.config.radius, this.state.color);
    } // PRIVATE

    /**
     * The position of the turtle if it had traveled the given distance
     * 
     * @param {float} distance distance to travel
     * 
     * @returns position of turtle if it traveled the given distance
     */

  }, {
    key: "_posAt",
    value: function _posAt(distance) {
      return this.state.pos.add(_vector__WEBPACK_IMPORTED_MODULE_0__.default.polar(this.state.angle, distance));
    }
    /**
     * The next positon of the turtle after a forward or forwardLine command
     * 
     * @returns next positon of the turtle after a forward or forwardLine command
     */

  }, {
    key: "_nextPos",
    value: function _nextPos() {
      return this._posAt(this.config.distance);
    }
  }]);

  return Turtle;
}();



/***/ }),

/***/ "./app/vector.js":
/*!***********************!*\
  !*** ./app/vector.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */

/**
 * Basic 2D vector class
 */
var Vector = /*#__PURE__*/function () {
  _createClass(Vector, null, [{
    key: "polar",

    /**
     * Return vector created from polar coords
     * 
     * @param {float} th theta angle in degrees
     * @param {float} r radius of vector
     * 
     * @returns Vector from polar coords
     */
    value: function polar(th) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var thr = th * Math.PI / 180;
      return new Vector(Math.cos(thr), Math.sin(thr)).scale(r);
    }
    /**
     * Construct vector from x and y components
     * 
     * @param {float} x x value of vector
     * @param {float} y y value of vector
     */

  }]);

  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }
  /**
   * Add other vector to this vector and return result
   * 
   * @param {Vector} other other vector to add
   * 
   * @returns sum of both vectors
   */


  _createClass(Vector, [{
    key: "add",
    value: function add(other) {
      return new Vector(this.x + other.x, this.y + other.y);
    }
    /**
     * Scale vector by scalar and return result
     * 
     * @param {float} scalar scalar value
     * 
     * @returns scaled vector
     */

  }, {
    key: "scale",
    value: function scale(scalar) {
      return new Vector(this.x * scalar, this.y * scalar);
    }
  }]);

  return Vector;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Generate L-systems\n * \n * Author:  Anshul Kharbanda\n * Created: 6-5-2021\n */\n* {\n  font-family: 'Segoe UI',  Tahoma, Geneva,  Verdana, sans-serif; }\n\nbody {\n  margin: 0; }\n\n#app-root {\n  margin: auto;\n  max-width: fit-content; }\n\n#mycanvas {\n  margin: 0;\n  border: 1px solid #ccc;\n  max-width: 100%; }\n\n#controls {\n  margin-left: auto; }\n  #controls tr td:first-child {\n    text-align: right; }\n", "",{"version":3,"sources":["webpack://./app/style/main.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACI,8DAEuB,EAAA;;AAG3B;EACI,SAAS,EAAA;;AAGb;EACI,YAAY;EACZ,sBAAsB,EAAA;;AAG1B;EACI,SAAS;EACT,sBAAsB;EACtB,eAAe,EAAA;;AAGnB;EACI,iBAAiB,EAAA;EADrB;IAGQ,iBAAiB,EAAA","sourcesContent":["/**\n * Generate L-systems\n * \n * Author:  Anshul Kharbanda\n * Created: 6-5-2021\n */\n* {\n    font-family: 'Segoe UI', \n        Tahoma, Geneva, \n        Verdana, sans-serif;\n}\n\nbody {\n    margin: 0;\n}\n\n#app-root {\n    margin: auto;\n    max-width: fit-content;\n}\n\n#mycanvas {\n    margin: 0;\n    border: 1px solid #ccc;\n    max-width: 100%;\n}\n\n#controls {\n    margin-left: auto;\n    tr td:first-child {\n        text-align: right;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./app/style/main.scss":
/*!*****************************!*\
  !*** ./app/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/style/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./app/style/main.scss");
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen */ "./app/screen.js");
/* harmony import */ var _turtle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./turtle */ "./app/turtle.js");
/* harmony import */ var _lsystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lsystem */ "./app/lsystem.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./app/controls.js");
/**
 * Generate L-systems
 * 
 * Author:  Anshul Kharbanda
 * Created: 6-5-2021
 */




 // Setup screen, turtle, and lsystem

var screen = new _screen__WEBPACK_IMPORTED_MODULE_1__.default('#mycanvas');
var turtle = new _turtle__WEBPACK_IMPORTED_MODULE_2__.default(screen);
var lsystem = new _lsystem__WEBPACK_IMPORTED_MODULE_3__.default({
  axiom: 'gFC',
  productions: {
    'g': 'n',
    'r': 'n',
    'y': 'b',
    'b': 'v',
    'v': 'n',
    'F': ['(F)[g+F+FC][g-F-FC](F)', '(F)[g+F-FC][g-F+FC](F)', '(F)[g+F+FC](F)', '(F)[g+F-FC](F)', '(F)[g-F-FC](F)', '(F)[g-F+FC](F)', '(FF)']
  }
});
var controls = new _controls__WEBPACK_IMPORTED_MODULE_4__.default({
  onRender: function onRender() {
    turtle.config.distance = this.distance;
    turtle.config.angle = this.angle;
    turtle.config.radius = this.radius;
    turtle.reset();
    turtle.process(lsystem.string);
  },
  onGenerate: function onGenerate() {
    lsystem.generate();
    turtle.reset();
    turtle.process(lsystem.string);
  },
  onReset: function onReset() {
    lsystem.reset(), turtle.reset();
    turtle.process(lsystem.string);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Bird {\n  constructor(canvas) {\n    this.velocity = 0\n    this.dimensions = canvas;\n    this.y = this.dimensions.height / 2;\n    this.x = this.dimensions.width / 3;\n  }\n\n\n  drawbird(ctx){\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGTH)\n  }\n\n  move() {\n    this.y += this.velocity\n    this.velocity += CONSTANTS.GRAVITY;\n  }\n\n  flap() {\n    this.velocity = CONSTANTS.FLAP_SPEED;\n  }\n\n  getBounds() {\n    let bounds = {\n      topLeft: [this.x, this.y],\n      bottomRight: [this.x + CONSTANTS.BIRD_WIDTH, this.y + CONSTANTS.BIRD_HEIGTH],\n    }\n\n    return bounds\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawbird(ctx);\n  }\n\n}\n\nconst CONSTANTS = {\n  GRAVITY: 0.4,\n  FLAP_SPEED: -8,\n  TERMINAL_VELOCITY: 12,\n  BIRD_WIDTH: 40,\n  BIRD_HEIGTH: 30\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bird);\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass Game {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.events();\n    this.restart();\n    this.score = 0\n  }\n\n  showScore(ctx, score) {\n    ctx.font = \"40px Georgia\";\n    ctx.fillText(\"Score: \" + score, 10, 50);\n  }\n  \n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  events() {\n    this.ctx.canvas.addEventListener('mousedown', this.click.bind(this));\n  }\n\n  updateScore() {\n    if (this.level.updateScore(this.bird.getBounds())) this.score += 1;\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n    this.updateScore();\n    this.showScore(this.ctx, this.score)\n    this.stillPlaying();\n    if (this.running === true) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  \n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    } else {\n      this.bird.flap();\n    }\n  }\n\n  stillPlaying() {\n    // debugger\n    if (this.level.collidesWith(this.bird.getBounds()) === true) {\n      alert('You lose');\n      this.restart();\n    }\n  }\n  \n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [\n      { x: 400, y: this.generateGap(), passed: false},\n      { x: 620, y: this.generateGap(), passed: false},\n      { x: 840, y: this.generateGap(), passed: false},\n    ];\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n  \n\n  collidesWith(bounds) {\n    let ltx = bounds.topLeft[0];\n    let lty = bounds.topLeft[1];\n    let over = false;\n    this.pipes.forEach(pipe => {\n      \n      //check collision with top pipe\n      if (ltx < pipe.x + PIPE_DIMS.PIPE_THICKNESS &&\n          ltx + 40 > pipe.x &&\n          lty < pipe.y) {\n            over = true;\n\n      //check collision with bottom pipe\n      } else if (ltx < pipe.x + PIPE_DIMS.PIPE_THICKNESS &&\n                 ltx + 40 > pipe.x &&\n                 lty + 30 > pipe.y + 150) {\n            over = true;\n      }\n      //check bird outside page\n      else if (lty + 30 < 0 || lty > 640) {\n            over = true;\n      }\n    });\n    return over;\n  }\n  \n  updateScore(bounds) {\n    let score = false\n    if (bounds.topLeft[0] > this.pipes[0].x + 50 && !this.pipes[0].passed) {\n      this.pipes[0].passed = true;\n      score = true;\n    }\n    return score\n  }\n\n  //CREATE PIPES\n\n  generateNewPipe() {\n    return {x: (this.pipes[2].x + PIPE_DIMS.PIPE_BETWEEN), y: this.generateGap(), passed: false}\n  }\n  \n  generateGap() {\n    return Math.floor((Math.random() * 335) + 65);\n  }\n  \n  drawPipes(ctx) {\n    let pthick = PIPE_DIMS.PIPE_THICKNESS;\n    \n    ctx.fillStyle = \"green\";\n    this.pipes.forEach(pipe => {\n      ctx.fillRect(pipe.x, 0, 50, pipe.y);\n      ctx.fillRect(pipe.x, pipe.y + PIPE_DIMS.PIPE_GAP, pthick, 1000);\n    });\n  }\n  \n  movePipes() {\n    this.pipes.forEach (el => {\n      el.x -= 1;\n      if (el.x < PIPE_DIMS.PIPE_THICKNESS * -1) {\n        this.pipes.push(this.generateNewPipe());\n        this.pipes.shift();\n      }\n    });\n  }\n\n  //ANIMATE\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.movePipes(ctx);\n    this.drawPipes(ctx);\n  }\n\n}\n\nconst PIPE_DIMS = {\n  PIPE_THICKNESS: 50,\n  PIPE_GAP: 150,\n  PIPE_BETWEEN: 220,\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });
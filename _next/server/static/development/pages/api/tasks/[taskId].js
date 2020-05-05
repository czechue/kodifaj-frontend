module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middlewares/database.ts":
/*!*********************************!*\
  !*** ./middlewares/database.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return database; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_user_user_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user/user.schema */ "./models/user/user.schema.ts");
/* harmony import */ var _models_task_task_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/task/task.schema */ "./models/task/task.schema.ts");



async function database(req, res, next) {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    return next();
  }

  await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect('mongodb://mo1272_kodifaj:Fender15!@195.167.159.159:27017/mo1272_kodifaj', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  return next();
}

/***/ }),

/***/ "./middlewares/middleware.ts":
/*!***********************************!*\
  !*** ./middlewares/middleware.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./middlewares/database.ts");


const middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()(); // type Middleware = NextConnect | RequestHandler;

middleware.use(_database__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),

/***/ "./models/solution/solutions.schema.ts":
/*!*********************************************!*\
  !*** ./models/solution/solutions.schema.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const solutionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  repo: String,
  demo: String,
  comment: String,
  phase: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  _task: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'tasks'
  },
  _user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'User'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Solution || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Solution', solutionSchema));

/***/ }),

/***/ "./models/task/task.schema.ts":
/*!************************************!*\
  !*** ./models/task/task.schema.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const TaskSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  images: [String],
  tips: [String],
  tags: [String],
  title: String,
  _user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
    ref: 'User'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Task || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Task', TaskSchema));

/***/ }),

/***/ "./models/user/user.schema.ts":
/*!************************************!*\
  !*** ./models/user/user.schema.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  login: String,
  githubId: String,
  photo: String
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema));

/***/ }),

/***/ "./pages/api/tasks/[taskid].ts":
/*!*************************************!*\
  !*** ./pages/api/tasks/[taskid].ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middlewares/middleware */ "./middlewares/middleware.ts");
/* harmony import */ var _models_task_task_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/task/task.schema */ "./models/task/task.schema.ts");
/* harmony import */ var _models_solution_solutions_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/solution/solutions.schema */ "./models/solution/solutions.schema.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__["default"]);
handler.get(async (req, res) => {
  try {
    const task = await _models_task_task_schema__WEBPACK_IMPORTED_MODULE_2__["default"].findById(req.query.taskid).populate('_user');
    const solutions = await _models_solution_solutions_schema__WEBPACK_IMPORTED_MODULE_3__["default"].find({
      _task: req.query.taskid
    }).populate('_user');
    return Promise.all([task, solutions]).then(([taskRes, solutionsRes]) => {
      return res.send(_objectSpread({}, taskRes === null || taskRes === void 0 ? void 0 : taskRes._doc, {
        solutions: solutionsRes
      }));
    });
  } catch (error) {
    res.status(400).json(error);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/api/tasks/[taskid].ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jundymek/dev/kodifaj/kodifaj-frontend/pages/api/tasks/[taskid].ts */"./pages/api/tasks/[taskid].ts");


/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ })

/******/ });
//# sourceMappingURL=[taskid].js.map

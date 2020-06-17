module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f+tf");


/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "D0eB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./components/header/hamburger/Hamburger.tsx
var __jsx = external_react_default.a.createElement;



const Hamburger = ({
  isOpen,
  toogle
}) => {
  const buttonStyles = external_clsx_default()('md:hidden z-10', isOpen && 'fixed right-0 mr-4');
  const buttonStylesTop = external_clsx_default()('hamburger-bar', isOpen && 'transform rotate-45 -translate-x-00 translate-y-2');
  const buttonStylesMiddle = external_clsx_default()('hamburger-bar-middle', isOpen && 'transform opacity-0');
  const buttonStylesBottom = external_clsx_default()('hamburger-bar', isOpen && 'transform -rotate-45 translate-x-00 -translate-y-2');
  return __jsx("button", {
    className: buttonStyles,
    onClick: toogle
  }, __jsx("div", {
    className: buttonStylesTop
  }), __jsx("div", {
    className: buttonStylesMiddle
  }), __jsx("div", {
    className: buttonStylesBottom
  }));
};

/* harmony default export */ var hamburger_Hamburger = (Hamburger);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./components/context/UserContext.tsx
var UserContext = __webpack_require__("G9JG");

// CONCATENATED MODULE: ./components/header/navDesktop/NavDesktop.tsx
var NavDesktop_jsx = external_react_default.a.createElement;





const NavDesktop = () => {
  const user = Object(UserContext["b" /* useUser */])();
  return NavDesktop_jsx("nav", {
    className: "flex"
  }, NavDesktop_jsx("ul", {
    className: "flex text-sm capitalize text-gray-700 font-medium justify-center items-center"
  }, NavDesktop_jsx("li", {
    className: "hover:text-red-500 transition-colors duration-200"
  }, NavDesktop_jsx(link_default.a, {
    href: "/"
  }, NavDesktop_jsx("a", {
    className: ""
  }, "zadania"))), NavDesktop_jsx("li", {
    className: "pl-8 hover:text-red-500 transition-colors duration-200"
  }, NavDesktop_jsx(link_default.a, {
    href: "/"
  }, NavDesktop_jsx("a", {
    className: ""
  }, "ranking"))), NavDesktop_jsx("li", {
    className: "pl-8 hover:text-red-500 transition-colors duration-200"
  }, NavDesktop_jsx(link_default.a, {
    href: "/"
  }, NavDesktop_jsx("a", {
    className: ""
  }, "pomoc"))), NavDesktop_jsx("span", {
    className: "pl-8"
  }, "|"), NavDesktop_jsx("li", {
    className: "pl-8 hover:text-red-500 transition-colors duration-200 flex items-center"
  }, user ? NavDesktop_jsx("span", null, user.login) : NavDesktop_jsx(external_react_default.a.Fragment, null, NavDesktop_jsx(link_default.a, {
    href: "/login"
  }, NavDesktop_jsx("a", {
    className: ""
  }, "rejestracja")), NavDesktop_jsx(fa_["FaGithub"], {
    className: "ml-2 text-2xl"
  })))));
};

/* harmony default export */ var navDesktop_NavDesktop = (NavDesktop);
// CONCATENATED MODULE: ./components/header/navMobile/NavMobile.tsx
var NavMobile_jsx = external_react_default.a.createElement;






const NavMobile = ({
  isOpen
}) => {
  const user = Object(UserContext["b" /* useUser */])();
  const navStyles = external_clsx_default()('text-gray-700 fixed w-0 top-0 left-0 transition-all duration-500 bg-gray-300 h-full overflow-x-hidden', isOpen && 'w-full');
  return NavMobile_jsx("nav", {
    className: navStyles
  }, NavMobile_jsx("ul", {
    className: "flex flex-col h-full text-2xl sm:text-4xl capitalize font-medium justify-center items-center"
  }, NavMobile_jsx("li", {
    className: "hover:text-gray-900 hover:text-red-500 transition-colors duration-200"
  }, NavMobile_jsx(link_default.a, {
    href: "/"
  }, NavMobile_jsx("a", {
    className: ""
  }, "zadania"))), NavMobile_jsx("li", {
    className: "hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8"
  }, NavMobile_jsx(link_default.a, {
    href: "/"
  }, NavMobile_jsx("a", {
    className: ""
  }, "ranking"))), NavMobile_jsx("li", {
    className: "hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8"
  }, NavMobile_jsx(link_default.a, {
    href: "/"
  }, NavMobile_jsx("a", {
    className: ""
  }, "pomoc"))), NavMobile_jsx("span", {
    className: "pt-6 border-gray-600 border-b w-6/12"
  }), NavMobile_jsx("li", {
    className: "hover:text-gray-900 hover:text-red-500 transition-colors duration-200 pt-8 flex items-center"
  }, user ? NavMobile_jsx("span", null, user.login) : NavMobile_jsx(external_react_default.a.Fragment, null, NavMobile_jsx(link_default.a, {
    href: "/login"
  }, NavMobile_jsx("a", {
    className: ""
  }, "rejestracja")), NavMobile_jsx(fa_["FaGithub"], {
    className: "pl-2 text-4xl sm:text-6xl"
  })))));
};

/* harmony default export */ var navMobile_NavMobile = (NavMobile);
// CONCATENATED MODULE: ./components/header/Header.tsx
var Header_jsx = external_react_default.a.createElement;






const Header = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);

  const toogle = () => {
    setIsOpen(prevState => !prevState);
  };

  return Header_jsx("header", {
    className: "relative px-4 py-2 flex flex-wrap justify-between bg-gray-300 border-b border-gray-400 w-full items-center z-10"
  }, Header_jsx("h1", null, Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("img", {
    className: "w-24",
    src: "/logo.png",
    alt: "Kodifaj"
  }))), Header_jsx("div", {
    className: "flex items-center md:hidden"
  }, Header_jsx(hamburger_Hamburger, {
    isOpen: isOpen,
    toogle: toogle
  }), Header_jsx(navMobile_NavMobile, {
    isOpen: isOpen
  })), Header_jsx("div", {
    className: "hidden md:block"
  }, Header_jsx(navDesktop_NavDesktop, null)));
};

/* harmony default export */ var header_Header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "G9JG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);
function UserProvider({
  children,
  user = {
    githubId: '',
    login: '',
    photo: ''
  }
}) {
  return __jsx(UserContext.Provider, {
    value: user
  }, children);
}
function useUser() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserContext);

  if (context === undefined) {
    throw Error('useAppState must be used within a AppStateProvider');
  }

  return context;
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PCLr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/stars/utils/getStarType/getStarType.ts
let StarType;

(function (StarType) {
  StarType["Full"] = "FULL";
  StarType["Half"] = "HALF";
  StarType["Empty"] = "EMPTY";
})(StarType || (StarType = {}));

function getStarType(rating, index) {
  if (index < Math.floor(rating) || index === Math.floor(rating) && rating % 1 === 1) {
    return StarType.Full;
  }

  if (index === Math.floor(rating) && rating % 1 > 0.5) {
    return StarType.Half;
  }

  return StarType.Empty;
}
// CONCATENATED MODULE: ./components/stars/star/Star.tsx
var __jsx = external_react_default.a.createElement;



const Star = ({
  type
}) => {
  if (type === StarType.Full) {
    return __jsx("img", {
      "data-testid": "full-star",
      className: "w-4 h4",
      src: "/star-full.svg",
      alt: "Full star"
    });
  }

  if (type === StarType.Half) {
    return __jsx("img", {
      "data-testid": "half-star",
      className: "w-4 h4",
      src: "/star-half.svg",
      alt: "Half star"
    });
  }

  return __jsx("img", {
    "data-testid": "gray-star",
    className: "w-4 h4",
    src: "/star-empty.svg",
    alt: "Empty star"
  });
};

/* harmony default export */ var star_Star = (Star);
// CONCATENATED MODULE: ./components/stars/Stars.tsx
var Stars_jsx = external_react_default.a.createElement;



const MAX_STARS = 5;

const Stars = ({
  rating
}) => {
  const stars = [...Array.from({
    length: MAX_STARS
  })].map((_, index) => {
    const type = getStarType(rating, index);
    return Stars_jsx(star_Star, {
      type: type,
      key: index
    });
  });
  return Stars_jsx("div", {
    className: "flex"
  }, stars, " ", Stars_jsx("span", {
    className: "ml-1 text-xs"
  }, "(", rating.toFixed(1), ")"));
};

/* harmony default export */ var stars_Stars = __webpack_exports__["a"] = (Stars);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "f+tf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/shared/layout/Layout.tsx
var Layout = __webpack_require__("fuhz");

// EXTERNAL MODULE: ./components/header/Header.tsx + 3 modules
var Header = __webpack_require__("D0eB");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./components/shared/button/Button.tsx
var __jsx = external_react_default.a.createElement;


let ButtonType;

(function (ButtonType) {
  ButtonType["Default"] = "DEFAULT";
  ButtonType["Black"] = "BLACK";
})(ButtonType || (ButtonType = {}));

const Button = ({
  children,
  type = ButtonType.Default
}) => {
  const ButtonStyles = external_clsx_default()('hover:bg-gray-100 transition-colors border h-10 w-32 md:w-40 rounded-md mx-4 shadow-sm transform translate-y-0 transition-transform duration-500 hover:-translate-y-1', type === ButtonType.Default && 'bg-white text-gray-700', type === ButtonType.Black && 'bg-gray-900 hover:bg-gray-800 text-white');
  return __jsx("button", {
    type: "button",
    className: ButtonStyles
  }, children);
};

/* harmony default export */ var button_Button = (Button);
// CONCATENATED MODULE: ./components/user/hero/Hero.tsx
var Hero_jsx = external_react_default.a.createElement;




const UserHero = ({
  login,
  photo
}) => {
  return Hero_jsx("div", {
    className: "bg-white w-full pb-12 px-4"
  }, Hero_jsx("section", {
    className: "max-w-8xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center md:px-8"
  }, Hero_jsx("div", {
    className: "flex flex-row py-8"
  }, Hero_jsx("img", {
    src: photo,
    alt: `${login} photo`,
    className: " w-16 h-16 md:w-32 md:h-32 rounded-full"
  }), Hero_jsx("div", {
    className: "flex flex-col items-start ml-6 md:ml-12 -mt-2 md:mt-2"
  }, Hero_jsx("h2", {
    className: "text-2xl md:text-4xl font-bold"
  }, login), Hero_jsx("p", {
    className: "text-xs md:text-sm text-gray-700 -mt-2"
  }, "przykladowy.email@gmail.com"), Hero_jsx("div", {
    className: "flex mt-3 items-center"
  }, Hero_jsx(fa_["FaGithub"], {
    className: "text-md mr-2"
  }), Hero_jsx("p", {
    className: "text-sm"
  }, login)))), Hero_jsx("div", {
    className: "flex justify-center items-center md:-mt-8"
  }, Hero_jsx(button_Button, {
    type: ButtonType.Black
  }, "Button2"))));
};

/* harmony default export */ var Hero = (UserHero);
// CONCATENATED MODULE: ./components/user/details/tabButton/TabButton.tsx
var TabButton_jsx = external_react_default.a.createElement;


let TabTitle;

(function (TabTitle) {
  TabTitle["tasks"] = "TASKS";
  TabTitle["solutions"] = "SOLUTIONS";
})(TabTitle || (TabTitle = {}));

const TabButton = ({
  title,
  setActiveTab,
  isActive,
  children
}) => {
  const tabButtonStyles = external_clsx_default()('w-5/12 md:w-40 border-b border-gray-300 bg-white hover:bg-gray-100 transition-colors mx-1', isActive && 'border-b-2 border-gray-900 font-bold');
  return TabButton_jsx("button", {
    type: "button",
    className: tabButtonStyles,
    onClick: () => setActiveTab(title)
  }, children);
};

/* harmony default export */ var tabButton_TabButton = (TabButton);
// EXTERNAL MODULE: ./components/listing/cards/Cards.tsx + 1 modules
var Cards = __webpack_require__("h2gO");

// CONCATENATED MODULE: ./components/user/details/tasks/Tasks.tsx
var Tasks_jsx = external_react_default.a.createElement;



const UserTasks = ({
  tasks
}) => {
  if (!tasks) {
    return null;
  }

  return Tasks_jsx(Cards["a" /* default */], {
    tasks: tasks
  });
};

/* harmony default export */ var Tasks = (UserTasks);
// EXTERNAL MODULE: ./components/stars/Stars.tsx + 2 modules
var Stars = __webpack_require__("PCLr");

// CONCATENATED MODULE: ./components/user/details/activities/Activities.tsx
var Activities_jsx = external_react_default.a.createElement;



const UserActivities = ({
  login,
  photo
}) => {
  return Activities_jsx("section", {
    className: "w-full md:w-1/3 mt-8 md:mt-0"
  }, Activities_jsx("h3", {
    className: "font-bold text-center md:hidden"
  }, "Dotychczasowa aktywno\u015B\u0107"), Activities_jsx("div", {
    className: "flex items-center justify-between px-2 mt-4"
  }, Activities_jsx("div", {
    className: "w-2/12"
  }, Activities_jsx("img", {
    src: photo,
    alt: `${login} photo`,
    className: "w-10 h-10 rounded-full mr-8"
  })), Activities_jsx("p", {
    className: "text-sm w-7/12"
  }, "Dodane nowe zadanie: ", Activities_jsx("span", {
    className: "text-blue-700"
  }, "Karuzela w czystym JS")), Activities_jsx("p", {
    className: "text-gray-700 text-xl font-thin w-2/12 text-right"
  }, "33 m")), Activities_jsx("div", {
    className: "border-b-2 mt-4 mx-2"
  }), Activities_jsx("div", {
    className: "flex items-center justify-between px-2 mt-4"
  }, Activities_jsx("div", {
    className: "w-2/12"
  }, Activities_jsx("img", {
    src: photo,
    alt: `${login} photo`,
    className: "w-10 h-10 rounded-full mr-8"
  })), Activities_jsx("p", {
    className: "text-sm w-7/12"
  }, "Dodane nowe rozwi\u0105zanie: ", Activities_jsx("span", {
    className: "text-red-700"
  }, "Karuzela w czystym JS")), Activities_jsx("p", {
    className: "text-gray-700 text-xl font-thin w-2/12 text-right"
  }, "10 h")), Activities_jsx("div", {
    className: "border-b-2 mt-4 mx-2"
  }), Activities_jsx("div", {
    className: "flex items-center justify-between px-2 mt-4"
  }, Activities_jsx("div", {
    className: "w-2/12"
  }, Activities_jsx("img", {
    src: photo,
    alt: `${login} photo`,
    className: "w-10 h-10 rounded-full mr-8"
  })), Activities_jsx("p", {
    className: "text-sm w-7/12"
  }, "Dodane nowe zadanie: ", Activities_jsx("span", {
    className: "text-blue-700"
  }, "Karuzela w czystym JS")), Activities_jsx("p", {
    className: "text-gray-700 text-xl font-thin w-2/12 text-right"
  }, "11 h")), Activities_jsx("div", {
    className: "border-b-2 mt-4 mx-2"
  }), Activities_jsx("div", {
    className: "flex items-center justify-between px-2 mt-4"
  }, Activities_jsx("div", {
    className: "w-2/12"
  }, Activities_jsx("img", {
    src: photo,
    alt: `${login} photo`,
    className: "w-10 h-10 rounded-full mr-8"
  })), Activities_jsx("div", {
    className: "text-sm w-7/12"
  }, "Oceniono zadanie: ", Activities_jsx("span", {
    className: "text-red-700"
  }, "Karuzela w czystym JS"), Activities_jsx(Stars["a" /* default */], {
    rating: 4.7
  })), Activities_jsx("p", {
    className: "text-gray-700 text-xl font-thin w-2/12 text-right"
  }, "1 d")), Activities_jsx("div", {
    className: "border-b-2 mt-4 mx-2"
  }));
};

/* harmony default export */ var Activities = (UserActivities);
// EXTERNAL MODULE: ./components/badges/Badges.tsx
var Badges = __webpack_require__("fI+o");

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// CONCATENATED MODULE: ./components/user/details/solutions/Solutions.tsx
var Solutions_jsx = external_react_default.a.createElement;





const UserSolutions = ({
  solutions,
  login,
  photo
}) => {
  console.log(solutions);
  return Solutions_jsx("section", {
    className: "w-full flex flex-col justify-center items-center"
  }, Solutions_jsx("div", {
    className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 max-w-screen-sm xl:max-w-full"
  }, solutions === null || solutions === void 0 ? void 0 : solutions.map(solution => {
    return Solutions_jsx("section", {
      key: solution,
      className: "w-full max-w-screen-sm border border-gray-400 rounded-md flex flex-col px-2 py-4 relative bg-white shadow-xs"
    }, Solutions_jsx("div", {
      className: "-mt-4"
    }, Solutions_jsx(Badges["a" /* default */], {
      tags: ['html', 'css', 'js']
    })), Solutions_jsx("div", {
      className: "flex items-center justify-between"
    }, Solutions_jsx("p", {
      className: "text-sm underline italic"
    }, "2019-10-21")), Solutions_jsx("h4", {
      className: "mt-2 mb-4 text-center text-blue-700"
    }, "Karuzela w czystym JS"), Solutions_jsx("div", {
      className: "flex justify-center md:justify-between items-center"
    }, Solutions_jsx("img", {
      src: photo,
      alt: `${login} photo`,
      className: "w-5 md:w-8 h-5 md:h-8 rounded-full mr-8 absolute top-0 left-0 ml-2 mt-4 md:mt-0 md:static "
    }), Solutions_jsx("div", {
      className: "w-full flex justify-around md:justify-end "
    }, Solutions_jsx("a", {
      href: "/",
      className: "w-32 flex justify-between items-center border-gray-400 border rounded-md p-1 text-sm md:mx-4 hover:underline"
    }, Solutions_jsx(fa_["FaGithub"], {
      className: "w-6 h-6 mr-2"
    }), "Kod \u017Ar\xF3d\u0142owy"), Solutions_jsx("a", {
      href: "/",
      className: "w-32 flex w-14 justify-between items-center border-gray-400 border rounded-md p-1 text-sm hover:underline"
    }, Solutions_jsx(md_["MdLiveTv"], {
      className: "w-6 h-6 mr-2"
    }), "Wersja live"))));
  })));
};

/* harmony default export */ var Solutions = (UserSolutions);
// CONCATENATED MODULE: ./components/user/details/Details.tsx
var Details_jsx = external_react_default.a.createElement;






const UserDetails = ({
  solutions,
  tasks,
  login,
  photo
}) => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])(TabTitle.tasks);
  return Details_jsx(external_react_default.a.Fragment, null, Details_jsx("div", {
    className: "bg-white w-full px-2 md:pl-4"
  }, Details_jsx("div", {
    className: "max-w-8xl mx-auto h-full"
  }, Details_jsx("div", {
    className: "flex justify-between"
  }, Details_jsx("div", {
    className: "w-full md:w-2/3 flex justify-center md:justify-start md:ml-4"
  }, Details_jsx(tabButton_TabButton, {
    title: TabTitle.tasks,
    setActiveTab: setActiveTab,
    isActive: activeTab === TabTitle.tasks
  }, "Zadania"), Details_jsx(tabButton_TabButton, {
    title: TabTitle.solutions,
    setActiveTab: setActiveTab,
    isActive: activeTab === TabTitle.solutions
  }, "Rozwi\u0105zania")), Details_jsx("div", {
    className: "hidden md:block md:w-1/3 md:ml-4"
  }, Details_jsx("h3", {
    className: "font-bold"
  }, "Dotychczasowa aktywno\u015B\u0107"))))), Details_jsx("div", {
    className: "max-w-8xl mx-auto px-4 pt-4"
  }, Details_jsx("div", {
    className: "flex flex-col md:flex-row"
  }, Details_jsx("div", {
    className: "w-full md:w-2/3 md:mr-4"
  }, activeTab === TabTitle.tasks ? Details_jsx(Tasks, {
    tasks: tasks
  }) : Details_jsx(Solutions, {
    solutions: solutions,
    login: login,
    photo: photo
  })), Details_jsx(Activities, {
    login: login,
    photo: photo
  }))));
};

/* harmony default export */ var Details = (UserDetails);
// CONCATENATED MODULE: ./components/user/User.tsx
var User_jsx = external_react_default.a.createElement;




const User = ({
  solutions,
  login,
  photo,
  tasks
}) => {
  return User_jsx("div", null, User_jsx(Hero, {
    login: login,
    photo: photo
  }), User_jsx(Details, {
    solutions: solutions,
    tasks: tasks,
    login: login,
    photo: photo
  }));
};

/* harmony default export */ var user_User = (User);
// CONCATENATED MODULE: ./pages/users/[userId].tsx
var _userId_jsx = external_react_default.a.createElement;





const _userId_UserDetails = ({
  user,
  tasks,
  errorCode
}) => {
  return _userId_jsx(Layout["a" /* default */], {
    title: "User page",
    errorCode: errorCode
  }, _userId_jsx(Header["a" /* default */], null), user && _userId_jsx(user_User, {
    solutions: user._solutions,
    login: user.login,
    photo: user.photo,
    tasks: tasks
  }));
};

// todo: Poprawić na odp. zapytanie z bazy
const filterTasks = (tasks, user) => {
  return tasks.filter(task => {
    if (!user || !user._tasks) {
      return null;
    }

    user._tasks.includes(task._id);
  });
};

const getServerSideProps = async ({
  params
}) => {
  const res = await fetch(`${"https://kodifaj.pl/api"}/users/${params === null || params === void 0 ? void 0 : params.userId}`);
  const res1 = await fetch(`${"https://kodifaj.pl/api"}/tasks`);
  const errorCode = res.ok ? false : res.status;

  if (!errorCode) {
    const user = await res.json();
    const tasks = await res1.json();
    return {
      props: {
        user,
        tasks: await filterTasks(tasks, user)
      }
    };
  } else return {
    props: {
      errorCode
    }
  };
};
/* harmony default export */ var _userId_ = __webpack_exports__["default"] = (_userId_UserDetails);

/***/ }),

/***/ "fI+o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Badges = ({
  tags
}) => {
  return __jsx("ul", {
    className: "list-none py-1 text-right"
  }, tags.map((tag, index) => __jsx("li", {
    className: "inline-flex w-auto px-1 bg-red-200 mr-1 mt-4 rounded-md shadow-sm w-4 items-center",
    key: index
  }, __jsx("span", {
    "data-testid": "tag",
    className: "text-xs"
  }, "/", tag))));
};

/* harmony default export */ __webpack_exports__["a"] = (Badges);

/***/ }),

/***/ "fuhz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children,
  title,
  errorCode
}) => {
  return __jsx("div", {
    className: "font-sans antialiased text-gray-900 bg-gray-200 min-h-screen"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title)), __jsx("main", {
    className: "leading-normal"
  }, __jsx("div", {
    className: "mx-auto bg-gray-200 grid grid-cols-1 sm:pb-12"
  }, children), errorCode && __jsx("div", {
    className: " -my-24"
  }, __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
    statusCode: errorCode
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h2gO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/stars/Stars.tsx + 2 modules
var Stars = __webpack_require__("PCLr");

// EXTERNAL MODULE: ./components/badges/Badges.tsx
var Badges = __webpack_require__("fI+o");

// CONCATENATED MODULE: ./components/listing/card/Card.tsx
var __jsx = external_react_default.a.createElement;





const Card = ({
  _id,
  user,
  images,
  title,
  tags,
  createdAt
}) => {
  const creationTime = createdAt.slice(0, 10);
  const userPhoto = 'https://avatars2.githubusercontent.com/u/21274642?s=400&u=d2f9f822cccbbd841e2c37e2c9b790644f51b8d8&v=4';
  const userLogin = user.login;
  return __jsx("div", {
    className: "flex flex-col items-center mt-4"
  }, __jsx(link_default.a, {
    href: "/tasks/[taskId]",
    as: `/tasks/${_id}`
  }, __jsx("a", {
    className: "w-full bg-white transform translate-y-0 shadow-sm rounded-md transition-shadow transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg overflow-hidden cursor-pointer"
  }, __jsx("section", null, __jsx("div", {
    className: "h-64 relative"
  }, __jsx("img", {
    className: "h-full w-full object-cover overflow-hidden rounded-t-md",
    src: images[0],
    alt: title
  })), __jsx("div", {
    className: "h-40 px-2 border-b-2 border-gray-200 relative flex flex-col justify-between"
  }, __jsx("div", {
    className: "absolute left-0 top-0 indent z-10"
  }, __jsx("span", {
    className: "block ml-2 -mt-3 h-8 w-8 rounded-full z-50 relative bg-cover bg-center bg-no-repeat",
    style: {
      backgroundImage: `url(${userPhoto ? userPhoto : ''})`
    }
  })), __jsx("span", {
    className: "absolute top-0 pl-12 text-gray-700 italic underline"
  }, userLogin), __jsx("h4", {
    className: "text-center pt-10 mx-1 text-md text-gray-700"
  }, title), __jsx(Badges["a" /* default */], {
    tags: tags
  })), __jsx("div", {
    className: "rounded-b-md px-3 flex justify-between items-center h-12 flex-wrap"
  }, __jsx(Stars["a" /* default */], {
    rating: 4.7
  }), __jsx("span", {
    className: "text-xs text-gray-700 italic"
  }, creationTime))))));
};

/* harmony default export */ var card_Card = (Card);
// CONCATENATED MODULE: ./components/listing/cards/Cards.tsx
var Cards_jsx = external_react_default.a.createElement;



const Cards = ({
  tasks
}) => {
  const cardsStyles = `grid grid-cols-1 sm:grid-cols-2 col-gap-4 row-gap-4 xl:grid-cols-3 xl:col-span-3 mx-4 mb-8`;
  return Cards_jsx("div", {
    className: cardsStyles
  }, tasks.map(task => {
    const {
      _id,
      user,
      images,
      title,
      tags,
      createdAt = ''
    } = task; // todo: poprawic model Usera w Tasku

    if (!user) {
      return null;
    }

    return Cards_jsx(card_Card, {
      key: _id,
      _id: _id,
      user: user,
      images: images,
      title: title,
      tags: tags,
      createdAt: createdAt
    });
  }));
};

/* harmony default export */ var cards_Cards = __webpack_exports__["a"] = (Cards);

/***/ }),

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./env.js":
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const production = 'production';
let Data;
let prodURL;

if (publicRuntimeConfig) {
  if (publicRuntimeConfig.ENV === production) {
    console.log('---------production url---------------');
    Data = {
      "baseAPIEndpoint": prodURL
    };
  } else {
    console.log(process.env.ENV, '-----dev url-----');
    Data = {
      "baseAPIEndpoint": "http://localhost:4000"
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "./env.js");
/* harmony import */ var _src_user_usercomponents_buttons_GitHubLoginButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/user/usercomponents/buttons/GitHubLoginButton */ "./src/user/usercomponents/buttons/GitHubLoginButton.tsx");
/* harmony import */ var _src_user_usercontainers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/user/usercontainers/User */ "./src/user/usercontainers/User.tsx");
/* harmony import */ var _src_home_homecomponents_HomeLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/home/homecomponents/HomeLogo */ "./src/home/homecomponents/HomeLogo.tsx");
/* harmony import */ var _styles_index_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index-styles.scss */ "./styles/index-styles.scss");
/* harmony import */ var _styles_index_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_home_homecomponents_UsefulLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/home/homecomponents/UsefulLinks */ "./src/home/homecomponents/UsefulLinks.tsx");


//for use with default fetch NextJS







const index = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_home_homecomponents_HomeLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-child"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_user_usercomponents_buttons_GitHubLoginButton__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_user_usercontainers_User__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-child"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_home_homecomponents_UsefulLinks__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
}; //use getInitialProps if you want the server to render the props.  Good for SEO


index.getInitialProps = async ({
  req
}) => {
  let users;
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: 'get',
    url: `${_env__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIEndpoint}/user/`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  }).then(res => {
    users = res.data;
  });
  return {
    users
  };
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/home/homecomponents/HomeLogo.tsx":
/*!**********************************************!*\
  !*** ./src/home/homecomponents/HomeLogo.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_home_logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/home-logo.scss */ "./src/home/homecomponents/style/home-logo.scss");
/* harmony import */ var _style_home_logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_home_logo_scss__WEBPACK_IMPORTED_MODULE_1__);



const HomeLogo = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-logo-root"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to the "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-logo-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Stack"), "Your", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Pr", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../../../static/download.png",
    className: "imgmongo"
  }), "ps")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "BoilerPlate"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLogo);

/***/ }),

/***/ "./src/home/homecomponents/UsefulLinks.tsx":
/*!*************************************************!*\
  !*** ./src/home/homecomponents/UsefulLinks.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_useful_links_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/useful-links.scss */ "./src/home/homecomponents/style/useful-links.scss");
/* harmony import */ var _style_useful_links_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_useful_links_scss__WEBPACK_IMPORTED_MODULE_1__);



const UsefulLinks = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Helpful Links"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "useful-links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.stackyourprops.com/"
  }, "Stack Your Props")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://stackoverflow.com/"
  }, "stackoverflow")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://reactjs.org/"
  }, "React Docs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://expressjs.com/"
  }, "Express Docs"))));
};

/* harmony default export */ __webpack_exports__["default"] = (UsefulLinks);

/***/ }),

/***/ "./src/home/homecomponents/style/home-logo.scss":
/*!******************************************************!*\
  !*** ./src/home/homecomponents/style/home-logo.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/home/homecomponents/style/useful-links.scss":
/*!*********************************************************!*\
  !*** ./src/home/homecomponents/style/useful-links.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/hooks/checkAuth.jsx":
/*!*********************************!*\
  !*** ./src/hooks/checkAuth.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../env */ "./env.js");




const checkAuth = url => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (url) {
      fetch(`${_env__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIEndpoint}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true // "Cookie": 'theseralkjdfasdoifthe'

        }
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      }).then(responseJson => {
        setData({
          authenticated: true,
          user: responseJson.user
        });
        setLoading(false);
      }).catch(error => {
        setData({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
    }
  }, [url]);
  return [data, loading];
};

/* harmony default export */ __webpack_exports__["default"] = (checkAuth);

/***/ }),

/***/ "./src/store/actions/userActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/userActions.js ***!
  \******************************************/
/*! exports provided: addUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
const addUser = user => ({
  type: 'ADD_USER',
  user: user,
  isAuthenticated: true
});
const logoutUser = () => ({
  type: 'LOGOUT_USER',
  user: {},
  isAuthenticated: false
});

/***/ }),

/***/ "./src/user/usercomponents/buttons/GitHubLoginButton.tsx":
/*!***************************************************************!*\
  !*** ./src/user/usercomponents/buttons/GitHubLoginButton.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions/userActions */ "./src/store/actions/userActions.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../env */ "./env.js");
/* harmony import */ var _hooks_checkAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/checkAuth */ "./src/hooks/checkAuth.jsx");
/* harmony import */ var _styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/buttons.scss */ "./src/user/usercomponents/buttons/styles/buttons.scss");
/* harmony import */ var _styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_buttons_scss__WEBPACK_IMPORTED_MODULE_6__);








const GitHubLoginButton = () => {
  //get user information if logged in
  const url = `${_env__WEBPACK_IMPORTED_MODULE_4__["default"].baseAPIEndpoint}/auth/login/success`;
  const [theseProps, loading] = Object(_hooks_checkAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(url);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(); //if user logs in send user to the store  

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (theseProps && theseProps.user) {
      dispatch(Object(_store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__["addUser"])(theseProps.user));
    }
  }, [theseProps]);
  let button; //on logout remove user from store and push to logout auth on backend

  const onClick = e => {
    e.preventDefault();
    dispatch(Object(_store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__["logoutUser"])());
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`${_env__WEBPACK_IMPORTED_MODULE_4__["default"].baseAPIEndpoint}/auth/logout`);
  }; //get user from store if there is one


  const userState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state);

  if (userState.isAuthenticated) {
    button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "githubbuttondiv",
      onClick: onClick
    }, "Logout"));
  } else if (theseProps && theseProps.user) {
    button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "githubbuttondiv",
      onClick: onClick
    }, "Logout");
  } else {
    button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: `${_env__WEBPACK_IMPORTED_MODULE_4__["default"].baseAPIEndpoint}/auth/github`,
      className: "githubbutton"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "githubbuttondiv"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../../static/git-hub.png",
      className: "img-git"
    }), "Login With GitHub"));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: '.4rem'
    }
  }, button);
};

/* harmony default export */ __webpack_exports__["default"] = (GitHubLoginButton);

/***/ }),

/***/ "./src/user/usercomponents/buttons/styles/buttons.scss":
/*!*************************************************************!*\
  !*** ./src/user/usercomponents/buttons/styles/buttons.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/user/usercontainers/User.tsx":
/*!******************************************!*\
  !*** ./src/user/usercontainers/User.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);



const User = props => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Username:  ", user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "User ID:  ", user._id), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./styles/index-styles.scss":
/*!**********************************!*\
  !*** ./styles/index-styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom\Desktop\Express Projects\current\stackyourpropsboiler\frontend\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
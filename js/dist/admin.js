module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport *//*
 * Copyright 2020 Studosi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/addSettingsPage.js":
/*!**************************************!*\
  !*** ./src/admin/addSettingsPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_settingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settingsPage */ "./src/admin/components/settingsPage.js");
/*
 * Copyright 2020 Studosi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes["studosi/mail-filter"] = {
    path: "/studosi/mail-filter",
    component: _components_settingsPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };

  app.extensionSettings["studosi/mail-filter"] = function () {
    return m.route(app.route("studosi/mail-filter"));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, "items", function (items) {
    items.add("studosi/mail-filter", flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route("studosi/mail-filter"),
      icon: "fas fa-envelope-square",
      children: app.translator.trans("studosi-mail-filter.admin.nav.title"),
      description: app.translator.trans("studosi-mail-filter.admin.nav.desc")
    }));
  });
});

/***/ }),

/***/ "./src/admin/components/settingsPage.js":
/*!**********************************************!*\
  !*** ./src/admin/components/settingsPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);


/*
 * Copyright 2020 Studosi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var key_to_id = {
  "null": 0,
  "whitelist": 1,
  "whitelist_regex": 2,
  "blacklist": 3,
  "blacklist_regex": 4
};
var id_to_key = {
  0: "null",
  1: "whitelist",
  2: "whitelist_regex",
  3: "blacklist",
  4: "blacklist_regex"
};

var SettingsPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsPage, _Page);

  function SettingsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = SettingsPage.prototype;

  _proto.init = function init() {
    this.storage = {
      "whitelist": [],
      "whitelist_regex": [],
      "blacklist": [],
      "blacklist_regex": []
    };
    app.store.find("mail_rules").then(this.loadRules.bind(this));
    this.newRules = {};
    this.isRegex = {};

    for (var _i = 0, _arr = ["whitelist", "whitelist_regex", "blacklist", "blacklist_regex"]; _i < _arr.length; _i++) {
      var key = _arr[_i];
      this.newRules[key] = {
        name: m.prop(""),
        value: m.prop("")
      };
      this.isRegex[key] = key.length > 9;
    }
  };

  _proto.getExistingBlock = function getExistingBlock(key, full_key) {
    var _this = this;

    return this.storage[key].map(function (rule) {
      return m("div", {
        className: "Rules-existing",
        style: "float: left;",
        display: "block"
      }, [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: "Rules-switch",
        state: rule.active() || false,
        onchange: _this.toggleRuleActivity.bind(_this, rule)
      }), m("input", {
        className: "FormControl Rules-name",
        value: rule.name(),
        placeholder: app.translator.trans("studosi-mail-filter.admin.settings.rule.name_placeholder"),
        oninput: m.withAttr("value", _this.updateRuleName.bind(_this, rule))
      }), m("input", {
        className: "FormControl Rules-value",
        value: rule.value(),
        placeholder: app.translator.trans(full_key + "." + "placeholder"),
        oninput: m.withAttr("value", _this.updateRuleValue.bind(_this, rule, key))
      }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        type: "button",
        className: "Button Button--warning Rules-button",
        icon: "fa fa-times",
        onclick: _this.removeRule.bind(_this, rule, key)
      })]);
    });
  };

  _proto.getNewBlock = function getNewBlock(key, full_key) {
    return m("div", {
      className: "Rules-new",
      style: "float: left; margin-bottom: 15px"
    }, [m("input", {
      className: "FormControl Rules-name",
      value: this.newRules[key].name(),
      placeholder: app.translator.trans("studosi-mail-filter.admin.settings.rule.name_placeholder"),
      oninput: m.withAttr("value", this.newRules[key].name)
    }), m("input", {
      className: "FormControl Rules-value",
      value: this.newRules[key].value(),
      placeholder: app.translator.trans(full_key + "." + "placeholder"),
      oninput: m.withAttr("value", this.newRules[key].value)
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: "button",
      className: "Button Button--warning Rules-button",
      icon: "fa fa-plus",
      onclick: this.addRule.bind(this, key)
    })]);
  };

  _proto.getBlock = function getBlock(key) {
    var full_key = "studosi-mail-filter.admin." + key;
    return [m("fieldset", {
      className: "settingsPage-" + key
    }, [m("legend", {}, app.translator.trans(full_key + "." + "label")), m("div", {
      className: "description"
    }, app.translator.trans(full_key + "." + "desc")), m("div", {
      className: "rulesContainer"
    }, this.getExistingBlock(key, full_key), this.getNewBlock(key, full_key))])];
  };

  _proto.view = function view() {
    return [m("div", {
      className: "studosiMailFilterSettingsPage"
    }, [m("h1", {
      className: "settingsHeader"
    }, "Studoši - Mail Filter"), m("div", {
      className: "filterFields"
    }, [this.getBlock("whitelist"), this.getBlock("whitelist_regex"), this.getBlock("blacklist"), this.getBlock("blacklist_regex")]) //m("div", { className: "settingsFooter" }, [])
    ])];
  };

  _proto.updateRuleName = function updateRuleName(rule, value) {
    rule.save({
      name: value
    });
  };

  _proto.updateRuleValue = function updateRuleValue(rule, key, value) {
    if (!this.isRegex[key] || this.checkRegex(value)) {
      rule.save({
        value: value
      });
    }
  };

  _proto.checkRegex = function checkRegex(value) {
    try {
      new RegExp(value);
    } catch (e) {
      alert(app.translator.trans("studosi-mail-filter.admin.error.invalid_regex"));
      return false;
    }

    return true;
  };

  _proto.toggleRuleActivity = function toggleRuleActivity(rule) {
    rule.save({
      active: !rule.active()
    });
  };

  _proto.addRule = function addRule(key, rule) {
    var _this2 = this;

    if (!this.isRegex[key] || this.checkRegex(this.newRules[key].value())) {
      app.store.createRecord("mail_rules").save({
        rule_type: key_to_id[key],
        name: this.newRules[key].name(),
        value: this.newRules[key].value(),
        active: true
      }).then(function (rule) {
        _this2.newRules[key].name("");

        _this2.newRules[key].value("");

        _this2.storage[key].push(rule);

        m.redraw();
      });
    }
  };

  _proto.removeRule = function removeRule(rule_to_remove, key) {
    var _this3 = this;

    rule_to_remove["delete"]();
    this.storage[key].some(function (rule, i) {
      if (rule.data.id === rule_to_remove.data.id) {
        _this3.storage[key].splice(i, 1);

        return true;
      }
    });
  };

  _proto.loadRules = function loadRules(rules) {
    for (var _iterator = rules, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i2 >= _iterator.length) break;
        _ref = _iterator[_i2++];
      } else {
        _i2 = _iterator.next();
        if (_i2.done) break;
        _ref = _i2.value;
      }

      var entry = _ref;
      var key = id_to_key[entry.rule_type()];
      this.storage[key].push(entry);
      m.redraw();
    }
  };

  return SettingsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addSettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addSettingsPage */ "./src/admin/addSettingsPage.js");
/* harmony import */ var _common_models_rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/models/rule */ "./src/common/models/rule.js");
/*
 * Copyright 2020 Studosi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


app.initializers.add('studosi/mail-filter', function () {
  app.store.models.mail_rules = _common_models_rule__WEBPACK_IMPORTED_MODULE_1__["default"];
  Object(_addSettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/common/models/rule.js":
/*!***********************************!*\
  !*** ./src/common/models/rule.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rule; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);


/*
 * Copyright 2020 Studosi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var Rule = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rule, _mixin);

  function Rule() {
    return _mixin.apply(this, arguments) || this;
  }

  return Rule;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  rule_type: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("rule_type"),
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("name"),
  value: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("value"),
  active: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("active")
}));



/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
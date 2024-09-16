/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/user_ldap/src/main.ts":
/*!************************************!*\
  !*** ./apps/user_ldap/src/main.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/index */ "./apps/user_ldap/src/store/index.ts");
/* harmony import */ var _LDAPSettingsApp_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LDAPSettingsApp.vue */ "./apps/user_ldap/src/LDAPSettingsApp.vue");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */





__webpack_require__.nc = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCSPNonce)();
// Init Pinia store
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(pinia__WEBPACK_IMPORTED_MODULE_4__.PiniaVuePlugin);
const LDAPSettingsAppVue = vue__WEBPACK_IMPORTED_MODULE_3__["default"].extend(_LDAPSettingsApp_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
new LDAPSettingsAppVue({
  pinia: _store_index__WEBPACK_IMPORTED_MODULE_1__.pinia
}).$mount('#content-ldap-settings');

/***/ }),

/***/ "./apps/user_ldap/src/models/index.ts":
/*!********************************************!*\
  !*** ./apps/user_ldap/src/models/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/***/ }),

/***/ "./apps/user_ldap/src/services/ldapConfigService.ts":
/*!**********************************************************!*\
  !*** ./apps/user_ldap/src/services/ldapConfigService.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConfig: () => (/* binding */ createConfig),
/* harmony export */   deleteConfig: () => (/* binding */ deleteConfig),
/* harmony export */   updateConfig: () => (/* binding */ updateConfig)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



const API_ENDPOINT = path__WEBPACK_IMPORTED_MODULE_0___default().join((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.getAppRootUrl)('user_ldap'), '/api/v1/config');
/**
 *
 * @param config
 */
async function createConfig(config) {
  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(API_ENDPOINT, config);
  return {
    configId: response.data.configId,
    config: response.data.config
  };
}
/**
 *
 * @param configId
 * @param config
 */
async function updateConfig(configId, config) {
  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(path__WEBPACK_IMPORTED_MODULE_0___default().join(API_ENDPOINT, configId), config);
  return response.data;
}
/**
 *
 * @param configId
 */
async function deleteConfig(configId) {
  await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].delete(path__WEBPACK_IMPORTED_MODULE_0___default().join(API_ENDPOINT, configId));
  return true;
}

/***/ }),

/***/ "./apps/user_ldap/src/store/config.ts":
/*!********************************************!*\
  !*** ./apps/user_ldap/src/store/config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLDAPConfigStore: () => (/* binding */ useLDAPConfigStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _services_ldapConfigService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ldapConfigService */ "./apps/user_ldap/src/services/ldapConfigService.ts");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/**
 *
 * @param {...any} args
 */
function useLDAPConfigStore(...args) {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.defineStore)('ldapconfig', {
    state: () => ({
      ldapConfigs: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('user_ldap', 'ldapConfigs'),
      defaultLdapConfig: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('user_ldap', 'ldapDefaultConfig')
    }),
    actions: {
      async create(config) {
        const {
          configId,
          config: newConfig
        } = await (0,_services_ldapConfigService__WEBPACK_IMPORTED_MODULE_1__.createConfig)(config);
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.ldapConfigs, configId, newConfig);
      },
      async delete(configId) {
        const result = await (0,_services_ldapConfigService__WEBPACK_IMPORTED_MODULE_1__.deleteConfig)(configId);
        if (result === true) {
          vue__WEBPACK_IMPORTED_MODULE_3__["default"].delete(this.ldapConfigs, configId);
        }
      },
      async update(configId, config) {
        config = await (0,_services_ldapConfigService__WEBPACK_IMPORTED_MODULE_1__.updateConfig)(configId, config);
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.ldapConfigs, configId, config);
      }
    }
  });
  return store(...args);
}

/***/ }),

/***/ "./apps/user_ldap/src/store/index.ts":
/*!*******************************************!*\
  !*** ./apps/user_ldap/src/store/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pinia: () => (/* binding */ pinia)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.createPinia)();

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _views_Settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Settings.vue */ "./apps/user_ldap/src/views/Settings.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  name: 'LDAPSettingsApp',
  components: {
    Settings: _views_Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=script&lang=ts&setup=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=script&lang=ts&setup=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_material_design_icons_ContentCopy_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/ContentCopy.vue */ "./node_modules/vue-material-design-icons/ContentCopy.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./apps/user_ldap/src/models/index.ts");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/config */ "./apps/user_ldap/src/store/config.ts");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_6__.defineComponent)({
  __name: 'ServerTab',
  props: {
    ldapConfig: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const {
      ldapConfig
    } = __props;
    const ldapConfigStore = (0,_store_config__WEBPACK_IMPORTED_MODULE_5__.useLDAPConfigStore)();
    const wizardControls = '';
    return {
      __sfc: true,
      ldapConfigStore,
      wizardControls,
      ContentCopy: vue_material_design_icons_ContentCopy_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t,
      NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__.NcButton
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=script&lang=ts&setup=true":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=script&lang=ts&setup=true ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Plus.vue */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _components_SettingsTabs_ServerTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SettingsTabs/ServerTab.vue */ "./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/config */ "./apps/user_ldap/src/store/config.ts");






// import UsersTab from '../components/SettingsTabs/UsersTab.vue'
// import LoginTab from '../components/SettingsTabs/LoginTab.vue'
// import GroupsTab from '../components/SettingsTabs/GroupsTab.vue'
// import ExpertTab from '../components/SettingsTabs/ExpertTab.vue'
// import AdvancedTab from '../components/SettingsTabs/AdvancedTab.vue'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  __name: 'Settings',
  setup(__props) {
    const selectedTab = 'server';
    const selectedConfigId = null;
    // TODO: Setup from initial state
    const ldapModuleInstalled = true;
    const ldapConfigStore = (0,_store_config__WEBPACK_IMPORTED_MODULE_4__.useLDAPConfigStore)();
    const selectedConfig = (0,vue__WEBPACK_IMPORTED_MODULE_5__.computed)(() => ldapConfigStore.ldapConfigs[selectedConfigId ?? 0] ?? {
      ...ldapConfigStore.defaultLdapConfig
    });
    const tabs = {
      server: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('user_ldap', 'Server'),
      users: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('user_ldap', 'Users'),
      login: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('user_ldap', 'Login Attributes'),
      groups: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('user_ldap', 'Groups'),
      expert: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('user_ldap', 'Expert'),
      advanced: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('user_ldap', 'Advanced')
    };
    return {
      __sfc: true,
      selectedTab,
      selectedConfigId,
      ldapModuleInstalled,
      ldapConfigStore,
      selectedConfig,
      tabs,
      Plus: vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t,
      NcCheckboxRadioSwitch: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_2__.NcCheckboxRadioSwitch,
      NcLoadingIcon: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_2__.NcLoadingIcon,
      NcSelect: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_2__.NcSelect,
      NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_2__.NcButton,
      ServerTab: _components_SettingsTabs_ServerTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=template&id=5364202e":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=template&id=5364202e ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("Settings");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=template&id=67dae0a2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=template&id=67dae0a2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("fieldset", {
    attrs: {
      id: "ldapWizard1"
    }
  }, [_c(_setup.NcButton, {
    staticClass: "ldapIconCopy icon-default-style",
    attrs: {
      id: "ldap_action_copy_configuration",
      type: "button",
      name: "ldap_action_copy_configuration",
      "aria-describedby": "ldap_action_copy_configuration_instructions",
      title: _setup.t("user_ldap", "Copy current configuration into new directory binding")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c(_setup.ContentCopy, {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("p", {
    staticClass: "hidden-visually",
    attrs: {
      id: "ldap_action_copy_configuration_instructions"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_setup.t("user_ldap", "Copy current configuration into new directory binding")) + "\n\t\t")]), _vm._v(" "), _c(_setup.NcButton, {
    staticClass: "icon-delete icon-default-style",
    attrs: {
      id: "ldap_action_delete_configuration",
      type: "button",
      "aria-describedby": "ldap_action_delete_configuration_instructions",
      name: "ldap_action_delete_configuration",
      title: _setup.t("user_ldap", "Delete the current configuration")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c(_setup.Delete, {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("p", {
    staticClass: "hidden-visually",
    attrs: {
      id: "ldap_action_delete_configuration_instructions"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_setup.t("user_ldap", "Delete the current configuration")) + "\n\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "hostPortCombinator"
  }, [_c("div", {
    staticClass: "tablerow"
  }, [_c("div", {
    staticClass: "tablecell"
  }, [_c("div", {
    staticClass: "table"
  }, [_c("NcTextField", {
    staticClass: "host",
    attrs: {
      id: "ldap_host",
      value: _vm.ldapConfig.ldapHost,
      "helper-text": _setup.t("user_ldap", "You can omit the protocol, unless you require SSL. If so, start with ldaps://"),
      placeholder: _setup.t("user_ldap", "Host"),
      autocomplete: "off"
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.ldapConfig, "ldapHost", $event);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "hostPortCombinatorSpan"
  }, [_c("input", {
    attrs: {
      id: "ldap_port",
      type: "number",
      name: "ldap_port",
      placeholder: _setup.t("user_ldap", "Port")
    }
  }), _vm._v(" "), _c(_setup.NcButton, {
    staticClass: "ldapDetectPort",
    attrs: {
      name: "ldapDetectPort"
    },
    on: {
      click: _vm.detectPort
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_setup.t("user_ldap", "Detect Port")) + "\n\t\t\t\t\t\t\t")])], 1)], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "tablerow"
  }, [_vm._v("\n \n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "tablerow"
  }, [_c("NcTextField", {
    staticClass: "tablecell",
    attrs: {
      id: "ldap_dn",
      value: _vm.ldapConfig.ldapAgentName,
      "helper-text": _setup.t("user_ldap", "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty."),
      placeholder: _setup.t("user_ldap", "User DN"),
      autocomplete: "off"
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.ldapConfig, "ldapAgentName", $event);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "tablerow"
  }, [_c("NcTextField", {
    staticClass: "tablecell",
    attrs: {
      id: "ldap_agent_password",
      type: "password",
      "helper-text": _setup.t("user_ldap", "For anonymous access, leave DN and Password empty."),
      value: _vm.ldapConfig.ldapAgentPassword,
      placeholder: _setup.t("user_ldap", "Password"),
      autocomplete: "off"
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.ldapConfig, "ldapAgentPassword", $event);
      }
    }
  }), _vm._v(" "), _c(_setup.NcButton, {
    staticClass: "ldapSaveAgentCredentials",
    attrs: {
      name: "ldapSaveAgentCredentials"
    },
    on: {
      click: function ($event) {
        return _setup.ldapConfigStore.create(_vm.ldapConfig);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_setup.t("user_ldap", "Save Credentials")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("div", {
    staticClass: "tablecell",
    attrs: {
      id: "ldap_base"
    }
  }, [_c("NcTextArea", {
    attrs: {
      label: "Text area",
      placeholder: _setup.t("user_ldap", "One Base DN per line"),
      "helper-text": "t('user_ldap', 'You can specify Base DN for users and groups in the Advanced tab')"
    }
  }), _vm._v(" "), _c(_setup.NcButton, {
    staticClass: "ldapDetectBase",
    attrs: {
      name: "ldapDetectBase",
      type: "button"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_setup.t("user_ldap", "Detect Base DN")) + "\n\t\t\t\t")]), _vm._v(" "), _c(_setup.NcButton, {
    staticClass: "ldapTestBase",
    attrs: {
      name: "ldapTestBase",
      type: "button"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_setup.t("user_ldap", "Test Base DN")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("div", {
    staticClass: "tablerow left"
  }, [_c("input", {
    staticClass: "tablecell",
    attrs: {
      id: "ldap_experienced_admin",
      type: "checkbox",
      value: "1",
      name: "ldap_experienced_admin",
      "aria-describedby": "ldap_experienced_admin_instructions",
      title: _setup.t("user_ldap", "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge.")
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "hidden-visually",
    attrs: {
      id: "ldap_experienced_admin_instructions"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_setup.t("user_ldap", "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge.")) + "\n\t\t\t\t")]), _vm._v(" "), _c("label", {
    staticClass: "tablecell",
    attrs: {
      for: "ldap_experienced_admin"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_setup.t("user_ldap", "Manually enter LDAP filters (recommended for large directories)")) + "\n\t\t\t\t")])])]), _vm._v(" "), _vm._v("\n\t\t" + _vm._s(_setup.wizardControls) + "\n\t")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=template&id=91565fbc&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=template&id=91565fbc&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("form", {
    staticClass: "section",
    attrs: {
      id: "ldap"
    }
  }, [_c("h2", [_vm._v(_vm._s(_setup.t("user_ldap", "LDAP/AD integration")))]), _vm._v(" "), _c("div", {
    staticClass: "ldap__config-selection"
  }, [_c(_setup.NcSelect, {
    attrs: {
      options: Object.values(_setup.ldapConfigStore.ldapConfigs),
      "input-label": _setup.t("user_ldap", "Select LDAP Config")
    },
    model: {
      value: _setup.selectedConfigId,
      callback: function ($$v) {
        _setup.selectedConfigId = $$v;
      },
      expression: "selectedConfigId"
    }
  }), _vm._v(" "), _c(_setup.NcButton, {
    attrs: {
      label: _setup.t("user_ldap", "Create New Config")
    },
    on: {
      click: _setup.ldapConfigStore.create
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c(_setup.Plus, {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "),  false ? 0 : _vm._e()], 1), _vm._v(" "), _setup.selectedConfig !== undefined ? _c("div", {
    attrs: {
      id: "ldapSettings"
    }
  }, [_c("div", {
    staticClass: "ldap__tab-selection"
  }, _vm._l(_setup.tabs, function (tabId, tabLabel) {
    return _c(_setup.NcCheckboxRadioSwitch, {
      key: tabId,
      attrs: {
        "button-variant": true,
        checked: _setup.selectedTab,
        value: tabId,
        name: "ldap_selected_tab",
        type: "radio",
        "button-variant-grouped": "horizontal"
      },
      on: {
        "update:checked": function ($event) {
          _setup.selectedTab = $event;
        }
      }
    }, [_vm._v("\n\t\t\t\t" + _vm._s(tabLabel) + "\n\t\t\t")]);
  }), 1), _vm._v(" "), !_setup.ldapModuleInstalled ? _c("p", {
    staticClass: "ldapwarning"
  }, [_vm._v("\n\t\t\t{{ t('user_ldap', '"), _c("b", [_vm._v("Warning:")]), _vm._v(" The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it.') }}\n\t\t")]) : _vm._e(), _vm._v(" "), _setup.selectedTab === "server" ? _c(_setup.ServerTab, {
    attrs: {
      "ldap-config": _setup.selectedConfig
    }
  }) : _vm._e()], 1) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ldap__config-selection[data-v-91565fbc] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.ldap__tab-selection[data-v-91565fbc] {
  display: flex;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/user_ldap/src/LDAPSettingsApp.vue":
/*!************************************************!*\
  !*** ./apps/user_ldap/src/LDAPSettingsApp.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LDAPSettingsApp_vue_vue_type_template_id_5364202e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LDAPSettingsApp.vue?vue&type=template&id=5364202e */ "./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=template&id=5364202e");
/* harmony import */ var _LDAPSettingsApp_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LDAPSettingsApp.vue?vue&type=script&lang=ts */ "./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=script&lang=ts");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LDAPSettingsApp_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LDAPSettingsApp_vue_vue_type_template_id_5364202e__WEBPACK_IMPORTED_MODULE_0__.render,
  _LDAPSettingsApp_vue_vue_type_template_id_5364202e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_ldap/src/LDAPSettingsApp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue":
/*!******************************************************************!*\
  !*** ./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServerTab_vue_vue_type_template_id_67dae0a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerTab.vue?vue&type=template&id=67dae0a2 */ "./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=template&id=67dae0a2");
/* harmony import */ var _ServerTab_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServerTab.vue?vue&type=script&lang=ts&setup=true */ "./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServerTab_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServerTab_vue_vue_type_template_id_67dae0a2__WEBPACK_IMPORTED_MODULE_0__.render,
  _ServerTab_vue_vue_type_template_id_67dae0a2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_ldap/src/components/SettingsTabs/ServerTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/user_ldap/src/views/Settings.vue":
/*!***********************************************!*\
  !*** ./apps/user_ldap/src/views/Settings.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_91565fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=91565fbc&scoped=true */ "./apps/user_ldap/src/views/Settings.vue?vue&type=template&id=91565fbc&scoped=true");
/* harmony import */ var _Settings_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=ts&setup=true */ "./apps/user_ldap/src/views/Settings.vue?vue&type=script&lang=ts&setup=true");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true */ "./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_91565fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_91565fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "91565fbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/user_ldap/src/views/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LDAPSettingsApp_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LDAPSettingsApp.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LDAPSettingsApp_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=script&lang=ts&setup=true":
/*!*****************************************************************************************************!*\
  !*** ./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=script&lang=ts&setup=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ServerTab_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServerTab.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=script&lang=ts&setup=true");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ServerTab_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_ldap/src/views/Settings.vue?vue&type=script&lang=ts&setup=true":
/*!**********************************************************************************!*\
  !*** ./apps/user_ldap/src/views/Settings.vue?vue&type=script&lang=ts&setup=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=ts&setup=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=script&lang=ts&setup=true");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_ts_setup_true__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=template&id=5364202e":
/*!******************************************************************************!*\
  !*** ./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=template&id=5364202e ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LDAPSettingsApp_vue_vue_type_template_id_5364202e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LDAPSettingsApp_vue_vue_type_template_id_5364202e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LDAPSettingsApp_vue_vue_type_template_id_5364202e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LDAPSettingsApp.vue?vue&type=template&id=5364202e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/LDAPSettingsApp.vue?vue&type=template&id=5364202e");


/***/ }),

/***/ "./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=template&id=67dae0a2":
/*!************************************************************************************************!*\
  !*** ./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=template&id=67dae0a2 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServerTab_vue_vue_type_template_id_67dae0a2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServerTab_vue_vue_type_template_id_67dae0a2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServerTab_vue_vue_type_template_id_67dae0a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServerTab.vue?vue&type=template&id=67dae0a2 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/components/SettingsTabs/ServerTab.vue?vue&type=template&id=67dae0a2");


/***/ }),

/***/ "./apps/user_ldap/src/views/Settings.vue?vue&type=template&id=91565fbc&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./apps/user_ldap/src/views/Settings.vue?vue&type=template&id=91565fbc&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_91565fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_91565fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_91565fbc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=91565fbc&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=template&id=91565fbc&scoped=true");


/***/ }),

/***/ "./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_91565fbc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/user_ldap/src/views/Settings.vue?vue&type=style&index=0&id=91565fbc&lang=scss&scoped=true");


/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e";

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"user_ldap-main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunknextcloud"] = globalThis["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/user_ldap/src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=user_ldap-main.js.map?v=af13bb8ed1519eefdf72
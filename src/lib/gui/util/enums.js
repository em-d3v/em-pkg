"use strict";
/**
 * @module enums
 * @desc consists of all enum variables for this library
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.control_type = exports.gui_types = void 0;
/**
 * @desc list of all gui class lists
 */
var gui_types;
(function (gui_types) {
    gui_types["GUI"] = "gui";
    gui_types["WINDOW"] = "win";
    gui_types["TAB_CONTAINER"] = "tab-pane";
    gui_types["TAB_BUTTON"] = "tab-btn";
    gui_types["TAB_PAGE"] = "tab-page";
    gui_types["TAB_BAR"] = "";
    gui_types["INPUT_GROUP"] = "";
    gui_types["LIST"] = "";
})(gui_types || (exports.gui_types = gui_types = {}));
var control_type;
(function (control_type) {
    control_type["TAB_BUTTON"] = "tab-btn";
    control_type["BUTTON"] = "gui-btn";
    control_type["CHECKBOX"] = "gui-check";
    control_type["CHAT_LOG"] = "chat-log";
})(control_type || (exports.control_type = control_type = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Entity_1 = require("./Entity1.js");
/**
 * @class Npc
 */
var Npc = /** @class */ (function (_super) {
    __extends(Npc, _super);
    function Npc(settings) {
        var _this = _super.call(this) || this;
        _this.id = settings.id || 0;
        _this.name = settings.name || "";
        _this.pos = settings.pos || { x: 0, y: 0, z: 0 };
        _this.actions = settings.actions || [];
        _this.model = settings.model || null;
        _this._trade = settings.trades || { enable: false, table: [] };
        _this._dialog = settings.dialog || { enable: false, obj: null };
        _this._mode = settings.mode || "idle";
        _this.modes = settings.modes || [];
        return _this;
    }
    Object.defineProperty(Npc.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (m) {
            this._mode = m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "modes", {
        get: function () {
            return this._modes;
        },
        set: function (m) {
            this._modes = m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "dialog", {
        get: function () {
            return this._dialog;
        },
        set: function (d) {
            this._dialog = d;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "trades", {
        get: function () {
            if (this._trade.enable === false)
                return false;
            else
                return this._trade;
        },
        set: function (d) {
            this.trades = d;
        },
        enumerable: false,
        configurable: true
    });
    Npc.prototype.render = function () {
    };
    Npc.prototype.update = function () {
    };
    Npc.prototype.onAction = function (action, target, callback) {
        return undefined;
    };
    Npc.prototype.onMode = function (mode, callback) {
        return undefined;
    };
    return Npc;
}(Entity1["default"]));
exports["default"] = Npc;

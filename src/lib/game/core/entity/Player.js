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
 * @class Player
 * @classdesc Player Entity1
 *
 */
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super.call(this) || this;
    }
    Player.prototype.render = function () {
    };
    Player.prototype.update = function () {
    };
    Player.prototype.teleport = function (pos) {
    };
    Player.prototype.onAction = function (action, target, callback) {
        return undefined;
    };
    return Player;
}(Entity1["default"]));
exports["default"] = Player;

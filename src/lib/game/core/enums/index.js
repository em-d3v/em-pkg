"use strict";
exports.__esModule = true;
exports.NpcMode = void 0;
var NpcMode;
(function (NpcMode) {
    NpcMode[NpcMode["Idle"] = 0] = "Idle";
    NpcMode[NpcMode["COMBAT"] = 1] = "COMBAT";
    NpcMode[NpcMode["QUEST"] = 2] = "QUEST";
    NpcMode[NpcMode["FOLLOW"] = 3] = "FOLLOW";
})(NpcMode || (NpcMode = {}));
exports.NpcMode = NpcMode;
var DialogType;
(function (DialogType) {
    DialogType[DialogType["SIMPLE"] = 0] = "SIMPLE";
    DialogType[DialogType["QUEST"] = 1] = "QUEST";
    DialogType[DialogType["STORY"] = 2] = "STORY";
})(DialogType || (DialogType = {}));

enum NpcType {
    /** Normal - Player can Talk/Trade */
    NORMAL="normal",
    //
    ALLY="ally",
    // Player can fight the
    ENEMY="enemy",
    OTHER="other"
}
enum ItemType {
    CONSUMABLE,
    WEAPON,
    QUEST,
    COLLECTABLE
}
enum NpcMode {
    IDLE, COMBAT, QUEST, FOLLOW,
}
enum DialogType {SIMPLE,QUEST,STORY, OTHER}
enum InteractType {TRADE, TALK, FIGHT}


export {NpcMode, NpcType, ItemType, DialogType, InteractType}
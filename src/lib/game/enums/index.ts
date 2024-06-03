enum NpcMode {
    Idle, COMBAT, QUEST, FOLLOW,
}

type npc = {
    dialog: {
        enabled: boolean,
        list: []
    }
    trade: {
        enabled: boolean,
        trades: []
    }

}
type dialog={
    id:number|string
    title: string,

}
enum DialogType {SIMPLE,QUEST,STORY}

export {NpcMode, npc}
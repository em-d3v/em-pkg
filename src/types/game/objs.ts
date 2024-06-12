export type id = string | number
type buff = "buff"
/** */
export type effect = {
  id?: id,
  name?: string
  type: string
  targets: string[]
}
/** item object */
export type item = {
  /**Item id*/
  id: number | string
  /**Item Name */
  name: string
  /** Item description */
  description: string[]
  /**
   *  */
  stackable: boolean
  /** custom item stats */
  stats: Object
  /** event that triggers when item is used */
  onuse: (param: any) => Event
}
/**
 * dialog object type
 */
export type dialog = {
  /** dialog id  */
  id: number | string
  /** */
  title: string,
  /** @see */
  type: string
  options: []
}
export type npc = {
  /** */
  id: number | string,
  /** */
  name: string,
  /** */
  dialog: {
    enabled: boolean,
    list: []
  }
  dialogs: [],
  trade: {
    enabled: boolean,
    trades: []
  }
}
/**
 * for trade tables
 */
export type trade = {
  name?: string
}
/**
 * for quest tables
 */
export type quest = {
  npc: npc
  name: string
  desc: string[]
  tasks: object[]
  rewards: item[]
}

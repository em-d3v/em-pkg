/**
 * @module enums
 * @desc consists of all enum variables for this library
 */

/**
 * @desc list of all gui class lists
 */
enum gui_types{
  GUI="gui",
  WINDOW = "win",
  TAB_CONTAINER = "tab-pane",
  TAB_BUTTON = "tab-btn",
  TAB_PAGE = "tab-page",
  TAB_BAR = "",
  INPUT_GROUP = "",
  LIST = "",

}
enum control_type {
  TAB_BUTTON = "tab-btn",
  BUTTON = "gui-btn",
  CHECKBOX = "gui-check",
  CHAT_LOG = "chat-log"
}
export {gui_types, control_type}
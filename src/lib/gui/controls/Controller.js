import GuiObject from '../GuiObject.js';

/**
 * @class Controller
 * @classdesc Base Class for other form control objects
 * @param {HTMLElement} parent - Parent Element
 * @param {Object} obj - object for manipulation
 * @param {gui_config} config Controller Configurations
 */
class Controller extends GuiObject {
  /**
   *
   * @param {Object} [obj]
   * @param {attributes} [attributes]
   */
  constructor(obj, attributes) {
    super({parent: obj.parent, type:obj.type,
    cls: obj.cls,});
    /**
     * value for input
     * @type any
     */
    this.value = obj.value;
    /**
     * label for input (this will act as the container for the input element)
     * @type {HTMLLabelElement}
     */
    this.$label = document.createElement("label");
    this.$label.classList.add("gui-input-label");
    /**
     * input element
     * @type {HTMLInputElement}
     */
    this.$input = document.createElement("input");
    this.$input.id = id;
    this.$input.name = this.name;
    this.$input.classList.add('gui-input');
    this.$input.parentElement = this.$label;
    this.$label.parentElement = obj.parent;
  }
  onEvent
}
export default Controller;
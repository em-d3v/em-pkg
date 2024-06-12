import { gui_types } from './util/enums.js';
class GuiObject {
  /**
   * Base class for all other GUI object classes
   * @constructor
   * @param {object} obj - object
   * @param {string} [obj.type] - gui Object type
   * @param {string} [obj.id] - GuiObject id (element id)
   * @param {string} [obj.name] - Object name (element name)
   * @param {Array<string>} [obj.cls] - Object Classes (element class list)
   * @param {HTMLElement} [obj.parent] parent element
   * @param {string} [obj.elem_type] element type
   */
  constructor({
                parent = undefined,
                type = undefined,
                id = undefined,
                name = undefined,
                cls = [],
                elem_type = 'div',
              } = {}) {
    /**
     *
     * @type {Array<GuiObject>}
     */
    this.children = [];
    /**
     * domElement
     * @type {HTMLElement}
     */
    this.element = document.createElement(elem_type);
    /**
     * gui object type
     * @type {string}
     */
    this.type = ""
    if (id)
      this.id = id;
    if (parent)
      this.parent = parent;
    if (name)
      this.name = name;
    if (cls){
      let c = "";
      if (cls.length > 0){
        for (c in cls)
          this.element.classList.add(c)
      }
    }
    if (type)
      this.type = type;
    /**
     * Gui Object settings
     * this will store custom settings for
     * @type {Object}
     */
    this.settings = {};
    this.props = []
  }

  /**
   *
   * @param name
   * @param value
   */
  set_property({ name, value } = {}) {

  }

  /**
   * adds a custom style to Gui Object
   * @param prop
   * @param value
   */
  add_style({prop, value}={}){
    //TODO: code method
  }
  get_property(name){
    let prop = null;
    prop = this.props[name];
    return prop;
  }

  /**
   *
   * @param name
   * @param value
   */
  add_attribute({name,value}={}){

  }
  remove_attribute(name){

  }
  update_attribute(name=undefined,v=undefined){
    // this.element.
  }
  getSetting(name) {
    let setting = null;
    if (this.settings[name])
      setting = this.settings[name];
    else
      throw `setting: ${name} does not exist`;
    return setting;
  }
}
export default GuiObject;
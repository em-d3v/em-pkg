/**
 * @class Container
 * @classdesc Base class for Other Gui Containers

 */
class Container extends GuiObject{
  /**
   *
   * @param {object} obj -
   * @param {any} [obj.id]
   * @param {string} [obj.elem_type="div"]
   * @param {Array<string>} [obj.cls]
   * @param {string} [obj.name]
   * @param {string} [obj.type]
   *
   */
  constructor({parent=undefined, id = undefined, elem_type = "div",
              name = undefined, type="container", cls = undefined,
              width=0,height=0}) {
    super({parent:parent, id: id, elem_type: elem_type, name: name, type: type, cls:cls});

    /**
     * This property allows user to toggle visibility.
     * if set to `false`,
     * @type {boolean}
     */
    this.toggleable = false;
    /**
     *
     * @type {object}
     */
    this.custom_attributes = {}

  }

  toggleVisibility(){
    this.con
  }

}

export default Container;
/**
 * Resource Utilities
 *
 */

export const name = 'ResourceUtils';

export class ResourceManager {

  /**
   * Create a New resource manager <br>
   * resources are stored in an array.
   * Useful for Managing Game Resources.
   *
   * @param {resource[]|Object[]} map
   */
  constructor(map) {
    /**
     *
     * @type {resource[]| object[]}
     */
    this.map = map;
  }

  /**
   *
   * @type void
   * @param {resource} object
   */
  add(object) {

  }

  /**
   * search through resource map
   * @param {string} [name] - resource name
   * @param [type] - resource name
   *
   */
  search(name,type) {
    let resource = null, r;
    if (this.map.length > 0){

    }else{
      throw "Resource Map is Empty"
    }
  }

  load() {

  }


}

export const Resource = class {
  id = '';

  /**
   * creates a new resource object
   * @param {string} name resource
   * @param {string|number} type resource type. Can use with enums
   * @param {Object} obj Resource
   */
  constructor(name, type, obj) {

  }
};

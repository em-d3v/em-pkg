/**
 * @typedef {{id:string, type:string,path:string,value:any}} resource
 * */
/**
 * Use this module for resource Management
 * @module ResourceUtil - Resource Utilities
 *
 */
/**
 * Accepted Types
 *  - image (png/jpg/svg)
 *  - json
 *  - map
 *  -
 * @class ResourceManager
 */
class ResourceManager {
    /**
     *
     * @type {object[]}
     */
    map = []

    /**
     *
     * @type {function}
     * @param  {object[]} [map] - resource object Array
     *
     * @example
     * // use this format
     *  const resources = [
     *      {id:"",type:string,src:string,value:any}
     *  ]
     */
    constructor(map) {
        this.map = map;
    }

    /**
     *
     * @param key {string}
     * @return
     */
    get(key){
        /**
         *
         * @type {resource}
         */
        let resource = {};

        return resource
    }
    add(){

    }
    remove(){

    }
}

/**
 * @class
 * @param params
 */
function Resource(params) {
let resource = {}

    return resource
}
export {ResourceManager, Resource}

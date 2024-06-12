/**
 * @interface IFileUtilOptions
 */
interface IFileUtilOptions{

}

/**
 * file options
 */
type file_options = {
  /**
   * Sets output filepath mode to relative (<code>true</code>), or to absolute (<code>false</code>)
   */
  relative?: boolean,
  /**
   * Recurse into sub directories
   */
  recurse?: boolean
}
enum en {
  X,Y,Z
}
/**
 *
 * Resource type
 */
export type resource = {
  /** resource id - can be used as name */
  id?: string,
  /**
   * resource type <br>
   * useful with enums
   */
  type: string | number | Enumerator<any>
  /**
   * resource value <br>
   * You can use this as:
   *  - filepath
   *  - primitive datatype value
   *  - custom datatype value
   *  - etc.
   */
  value: any | any[]
}

/** @type resource*/
let x = {id: "d", type: en.X}
export {file_options}
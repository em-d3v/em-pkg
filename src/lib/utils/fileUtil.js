/**
 * @module FileUtil
 * @desc contains functions dealing with fileUtil
 */

import fs from 'fs';
import path from 'path';

function getFrom(){

}
function getTo(){

}

/**
 * checks if file is excluded.
 * @param file
 * @param e
 * @return {boolean}
 */
function isExcluded(file, e) {
  let check = false, reg, i = '';
  /**TODO: code function - <br>
   for loop for `e[]` <br>
   for each iteration:
   - check if iteration has a '\' or a '*'
   - check if file starts will directory or ends with filetype
   - if iteration contains 1 '*' check if file ends with filetype
   - if iteration contains a '/' check if file starts with directory
   - if it contains both do a check for both
   */
  for (i of e) {
    reg = new RegExp(i);
    if (reg.test(file) === true) {
      check = true;
      break;
    }
  }
  return check;
}


/**
 * @static
 * @class
 * @classdesc my custom File utilities
 * @method isFileType
 * @method getFrom
 * @method getTo
 *
 */
class FileUtil{

  /**
   * search through directory for specific data
   * @param file
   * @param dir
   * @param {Object} [opt]
   *
   * @param {function(error)|function(data:string)} [cb] callback
   */
  static search(file,dir, opt, cb){

  }
  static compress(){
    throw "To Be Implemented"
  }
  /**
   * checks the file type of fileUtil
   * @param file {string}
   * @param {RegExp |RegExp[] | string | string[]} pattern file extension
   * @return boolean
   */
  static hasExtension(file, pattern){
    if (pattern instanceof RegExp){

    }else if ((typeof pattern)=='string'){
      if (Array.isArray(pattern)){

      }else{

      }
    }
    return false;
  }
  /**
   *
   * @desc creates a string array of filepaths to fileUtil from specified directory. <br>
   * **Will not return any files that start with a '.' (ex: path/to/.config.js)**
   * @param {string} dir - directory fullPath
   * @param {Object} [options] options
   * @param {boolean} [options.full_path=false]
   * `true` => output entire file path. <br>
   * `false`=> output relative file path
   * @param {boolean} options.recursive=false
   * <code>true</code> - output all fileUtil from directories and subdirectories <br>
   * <code>false</code> -  output fileUtil from directory
   * @param {string[]} [options.exclude=[]] fileUtil to exclude from array <br> **(to be implemented)**
   * @param {string} [options.config=undefined] Use this option to
   * @param {function(err)} callback callback function to be called if an error
   * occurs in the function.
   * @return {string[]} file path array
   * */
  static getFrom(dir,options,callback){
    /** @type string[] */
    let main = [], sub, folder;
    let full = false, rec= false,
      inputPath = "", //using this for the input dir path
      outpath = '';//use for the output
    let excluded = [];
    let error = '', fileStat, fullPath;
    if (options) {
      if (options.full_path) full = options.full_path;
      if (options.recursive) rec = options.recursive;
      if (options.exclude) excluded = options.exclude;
    }
    if (full === true) inputPath = dir;
    else inputPath = getEndDir(dir);
    try {
      folder = fs.readdirSync(dir, { recursive: rec });
      if (folder.length > 0) {
        folder.forEach((file) => {
          outpath = inputPath.concat('/',file);
          fullPath = path.join(dir, file);
          fileStat = fs.statSync(fullPath);
          if (!file.startsWith('.')) {
            //check excluded files
            if (excluded.length>0){
              if (!isExcluded(file,excluded)){
                if (full === true) outpath = fullPath;
                else outpath = inputPath.concat(`\\${file}`);
              }
            }else{
              if (full === true) outpath = fullPath;
              else outpath = inputPath.concat(`\\${file}`);
            }
            main.push(outpath);
          }
        });
      }
    } catch (e) {
      callback(e);
    }
    return main;
  }

  /**
   * @desc Creates a string array of filepaths to destination directory <br>
   *  you can use this when you want to
   * @param {string} dir destination directory
   * @param {string[]} arr - file paths to be outputted to destination fileUtil
   * @param {Object} [options] options
   * @param {boolean} [options.fullpath=false]
   * `true` => output entire file path. <br>
   * `false`=> output relative file path (end directory)
   * @param {function(err)} callback when an error occurs, function will call back
   * @callback callback called when error occurs
   * @return {string[]} destination array
   * */
  static getTo(dir,arr,options,callback){

  }
}
const fileUtil = {
  /**
   * @function get
   * @desc creates a string array of filepaths to fileUtil from specified directory
   * @param {string} dir - absolute directory path
   * @param {file_options} [options] file options
   * @param {function(err)} callback when an error occurs
   * @return {string[]} di
   */
  get: function(dir, options, callback) {
    /** @type string[] */
    let main = [], sub;
    let relative = false, inputPath;
    let error = '', subPath, folder, fileStat, filepath;
    if (options) {
      if (options.relative)
        relative = options.relative;
    }
    if (relative === true)
      inputPath = './';
    else
      inputPath = dir;
    try {
      folder = fs.readdirSync(dir);
      if (folder.length > 0) {
        folder.forEach((file) => {
          console.log(file);
          filepath = path.join(dir, file);
          fileStat = fs.statSync(filepath);
          if (fileStat.isFile()) {
            main.push(filepath);
          } else if (fileStat.isDirectory()) {
            sub = get(filepath, (err) => {
              callback(err);
            });

            sub.forEach((sub_file) => {
              // sub_path = path.join(filepath, sub_file);
              main.push(sub_file);
            });
          }
        });
      }
    } catch (e) {
      callback(e);
    }
    return main;
  },

  /**
   * @function to
   * @desc Creates a string array of filepaths to destination directory <br>
   *  <strong>This does not create fileUtil. use this when you want to
   *  create destination filespaths</strong>
   * @param {string} dir destination directory
   * @param {string[]} arr - filespaths to be outputed to dest
   * @param {file_options} options <br>
   *  - relative: boolean - <br> <code>true</code>: output will consist of relative filepaths,
   *    uses absolute filepaths if false.
   * @param {function(err)} callback when an error occurs, function will call back
   * @return {string[]} destination array
   */
  to: (dir, arr, options, callback) => {
    let dest = [];

    return dest;
  },
};

export default FileUtil;
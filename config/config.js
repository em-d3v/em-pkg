/**
 * @overview main configurations
 * My configurations
 */

import fs from "fs";
import path from "path";

/**
 * Main Configurations
 *
 */
let main = {
    output : {
        js: "build/jsm",
        css: "build/css",
        json: "build/schema"
    },
    /** dest  */
    dest:{
        root: "dist"
    },
    src:{
        root: "src/lib",
        styles: "src/styles",
        schemas: "src/schemas"
    },
    /**
     * Get files from specified directory
     * @param dir {string}
     * @param callbackfn {function(e)}
     *  @return {string[]} */
    filesFrom: (dir, callbackfn)=>{
        let files = [], folder = [];
        let outDir, i, status,farr;
        try {
            farr = fs.readdirSync(dir);
            farr.forEach((file) => {
                outDir = path.resolve(dir, file)
                status = fs.statSync(outDir)
                if (status.isFile()) {
                    files.push(outDir);
                } else {
                    folder = this.filesFrom(outDir, (e)=>{
                        throw e;
                    });
                    for (i of folder) {
                        files.push(i);
                    }
                }
            })

            return files;
        }catch (e){
            callbackfn(e);
            return null;
        }
    }

}
export default main;
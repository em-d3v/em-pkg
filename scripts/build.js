#!/usr/bin/env node
/**
 * build script
 * builds files
 */

import * as cp from "child_process";
import {Chalk} from "chalk";
const SUCCESS = 0, FAILURE = 1;
const chalk = new Chalk();
function err(msg){
    console.log(chalk.red(msg));
}

function success(msg){
    console.log(chalk.green(msg));
}
function info(msg){
    console.log(chalk.cyan(msg));
}
/**
 * TODO: Have build function do the following:
 *  - [ ] step 1 - Compile Typescript to dist folder with ts-compiler
 *  - [ ] step 2 - Bundle dist to build/js/build.min.js (use rollup)
 *  - [ ] Step 3 - Minify styles/* to build/[name].min.css
 *  - [ ] Step 4 -
 */
function build() {
    let status = 0, error;
    info("Building Project");
    try {
        info("Compiling Typescripts...");

        info("Bundling Dist folder...");

        info("Minify css stylesheets");

        // info("");
        status=SUCCESS;
    }catch(e){
        error = e;
        status = FAILURE;
    }

    if (status==SUCCESS){
        success("Project Build Success!");
    }else{
        error(error);
    }

}

build();

/**
 *
 *  "files": [
 *     "src/index.ts",
 *     "src/lib",
 *     "bin/",
 *     "src/schemas/",
 *     "src/styles/*.css",
 *     "build/"
 *   ],
 */
import { rollup } from "rollup";
import * as fs from 'fs';
import * as path from 'path';

const src = {
    root: "./src/lib",
    styles: "./src/styles",
    schemas: "./src/schemas"
}
function getFiles(dir) {
    /**@type string[]*/
    let files = [], folder = [];
    let outDir, i;
    let farr = fs.readdirSync(dir);
    let status;
    // fs.readdirSync(dir);

    farr.forEach((file) => {
        outDir = path.resolve(dir, file)
        status = fs.statSync(outDir)
        if (status.isFile()) {
            files.push(outDir);
        } else {
            folder = getFiles(outDir);
            for (i of folder) {
                files.push(i);
            }
        }
    })
    return files
}

function source(){
    let input = []
    let dir = src.root, status,outDir,folder,i;
    let files = fs.readdirSync(dir);
    files.forEach((file) => {
       let fpath = path.resolve(dir, file)
       let status = fs.statSync(fpath)
        if (status.isFile()) {
            input.push(fpath);
        } else {
            folder = getFiles(outDir);
            for (i of folder) {
                input.push(i);
            }
        }
    })
    return input;
}
let inputs = [];
const output = {
    js: "build/jsm",
    css: "build/css",
    json: "build/schema"
}
let externals = ['jquery']
const config = {
    input: inputs,
    external: ['jquery'],
    output: {
        dir: "./build",
        name: "build.min.js",
        format: "es"
    },
    globals:{
        jquery: '$'
    },
    plugins:[

    ]

}

export default config;
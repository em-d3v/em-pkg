// const webpack = require('webpack');
// const
import * as webpack from 'webpack';
import * as fs from 'fs';
import * as path from 'path';

const CopyWebpackPlugin = require('copy-webpack-plugin');

// import * as CopyWebpackPlugin from 'copy-webpack-plugin'
/** Home Directory */
const home = process.cwd(), exclude = ["src/game"];
const output = {
    js: "build/jsm",
    css: "build/css",
    json: "build/schema"
}
const src = {
    root: "./src/lib",
    styles: "./src/styles",
    schemas: "./src/schemas"
}
function getSchemaFiles() {
    /**@type string[] */
    let files = [];
    let root = `src/schemas`
    let farr, file, dir;
    let rootDir = path.resolve(process.cwd(), root);
    farr = fs.readdirSync(rootDir);
    for (file of farr) {
        dir = root + `/${file}`
        files.push(dir);
    }
    return files;
}

/**
 *
 * @param dir
 * @return {string[]}
 */
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

/**
 *
 * @return {[]}
 */
function sourceFiles() {
    let root = `${process.cwd()}/dist`;
    let entry = [], dir,s, folder;
    let files = fs.readdirSync(root);
    files.forEach((file)=>{
        dir = path.resolve(root,file)
        s = fs.statSync(dir);
        if (s.isDirectory()){
            folder = getFiles(dir);
            folder.forEach((f)=>{
                entry.push(f);
            })
        }
    })
    return entry
}


let config = {
    mode: "production",
    // entry: {
    //     game: getFiles("src/lib/game"),
    //     gui: getFiles("src/lib/gui")
    // },
    entry: sourceFiles(),
    target: 'node',
    output: {
        path: "./build/jsm",
        filename: "build.min.js"

    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    }
};


/**
 * Webpack Config
 */
export default [
    {
        mode: "production",
        entry: {
            lib: {
                import: "./"
            }
        },
        target: 'node',
        output: {
            path: `${process.cwd()}/build`,
            filename: "[name].js"
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: {}
            })
        ]

    }
]
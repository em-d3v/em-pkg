// const webpack = require('webpack');
// const
import * as webpack from 'webpack';
import * as fs from 'fs';
import * as path from 'path';
const CopyWebpackPlugin = require('copy-webpack-plugin');
// import * as CopyWebpackPlugin from 'copy-webpack-plugin'
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

const src = {
    root: "./src",

}
let config = {
    mode: "production",
    target: 'node',
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
                patterns: {

                }
            })
        ]

    }
]
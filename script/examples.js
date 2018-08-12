const fs = require('fs-extra');
const path = require('path');
const webpack = require("webpack");
const {
    initWebpackConfig
} = require('make-webpack-config');

const CWD = process.cwd();
const EXAMPLE_SRC_DIR = path.resolve(CWD, 'examples');
const EXAMPLE_DIST_DIR = path.resolve(CWD, 'examples-dist');
const EXAMPLE_HTML_TEMPLATE = 'index.html';

async function buildExample(entryJs) {
    const cfg = {
        mode: 'development',
        appSrc: EXAMPLE_SRC_DIR,
        appDist: EXAMPLE_DIST_DIR,
        appEntryJs: entryJs,
        appEntryHtml: EXAMPLE_HTML_TEMPLATE,
        appEntryHtmlOpts: {
            title: entryJs.replace(/\.jsx?$/, ''),
            filename: entryJs.replace(/jsx?$/, 'html'),
        },
    };

    return await initWebpackConfig(cfg);
}

fs.readdir(EXAMPLE_SRC_DIR, async (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.emptyDirSync(EXAMPLE_DIST_DIR);

    const webpackConfig = [];
    for (let file of files) {
        const absFilePath = path.resolve(EXAMPLE_SRC_DIR, file);
        const stats = fs.statSync(absFilePath);

        if (!stats.isFile() || !/\.jsx?$/.test(file)) continue;

        webpackConfig.push(await buildExample(file));
    }

    const compiler = webpack(webpackConfig);

    const compilerCb = function (err, stats) {
        if (err) {
            return console.log(err);
        }

        console.log(stats.toString({
            chunks: false,
            colors: true,
        }));
    }

    compiler.watch({
        aggregateTimeout: 300,
        poll: undefined,
        ignored: /node_modules/
    }, compilerCb);

});
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
    return new Promise(async (resolve, reject) => {
        const cfg = {
            mode: 'development',
            appSrc: EXAMPLE_SRC_DIR,
            distSrc: EXAMPLE_DIST_DIR,
            appEntryJs: entryJs,
            appEntryHtml: EXAMPLE_HTML_TEMPLATE,
            appEntryHtmlOpts: {
                title: entryJs.replace(/\.jsx?$/, ''),
                filename: entryJs.replace(/jsx?$/, 'html'),
            },
        };

        const webpackConfig = await initWebpackConfig(cfg);

        const compiler = webpack(webpackConfig);

        const compilerCb = function (err, stats) {
            if (err) {
                reject();
                return console.log(err);
            }

            if (stats.hasErrors()) {
                console.log(stats.toString({
                    chunks: false,
                    colors: true,
                }));
                console.log('示例构建失败：%s', entryJs);
                reject();
            } else {
                console.log('示例构建完成：%s', entryJs);
            }

            resolve()

        }

        compiler.run(compilerCb);

    });
}

fs.readdir(EXAMPLE_SRC_DIR, async (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    for (let file of files) {
        const absFilePath = path.resolve(EXAMPLE_SRC_DIR, file);
        const stats = fs.statSync(absFilePath);

        if (!stats.isFile() || !/\.jsx?$/.test(file)) return;

        await buildExample(file);
    }

});
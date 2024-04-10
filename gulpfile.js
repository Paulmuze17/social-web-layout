// import the main module
import gulp from "gulp";

//import our path variable
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// passing values into global var
// In web globalVar is 'window', in Node.js is 'global'
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
};

// import taasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { javascript } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprites } from "./gulp/tasks/svgSprites.js";
import { zip } from "./gulp/tasks/zip.js";

export {svgSprites};
export {dev};
export {build};
export {deployZIP};

// watching files
function watcher () {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.javascript, javascript);
}

// tasks
const fontTasks = gulp.series(otfToTtf, ttfToWoff); //последовательное выполнение задач
const mainTasks = gulp.series(fontTasks, gulp.parallel(copy, images, html, scss, javascript));

const build = gulp.series(reset, mainTasks); //последовательное выполнение задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); //последовательное выполнение задач
const deployZIP = gulp.series(reset, mainTasks, zip); //последовательное выполнение задач

// default task on "gulp" command
gulp.task("default", dev);
gulp.task("build", build);
gulp.task("deployZIP", deployZIP);

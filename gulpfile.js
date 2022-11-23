import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
};

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
/*import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/font.js";*/
import { sprite } from "./gulp/tasks/sprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.svgicons, sprite);
}

/*const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);*/

const mainTasks = gulp.series(
	/*fonts*/
	gulp.parallel(copy, html, scss, js, images, sprite)
);

export const dev = gulp.series(
	reset,
	mainTasks,
	gulp.parallel(watcher, server)
);
export const build = gulp.series(reset, mainTasks);
export const deployZIP = gulp.series(reset, mainTasks, zip);
export const deployFTP = gulp.series(reset, mainTasks, ftp);
export { sprite };

gulp.task("default", dev);

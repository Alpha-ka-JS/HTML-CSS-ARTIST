import gulp from "gulp";
import del from "del";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

sass.compiler = require("node-sass");

const projectName = "best-horror-scenes"

const routes = {
  css: {
    watch: `${projectName}/src/scss/*`,
    src: `${projectName}/src/scss/styles.scss`,
    dist: `${projectName}/dist/css`,
  },
};

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dist));

const watch = () => {
  gulp.watch(routes.css.watch, styles);
};

const clean = () => del(["dist/"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);

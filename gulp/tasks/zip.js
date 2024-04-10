// import del from "del";
import zipPlugin from "gulp-zip";
import fs from "fs";

export const zip = () => {
    // del(app.path.rootFolder+'.zip')''
    if(fs.existsSync(app.path.rootFolder+'.zip')) {
        fs.unlinkSync(app.path.rootFolder+'.zip');
    }

    return app.gulp.src(app.path.buildFolder+'/**/*.*', {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "ZIP",
            message: "Error: <%= error.message %>",
            // sound: false
        })
    ))

    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))

    .pipe(app.gulp.dest('./'));
}
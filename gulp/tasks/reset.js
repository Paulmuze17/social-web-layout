// удаляет папку dist
import clean from "gulp-clean";
import fs from "fs";

export const reset = (done) => {
    if(fs.existsSync(app.path.clean)) {
        return app.gulp.src(app.path.clean, {read: false})
            .pipe(clean());
    }

    done();
}
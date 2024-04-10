import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
    return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMAGES",
            message: "Error: <%= error.message %>",
            // sound: false

        })
    ))

    // CONV. INTO WEBP
    .pipe(app.plugins.newer(app.path.build.images)) //checking new images
    .pipe(webp()) //converting into .webp format
    .pipe(app.gulp.dest(app.path.build.images))

    // IMAGES
    .pipe(app.gulp.src(app.path.src.images))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(imagemin({
        progressive:true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7 уровень сжатия
    }))
    .pipe(app.gulp.dest(app.path.build.images))

    //SVG
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images));


}
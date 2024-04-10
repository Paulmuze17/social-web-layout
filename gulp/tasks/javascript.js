import webpack from "webpack-stream"; //npm i -D webpack-stream webpack -> используется для сборки разных частей в один файл

export const javascriptMain = () => {
    return app.gulp.src(app.path.src.javascriptMain, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JavaScript",
            message: "Error: <%= error.message %>",
            // sound: false
        })
    ))
    .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
            filename: "main.min.js"
        }
    }))
    .pipe(app.gulp.dest(app.path.build.javascript));
}

export const javascript = () => {
    return app.gulp.src(app.path.src.javascript, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JavaScript",
            message: "Error: <%= error.message %>",
            // sound: false
        })
    ))
    
    .pipe(app.gulp.dest(app.path.build.javascript));
}
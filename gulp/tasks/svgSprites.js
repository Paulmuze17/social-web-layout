import svgSprite from 'gulp-svg-sprite';


export const svgSprites = () => {
    return app.gulp.src(app.path.src.svgSprites, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG SPRITES",
            message: "Error: <%= error.message %>",
            // sound: false
        })
    ))
    
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../icons/icons.svg',
                example: true // создать html с перечнем иконок
            }
        }
    }))

    .pipe(app.gulp.dest(app.path.build.images));
}
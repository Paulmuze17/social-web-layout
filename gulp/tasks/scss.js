import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css"; //сжатие css
import webpCss from "gulp-webpcss"; // conv. webp images (requires 'npm i -D webp-converter@2.2.3')
import autoprefixer from "gulp-autoprefixer"; // crossbrowser vendar prefixers - добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; // grouping media queries


import { path } from "../config/path.js"; //adds an unique key to avoid hashing in browser, changes apply on rebuild


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemap: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
            // sound: false
        })
    ))
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        )
    )
    .pipe(
        app.plugins.if(
            app.isBuild,
            webpCss(
            {
                webpClass: ".webp",
                noWebpClass: ".no-webp"
            }
        )
    ))

    // .pipe(app.plugins.replace(/@scss\//g, "/assets/css/")) // replacing paths on valid ones
    .pipe(app.plugins.replace(/@images\//g, `${path.assetsPath}/images/`)) // replacing paths on valid ones
    
    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrideBrowserslist: ["last 3 versions"],
                cascade: true
            })
        )
    )

    .pipe(app.gulp.dest(app.path.build.css)) //adding not minif.css

    .pipe(
        app.plugins.if(
            app.isBuild,
            cleanCss()
        )
    )
    .pipe(app.plugins.rename({
        extname: ".min.css"
    }))

    .pipe(app.gulp.dest(app.path.build.css));
}
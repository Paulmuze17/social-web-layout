// getting the name of the project (package.json type=module => now can use es6 modules)
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const useAssetsFolder = true;

const buildFolder = './dist';
const srcFolder = './src';
const assetsPath = useAssetsFolder ? '/assets' : '';


export const path = {
    build: {
        // files: buildFolder+assetsPath,
        files: buildFolder+'/files/',
        html: buildFolder,
        css: buildFolder+assetsPath+'/css/',
        javascript: buildFolder+assetsPath+'/js/',

        images: buildFolder+assetsPath+'/images/',
        fonts: buildFolder+assetsPath+'/fonts/',
        dataFiles: buildFolder+'/data/',
        cssVendors: buildFolder+assetsPath+'/scss/vendor/',
    },
    src: {
        files: srcFolder+'/files/**/*.*',
        html: srcFolder+'/html/*.html',
        // scss: srcFolder+'/scss/*.scss',
        scss: srcFolder+'/scss/main.scss',
        javascript: srcFolder+'/js/**/*.js',

        images: srcFolder+'/images/**/*.{jpg,jpeg,png,gif,ico,webp}',
        svg: srcFolder+'/images/**/*.svg',
        svgSprites: srcFolder+'/svg_sprites/**/*.svg',
        fonts: srcFolder+'/fonts',
        // fonts: srcFolder+'/fonts/**/*.{eot,woff,woff2,ttf,svg}',
        dataFiles: srcFolder+'/data/**/*.{db,json}',
        cssVendors: srcFolder+'/scss/vendor/*.css',
    },
    watch: {
        files: srcFolder+'/files/**/*.*',
        html: srcFolder+'/html/**/*.html',
        scss: srcFolder+'/scss/**/*.{scss,css}',
        javascript: srcFolder+'/js/**/*.js',

        images: srcFolder+'/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        fonts: srcFolder+'/fonts/**/*.{eot,woff,woff2,ttf,svg}',
        dataFiles: srcFolder+'/data/**/*.{db,json}',

    },
    clean: buildFolder,
    assetsPath: assetsPath,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
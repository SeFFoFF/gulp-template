import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = "./dist"
const srcFolder = "./src"

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,ico}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
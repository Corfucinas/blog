const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const workbox = require("workbox-build");
const { src, dest } = require('gulp');
const through2 = require('through2');

const AmpOptimizer = require('@ampproject/toolbox-optimizer');
const ampOptimizer = AmpOptimizer.create(
    { verbose: true }
);


gulp.task("clean", () => {
    return gulp.src("public", { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task("hugo-build", shell.task(["hugo --gc --minify --cleanDestinationDir --verbose"])); // this can change depending on which static generator you are using.

gulp.task("generate-service-worker", () => {
    return workbox.generateSW({
        cacheId: "AbsoluteArray",
        cleanupOutdatedCaches: true,
        mode: "production",
        sourcemap: true,
        globDirectory: "./public", // the directory where static file is stored
        swDest: "./public/sw.js", // destination of sw.js file
        clientsClaim: true,
        skipWaiting: true,
        offlineGoogleAnalytics: true,
        globPatterns: ["**/*.{js,css,html,eot,ttf,woff,woff2,otf}"],
        // navigateFallback: "/404.html", // fallback file
        globIgnores: ["**/index.xml", "**/index.json", "**/sitemap.xml", "**/tags/**"],
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
            },
            {
                urlPattern: /\.(?:mp3|wav|m4a)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "audio",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
            },
            {
                urlPattern: /\.(?:m4v|mpg|avi)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "videos",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
            },
            {
                urlPattern: /\.(?:json|xml)$/,
                handler: "NetworkOnly",
            },
        ],
    });
});


gulp.task("amp-build", (cb) => {
    return src('./public/**/*.html')
        .pipe(
            through2.obj(async (file, _, cb) => {
                if (file.isBuffer()) {
                    const optimizedHtml = await ampOptimizer.transformHtml(
                        file.contents.toString()
                    );
                    file.contents = Buffer.from(optimizedHtml);
                }
                cb(null, file);
            })
        )
        .pipe(dest('./public/'));
}
)


gulp.task("build", gulp.series("clean", "hugo-build", "generate-service-worker", "amp-build"));

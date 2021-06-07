const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("clean", function () {
    return gulp.src("public", { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task("hugo-build", shell.task(["hugo --gc --minify --cleanDestinationDir --verbose"])); // this can change depending on which static generator you are using.

gulp.task("generate-service-worker", () => {
    return workbox.generateSW({
        cleanupOutdatedCaches: true,
        mode: "production",
        sourcemap: true,
        globDirectory: "./public", // the directory where static file is stored
        swDest: "./public/sw.js", // destination of sw.js file
        clientsClaim: true,
        skipWaiting: true,
        offlineGoogleAnalytics: true,
        globPatterns: ["**/*.{js,css,html,eot,ttf,woff,woff2,otf}"],
        navigateFallback: "/404.html", // fallback file
        globIgnores: ["**/index.xml", "**/index.json", "**/sitemap.xml"],
        runtimeCaching: [
            {
                urlPattern: /(?:\/)$/,
                handler: "StaleWhileRevalidate",
                options: {
                    cacheName: "html",
                    expiration: {
                        maxAgeSeconds: 60 * 60 * 24 * 7,
                    },
                },
            },
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

gulp.task("build", gulp.series("clean", "hugo-build", "generate-service-worker"));

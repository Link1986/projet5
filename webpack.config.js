var Encore = require("@symfony/webpack-encore");

Encore
    // directory where compiled assets will be stored
    .setOutputPath("web/build/")
    // public path used by the web server to access the output path
    .setPublicPath("/build")
    // only needed for CDN"s or sub-directory deploy
    //.setManifestKeyPrefix("build/")

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that"s included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */

    //JAVASCRIPT
    .addEntry("js/flexslider", "./assets/js/jquery.flexslider-min.js")
    .addEntry("js/fancybox", "./assets/js/jquery.fancybox.min.js")
    .addEntry("js/waypoints", "./assets/js/jquery.waypoints.min.js")
    .addEntry("js/retina", "./assets/js/retina.min.js")
    .addEntry("js/main", "./assets/js/main.js")
    .addEntry("js/jquery", "./assets/js/jquery.min.js")
    .addEntry("js/quote", "./assets/js/quote.js")
    //.addEntry("page1", "./assets/js/page1.js")
    //.addEntry("page2", "./assets/js/page2.js")

    //CSS
    .addStyleEntry("css/flexslider", "./assets/css/flexslider.css")
    .addStyleEntry("css/animate", "./assets/css/animate.min.css")
    .addStyleEntry("css/fancybox", "./assets/css/jquery.fancybox.min.css")
    .addStyleEntry("css/main", "./assets/css/main.css")
    .addStyleEntry("css/responsive", "./assets/css/responsive.css")
    .addStyleEntry("css/member", "./assets/css/member.css")
    .addStyleEntry("css/quote", "./assets/css/quote.css")

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();

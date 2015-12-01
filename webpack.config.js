var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./app/entry.js",
        vendor: [
            "angular",
            "angular-animate",
            "angular-aria",
            "angular-material",
            'angular-material/angular-material.css',
            "angular-messages",
            "angular-touch",
            "angular-ui-router",
            "babel-plugin-transform-runtime",
            "pouchdb",
            "pouchdb-find"
        ]
    },
    output: {
        path: 'dist',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx?|es6)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ng-annotate!strict!babel?presets[]=es2015'
            },
            {
                test: /\.css$/,
                loader: "style!css!autoprefixer"
            },
            {
                test: /\.less$/,
                loader: "style!css!less!autoprefixer"
            },
            {
                test: /\.html/,
                exclude: /index\.html/,
                loader: "html"
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'app']
    }
};

module.exports = {
    entry: "./app/entry.js",
    output: {
        path: 'dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(jsx?|es6)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ng-annotate!babel!strict'
            },
            {
                test: /\.css$/,
                loader: "style!css"
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

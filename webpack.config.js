module.exports = {
    entry: "./app/entry.js",
    output: {
        path: 'dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};

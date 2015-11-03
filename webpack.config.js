module.exports = {
  entry: "./app/entry.js",
  output:
  {
    path: 'dist',
    filename: "bundle.js"
  },
  module:
  {
    loaders: [
    {
      test: /\.(jsx?|es6)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    },
    {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  resolve:
  {
    modulesDirectories: ['node_modules', 'app']
  }
};

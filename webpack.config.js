module.exports = {
    mode: "development",
    devtool: 'source-map',
    /*entry: [
        './client/index.js'
      ],
      output: {
        path: __dirname,
        filename: './public/bundle.js'
      },
      context: __dirname,
      devtool: "source-map",
      devServer: {
        static: {
          directory: __dirname + "/public",
        },
      },*/
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      ]
    }
  };
  
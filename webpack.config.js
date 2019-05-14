const path = require ( 'path' )

module.exports = {

    entry: {
        index: [ 'babel-polyfill', './src/index.js' ],
        edit: [ 'babel-polyfill', './src/edit.js' ]
    },
    output: {
        path: path.resolve ( __dirname, 'public/scripts' ),
        filename: '[name]-bundle.js'
    },

    // babel configuratiom
    module: {
        rules: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ 'env' ]
                }
            }
        } ]
    },

    // webpack-dev-server configuration
    devServer: {
        contentBase: path.resolve ( __dirname, 'public' ),
        publicPath: '/scripts/'
    },

    // configure source map
    devtool: 'source-map'

}
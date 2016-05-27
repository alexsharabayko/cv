// webpack-dev-server --inline --hot --history-api-fallback

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',

    entry: {
        index: './init'
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'init.js'
    },

    devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null,

    module: {
        loaders: [
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/i,
                loader: 'file?name=[path]/[name].[ext]?[hash]'
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'autoprefixer', 'less']
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.less']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js', '.less']
    },

    devServer: {
        host: 'localhost',
        port: 4444,
        contentBase: __dirname + '/public',
        hot: true,
        historyApiFallback: true
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
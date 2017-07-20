// webpack-dev-server --inline --hot --history-api-fallback
//git add -A && git commit -m "Second commit"

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',

    entry: {
        index: './js/init'
    },

    output: {
        path: __dirname + '/public',
        //publicPath: '/',
        filename: 'init.js'
    },

    devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : false,

    module: {
        loaders: [
            {
                test: /\.(ico|png|jpg|svg|ttf|eot|woff|woff2)$/i,
                loader: 'file-loader?name=[path]/[name].[ext]?[hash]'
            },
            {
                test: /\.dot$/,
                loader: "dot-loader"
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    resolve: {
        modules: ['js', 'src', 'node_modules'],
        extensions: ['.js', '.less'],
        alias: {
            'jquery': 'jbone'
        }
    },

    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.less']
    },

    devServer: {
        host: 'localhost',
        port: 5555,
        contentBase: __dirname + '/public',
        hot: true,
        historyApiFallback: true
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );

    module.exports.plugins.push(new ExtractTextPlugin("cv.css"));
    module.exports.module.loaders.push(
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
        }
    );
} else {
    module.exports.module.loaders.push(
        {
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
        }
    );
}
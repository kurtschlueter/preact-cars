const webpack = require('webpack');
const path = require('path');

// variables
const isProduction = process.argv.indexOf('-p') >= 0;
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = {
    context: sourcePath,
    entry: ['whatwg-fetch', './app.tsx'],
    output: {
        publicPath: '/',
        path: outPath,
        filename: 'bundle.js'
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ['main']
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'SPECIALS_BUCKET': JSON.stringify(process.env.SPECIALS_BUCKET),
            'SPECIALS_BUILDOUT_BASE': JSON.stringify(process.env.SPECIALS_BUILDOUT_BASE)
        })
    ],
    devServer: {
        // disableHostCheck: true, //Leave this in for dev testing
        contentBase: sourcePath,
        port: 9000,
        stats: {
            warnings: false
        },
    },
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    },

    externals: [{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
};
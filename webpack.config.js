require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CLIENT = process.env.CLIENT_PORT || 7777;
const SERVER = process.env.SERVER_PORT || 8888;

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: CLIENT,
        open: true,
        proxy: {
            '/api': `http://localhost:${SERVER}`
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        clean: true,
    },

    /* loaders to handle bundling file types other than js in our bundle*/
    module: {
        rules: [
            // if you prefer just css loading
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: 'asset/resource',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["@babel/preset-env", "@babel/preset-react"],
                      plugins: ["@babel/plugin-transform-runtime"],
                    },
                  },
            },
            {
                test: /\.html$/,
                use: 'html-loader'

            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',    
              },
        ],
    },
};
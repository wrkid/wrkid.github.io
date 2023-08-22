const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './docs'),
        filename: '[name].bundle.js',
    },

    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
    },
    
    mode: 'development', // Режим сборки

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-test',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'style.css',
          }),

        new CopyWebpackPlugin ({
                patterns: [
                    {
                    from: path.resolve(__dirname, './src/img'),
                    to: path.resolve(__dirname, './docs/img')
                    }
                ]
        })
    ],


    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // изображения
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            //     loader: 'file-loader',
            //     options:{
            //         name: '[name].[ext]',
            //         outputPath: './img',
            //         url: false,
            //         esModule: false
            //     }
            // },
        
        
           
        
            // шрифты
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            { //https://webpack.js.org/loaders/css-loader/
                test: /\.css$/, 
                use: ["style-loader"]
            },
            { 
                test: /\.css$/, 
                loader: "css-loader",
                options: {
                    url: false,
                }
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader, // Extract css to separate file
                  'css-loader', // translates CSS into CommonJS
                  'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
                  'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    }
}


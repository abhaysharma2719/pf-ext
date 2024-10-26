import path from 'path';  // Import path module
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin'; // Import TerserPlugin for minification
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { jsLoader, cssLoader } from './webpack/loaders.js';  // Import loaders

export default {
    entry: {
        popup: './src/popup.js',
        content: './src/content.js'
    },
    output: {
        path: path.resolve(__dirname, 'extension'), // Correctly define output path
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/static-files/popup.html', // Path to your HTML template
            filename: 'popup.html', // Output HTML file name
            scriptLoading: 'blocking', // Optional: load script in blocking mode
            chunks: ['popup']
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/static-files/manifest.json', // Path to your source file
                    to: '.', // Path relative to output path
                },
            ],
        })
    ],
    optimization: {
        minimize: true, // Enable minimization
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true, // Remove console statements
                },
            },
            extractComments: false, // Prevents creating a comments file
        })],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'extension'), // Serve content from this directory
        },
        compress: true, // Enable gzip compression
        port: 9000, // Port to run the server
        open: true, // Open the browser automatically
        hot: true, // Enable hot module replacement
    },
    module: {
        rules: [jsLoader, cssLoader],  // Use defined loaders
    },
    mode: 'development',
    devtool: false,
};

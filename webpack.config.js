import path from 'path';  // Import path module
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { jsLoader, cssLoader } from './webpack/loaders.js';  // Import loaders

export default {
    entry: {
        popup: './src/popup.js',
        content : './src/content.js'
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
    ],
    module: {
        rules: [jsLoader, cssLoader],  // Use defined loaders
    },
    mode: 'development',
    devtool: false,
};

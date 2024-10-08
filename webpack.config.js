import path from 'path';  // Import path module
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { jsLoader, cssLoader } from './webpack/loaders.js';  // Import loaders

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'extension'),  // Correctly define output path
        filename: 'index.js',
    },
    module: {
        rules: [jsLoader, cssLoader],  // Use defined loaders
    },
    mode: 'development',
    devtool: false,
};

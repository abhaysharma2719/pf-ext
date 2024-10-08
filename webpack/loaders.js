import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const jsLoader = {
    test: /\.js$/,                       // Apply to .js files
    exclude: /node_modules/,             // Exclude node_modules folder
    use: {
        loader: 'babel-loader',            // Use Babel loader for JS files
    },
};

export const cssLoader = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader, // Extract CSS into files
        'css-loader', // Translates CSS into CommonJS
        'postcss-loader', // Process CSS with PostCSS (Tailwind CSS)
    ],
}
export const jsLoader = {
    test: /\.js$/,                       // Apply to .js files
    exclude: /node_modules/,             // Exclude node_modules folder
    use: {
        loader: 'babel-loader',            // Use Babel loader for JS files
    },
};

export const cssLoader = {
    test: /\.css$/,                      // Apply to .css files
    use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
};

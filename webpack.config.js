const path = require('path');

module.exports = {
    mode: "development", 
    entry: './src/index.tsx',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    },
    module: {
    rules: [
        {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
        },
    ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
};

const webpack = require('webpack');
const path= require('path');

module.exports ={
    entry:[
        './app/index.js'
    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename:'bundle.js',

    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader: 'file-loader?name=[name].[ext]',

            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
            }
        ],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        
    ],
};
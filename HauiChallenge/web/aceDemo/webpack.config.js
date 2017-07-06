module.exports = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        loaders:[
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015', 'react','stage-0']
                }
            }
        ]
    }
}
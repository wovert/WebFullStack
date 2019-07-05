const path=require('path');

module.exports={
  mode: 'development',
  entry: './src/vm3.js',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']}
    ]
  }
};

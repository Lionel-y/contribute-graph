const path = require('path')

module.exports = {
  // 设置当前的模式
  mode: "development",
  // 入口文件
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // 打包输出的路径和文件名
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.boundle.js',
    library: {
      type: "module"
    }
  },
  experiments: {
    outputModule: true,
  },
  module: {
    // 使用babel-loader对js文件和jsx文件进行处理
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  }
}
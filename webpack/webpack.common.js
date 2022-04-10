const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 엔트리 포인트는 webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈을 의미
  entry: {
    bundle: path.resolve(__dirname, '..', './src/index.ts'),
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 나열한 확장자를 순서대로 해석, import 할 때 확장자 생략 가능
  },

  module: {
    // loaders
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Basic',
      filename: 'index.html',
      template: 'src/templates/template.html',
    }),
  ],

  stats: 'errors-only',
};

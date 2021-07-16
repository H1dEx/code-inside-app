const p = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

const MODE = process.env.NODE_ENV || 'development'
const SRC_PATH = p.resolve(__dirname, 'src')

const devtool = {
  development: 'inline-source-map',
  production: 'none',
}

const cssLoaderOptions = {
  development: {
    modules: {
      localIdentName: '[local]_[hash:base64:4]',
    },
  },
  production: {
    modules: {
      localIdentName: '[hash:base64:4]',
    },
  },
}
const additionalPlugins = {
  development: [],
  production: [new CompressionPlugin()],
}

const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  new MiniCssExtractPlugin(),
  new Dotenv({ defaults: true }),
  ...additionalPlugins[MODE],
]

module.exports = {
  mode: MODE,
  devtool: devtool[MODE],
  context: SRC_PATH,
  entry: {
    main: 'index.tsx',
  },
  stats: 'minimal',
  output: {
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', SRC_PATH],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssLoaderOptions[MODE],
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: p.resolve(__dirname, 'dist'),
    filename: 'main.js',
    overlay: {
      errors: true,
    },
    historyApiFallback: true,
  },
  plugins,
}

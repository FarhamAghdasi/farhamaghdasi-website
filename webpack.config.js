const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // یا 'development'
  entry: './src/index.js', // ورودی اپلیکیشن
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/, // انواع تصاویر
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // حفظ ساختار پوشه
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // فشرده‌سازی تصاویر PNG
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              // فشرده‌سازی تصاویر GIF
              gifsicle: {
                interlaced: false,
              },
              // فشرده‌سازی تصاویر SVG
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    usedExports: true, // فعال کردن Tree Shaking
  },
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

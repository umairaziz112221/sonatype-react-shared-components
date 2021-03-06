/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyModulesPlugin = require('copy-modules-webpack-plugin');

const libImgDir = path.resolve(__dirname, 'node_modules/@sonatype/react-shared-components/assets/img');

module.exports = function(env = { production: false }) {
  const productionPlugins = env.production ? [
    new CopyModulesPlugin({
      destination: 'webpack-modules',
      includePackageJsons: true
    })
  ] : [];

  return {
    mode: 'development',
    context: path.resolve(__dirname, 'src/'),
    entry: './main.tsx',
    output: {
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      symlinks: false,
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
      rules: [{
        test: /\.(t|j)sx?$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/fuse.js/')
        ]
      }, {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        include: libImgDir,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }, {
        include: /\.png$/,
        exclude: libImgDir,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }, {
        test: /\.(ttf|eot|woff2?|svg)$/,
        exclude: libImgDir,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }, {
        test: /\.html$/,
        loader: 'raw-loader',
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'gallery.css'
      }),
      ...productionPlugins
    ],
    devtool: 'eval-sourcemap',
    devServer: {
      port: 4043,
      host: '0.0.0.0',
      publicPath: '/',
      contentBase: path.join(__dirname, 'src')
    }
  };
};

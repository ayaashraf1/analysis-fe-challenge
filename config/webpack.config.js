const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: { querystring: require.resolve('querystring-es3') },
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      interfaces: path.resolve(__dirname, 'src/shared/interfaces/'),
      methods: path.resolve(__dirname, 'src/shared/methods/'),
      services: path.resolve(__dirname, 'src/services'),
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
      state: path.resolve(__dirname, 'src/state')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

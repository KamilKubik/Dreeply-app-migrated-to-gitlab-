module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      child_process: false,
      // and also other packages that are not found
    },
  },
  node: {
    child_process: 'empty',
    fs: 'empty', // if unable to resolve "fs"
    net: 'empty',
    tls: 'empty',
  },
};

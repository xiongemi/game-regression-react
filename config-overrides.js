// copied from https://material-ui.com/guides/minimizing-bundle-size/ to reduce material-ui bundle size
const { useBabelRc, override } = require('customize-cra')

module.exports = override(
  useBabelRc()
);
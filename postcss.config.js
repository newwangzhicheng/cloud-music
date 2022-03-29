const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: {
    autoprefixer,
    'postcss-px-to-viewport': {
      viewportWidth: 375
    }
  }
};

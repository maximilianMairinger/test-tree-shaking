const merge = require('webpack-merge');

module.exports = (env) => {
  const common = require('./webpack.common.config.js')(env);
  return merge(common, {
    watch: true,
    mode: "production",
  })
};

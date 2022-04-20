const { defineConfig } = require('@vue/cli-service');

const vueConfigs = {
  transpileDependencies: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
module.exports = defineConfig(vueConfigs);

const { defineConfig } = require('@vue/cli-service');

const vueConfigs = {
  transpileDependencies: true,
  devServer: {
    liveReload: false,
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};
module.exports = defineConfig(vueConfigs);

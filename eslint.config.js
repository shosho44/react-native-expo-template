const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslint = require("@eslint/js");
const eslintPluginConfigs = require("@typescript-eslint/eslint-plugin");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    plugins: {
      eslintPluginConfigs: eslintPluginConfigs,
      eslintPlugin: eslint,
    },
  },
]);

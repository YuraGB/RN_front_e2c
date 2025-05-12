const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);
const path = require("path");
const { withNativeWind } = require('nativewind/metro');

config.resolver.assetExts.push("png");
config.resolver.extraNodeModules = {
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  'react-native-web': path.resolve(__dirname, 'node_modules/react-native-web'), 
};

// // Додати налаштування для require.context
// config.transformer.unstable_allowRequireContext = true;


config.transformer = {
  ...config.transformer,
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
     getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    minifierConfig: {
      mangle: {
        keep_classnames: false,
        keep_fnames: false,
      },
      compress: {
        drop_console: true,
        passes: 1,
      },
    },
  };
  
  config.resolver.extraNodeModules = {
    "react-native": path.resolve(__dirname, "node_modules/react-native"),
  };

  module.exports = withNativeWind(config, { input: './app/global.css' })
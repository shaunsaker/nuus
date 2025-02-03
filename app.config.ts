import 'ts-node/register'

import { ConfigContext, ExpoConfig } from 'expo/config'

import { Theme } from './constants/Theme'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'nuus',
  slug: 'nuus',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/images/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: Theme.primary,
  },
  ios: {
    bundleIdentifier: 'com.sakerbos.nuus',
    supportsTablet: true,
  },
  android: {
    package: 'com.sakerbos.nuus',
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: Theme.primary,
    },
  },
  androidStatusBar: {
    barStyle: 'dark-content',
    backgroundColor: Theme['base-100'],
  },
  plugins: ['expo-router'],
  experiments: {
    typedRoutes: true,
  },
})

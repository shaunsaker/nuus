import { ConfigContext } from "expo/config";
import { ExpoConfig } from "expo/config";
import "ts-node/register";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "nuus",
  slug: "nuus",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
});

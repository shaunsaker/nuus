import { Theme } from './constants/Theme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...Theme,
      },
    },
  },
  plugins: [],
}

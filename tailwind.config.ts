import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-blue-400': '#abcde',
      },
      backgroundImage: {
        'shop-background': "url('/background.jpg')"
      }
    }
  },
  plugins: [],
}

export default config

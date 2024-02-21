import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: {
          dark: '#184d66',
          light: '#c2ebff',
        },
        btn: {
          dark: '#1c4f68',
          light: '#204a5c',
        },
        container: {
          dark: '#7bbcd3',
          light: '#47788d',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config

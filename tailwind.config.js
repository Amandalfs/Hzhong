/** @type {import('tailwindcss').Config} */
module.exports = {
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
        fontFamily: {
          sans: 'var(--font-poppins)',
          alt: 'var(--font-baijamjuree)',
        },
        black: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple: {
          50: '#F8F0FF',
          100: '#D9B0FF',
          200: '#D9B7FF',
          300: '#C69CFF',
          400: '#B183FF',
          500: '#9A6CF1',
          600: '#8357DC',
          700: '#6D45C0',
          800: '#57359F',
          900: '#42287A',
        },
        pink: {
          50: '#FFEEF5',
          100: '#FFCBE2',
          200: '#FFA7CF',
          300: '#FF84BC',
          400: '#FF61A8',
          500: '#EE3F94',
          600: '#D71A80',
          700: '#BB006B',
          800: '#9A0056',
          900: '#760041',
        }
      }
    },
  },
  plugins: [],
}

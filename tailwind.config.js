/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '8p': '8%',
        '17p': '17%',
        '75p': '75%',
      },
    },
  },
  plugins: [],
};

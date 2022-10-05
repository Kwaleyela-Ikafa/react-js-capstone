module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      blue: '#2563eb',
      white: '#ffffff',
      green: '#a3e635',
      red: '#ef4444',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

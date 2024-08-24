// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add your paths here
    './node_modules/flowbite/**/*.js', // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Add this line
  ],
}

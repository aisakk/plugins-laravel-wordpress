/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/css/app.css',
      './resources/**/*.blade.php',
      './resources/**/*.jsx',
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#4054b2',
            'secondary': '#fa6000'
        },
        animation:{
            'bounce-slow': 'bounce 3s infinite'
        }
    },
  },
  plugins: [],
}

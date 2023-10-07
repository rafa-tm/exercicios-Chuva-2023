/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'quick': ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        'primary': '#ED7839',
        'secondary': '#FFB354',
        'tertiary': "#FDF1EB",

      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#ED7839',
        'secondary': '#FFB354',
        'tertiary': "#FDF1EB",
      }),
      backgroundImage: theme => ({
        'video-back': "url('assets/images/backgroundVideo.png')",

      }),

    },
  },
  plugins: [],
}


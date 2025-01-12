/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    // colors: {
    //   "twitter-blue": "#1DA1F2",
    // },
    extend: { colors: {
      "twitter-blue": "#1DA1F2",
    },},
  },
  plugins: [],
}


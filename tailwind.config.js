/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A", // blue-800
          secondary: "#FBBF24", // yellow-400
          accent: "#4ADE80", // green-400
          neutral: "#374151", // gray-700
          "base-100": "#FFFFFF", // white
          info: "#3ABFF8", // cyan-500
          success: "#36D399", // green-500
          warning: "#FBBD23", // yellow-500
          error: "#F87272", // red-500
          dark: "#1F2937", // gray-800
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          serif: ["Merriweather", "serif"],
          mono: ["Fira Code", "monospace"],
        },
      },
    },
    darkMode: 'class', 
    plugins: [],
  }
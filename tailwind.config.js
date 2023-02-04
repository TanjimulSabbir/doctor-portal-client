/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'appointment-bg': "url('/src/components/Assets/Images/bg.png')",
      },
      colors: {
        color1: "#19D3AE",

      },
      backgroundColor: {
        bg1: 'bg-gradient-to-r from-emerald-400 to-cyan-500'
      }
    },
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin'),
  ]
}

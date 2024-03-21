/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        "azul3":"#0AFCE6",
        "azul2":"#0CCDFB",
        "azul1":"#01E9EF",
        "azul-claro":"#74bedc",
        "azul-marca":"#14b0dd ",
        "azul":"#048acc ",
        "gris":"#7f878f ",
        "azul-fondo1":"#8AB3C8",
        "azul-fondo2":"#96CDDC",
        "azul-fondo3":"#9ACBDE",
        "gold":"#d5ab2e, #d5ab2e, #f4e3b0",
        "silver":"#85847c, #85847c, #cfcec2",
        "titanium":"#000000, #555555"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}

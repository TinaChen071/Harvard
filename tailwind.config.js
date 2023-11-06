/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js","node_modules/flowbite/**/*.js"],
  theme: {
    // screens: {
    //   'xs': '425px',
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    extend: {
      screens: {
        'xs': '480px'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '1/5': '20%',
        '4/5': '80%',
        '5/6': '83%',
        '6/5': '120%',
        '1/10': '10%',
        '1/20': '5%',
      },
      minHeight: {
        '1/2': '50%',
      },
      height: {
        'slider': '480px',
      },
      zIndex: {
        '100': '100',
      },
      backgroundSize: {
        '70%': '70%',
        '50%': '50%'
      }
    },
    fontFamily: {
      num:['Water Brush']
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
  
}

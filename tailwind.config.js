/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    backgroundImage: {
      'header1': "url(/images/header-1/header-big-1.jpg)",
      'header2': "url(/images/header-1/header-min-1.jpg)",
      'header3': "url(/images/header-1/header-min-2.jpg)",
    },
    colors: {
      'Green-Sea': '#00acb2', 
      'Grey' : '#4c4c4c',
      'Violet' : '#542ded',
      'White' : '#ffff',
      'Black' : '#000',
    },
    fontFamily: {
      'rubik' : ['rubik']
    },
    //   medium: '500',
    // },
    extend: {
      height: {
        '80' : '80vh',
      },
    },
  },
  plugins: [],
}

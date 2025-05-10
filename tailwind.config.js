/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'bg-header': '#17181E',
        'main' : '#f5f5f5',
        'primary' : '#F7A600',
        'bg-tab' : '#F7A60029'
      },
      fontFamily:{
        yekReg : 'YekanBakhFaNum-Regular',
        yekB : 'YekanBakhFaNum-Bold',
        yekSemiB: 'YekanBakhFaNum-SemiBold',
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}

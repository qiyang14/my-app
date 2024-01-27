import type { Config } from 'tailwindcss'
// const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
      colors: {
        'black':'#000000',
        'grey-font':'#877E7E',
        'blue':'#404CCD',
        'green':'#54958B',
        "dark-blue": "#383D56",
        'menu': '#D9D9D980'
      },
      fontFamily: {
        'Lato':['lato'],
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
export default config

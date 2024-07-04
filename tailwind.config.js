/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        iransans: ['var(--site-font)']
      },
      fontSize : {
        "size-1" : "80px",
        "size-2" : "36px",
        "size-3" : "26px",
        "size-4" : "17px",
      },
      colors : {
        primary : {
           "50" : "#EBFFFD",
           "100" : "#80D3C9",
           "300" : "#00A693",
           "400" : "#008777",
           "600" : "#00685C",
           "700" : "#004840",
           "800" : "#002924",
           "900" : "#21470A",
        },
        secondry : {
          "500" : "#D6725C"
        },
        hgray : {
          "100"  : "#ffffff",
          "200"  : "#fafafb",
          "300"  : "#e7e7ea",
          "350"  : "#bfbfbf",
          "400"  : "#7c7c7c",
          "500"  : "#686868",
          "600"  : "#59595a",
        },
        mdark : {
          "300" : "#80D3C9",
          "400" : "#3C4059",
          "500" : "#1C1C28",
          "600" : "#28293D",
        },
        "text-dark" : {
           "1" : "#E7FADB",
           "2" : "#F7E2DE",
           "3" : "#E1EFF4",
           "4" : "#E5DFF6",
           "5" : "#FEFDD8",
        },
      },
      
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  // plugins: [
  //   require('@tailwindcss/container-queries'),
  //   require('@tailwindcss/typography'),
  //   plugin(({ matchUtilities, theme }) => {
  //     matchUtilities(
  //       {
  //         'animation-delay': (value) => {
  //           return {
  //             'animation-delay': value
  //           };
  //         }
  //       },
  //       {
  //         values: theme('transitionDelay')
  //       }
  //     );
  //   }),
  // ]
}
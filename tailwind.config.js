/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
    './src/navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'rubik-light': ['RubikLight'],
        'rubik-light-italic': ['RubikLightItalic'],
        'rubik-regular': ['RubikRegular'],
        'rubik-regular-italic': ['RubikRegularItalic'],
        'rubik-medium': ['RubikMedium'],
        'rubik-medium-italic': ['RubikMediumItalic'],
        'rubik-semi-bold': ['RubikSemiBold'],
        'rubik-semi-bold-italic': ['RubikSemiBoldItalic'],
        'rubik-bold': ['RubikBold'],
        'rubik-bold-italic': ['RubikBoldItalic'],
        'rubik-extra-bold': ['RubikExtraBold'],
        'rubik-extra-bold-italic': ['RubikExtraBoldItalic'],
        'rubik-black': ['RubikBlack'],
        'rubik-black-italic': ['RubikBlackItalic'],
      },
      colors: {
        primary: '#28AF6E',
        black: '#000',
        white: '#fff',
        background: '#FDFFFE',
        secondary: {
          DEFAULT: '#757575',
          light: '#E0E0E0',
        },

        input: {
          placeholder: '##AFAFAF',
        },
        accent: {
          purple: '#9C27B0',
          orange: '#FF9800',
          blue: '#03A9F4',
        },
        text: {
          DEFAULT: '#13231B',
          light: '#13231bb3',
          muted: '#597165B2',
        },
        dot: {
          active: '#13231B',
          inactive: '#C1C6C4',
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./script.js"], 
  theme: {
    extend: {
      screens: {
        'md-large': '1400px', // Custom breakpoint
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'], // Explicitly enable `hover` for text color
    },
  },
  plugins: [],
};
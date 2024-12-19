// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./styles/**/*.{css}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6',
        },
        purple: {
          600: '#7c3aed',
        },
      },
      boxShadow: {
        xl: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};

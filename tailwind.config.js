/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  safelist: [
    {
      pattern: /bg-*/,
    },
    {
      pattern: /min-h-*/,
    },
    {
      pattern: /max-h-*/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

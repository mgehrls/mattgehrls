/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'darkBackground': '#0f172a',
        'darkBodyText': '#94a3b8',
        'darkMidText': '#64748b',
        'darkHeadingText': '#e2e8f0',
        'lightPrimary': '#F9F7F7',
        'lightSecondary': '#DBE2EF',
        'lightAccent': '#3F72AF',
        'lightModeText': '#112D4E',
      }
    },
  },
  plugins: [],
}

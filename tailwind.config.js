/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        editor: {
          bg: '#1E1E1E',
          sidebar: '#252526',
          line: '#2D2D2D',
          text: '#D4D4D4',
          accent: '#007ACC',
          comment: '#6A9955',
          keyword: '#569CD6',
          string: '#CE9178',
          function: '#DCDCAA',
        }
      },
      fontFamily: {
        mono: ['Geist Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Geist Mono', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            lightHover: '@fcf4ff',
            darkHover: '#f3e8ff',
            darkTheme: '#1e293b',
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"],
        }
    },
  },
  plugins: [],
};

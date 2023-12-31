/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        grid: "url('/svg/bg-grid.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#fffeea",
          100: "#fffac5",
          200: "#fff685",
          300: "#ffea46",
          400: "#ffdb1b",
          500: "#ffbb00",
          600: "#e29000",
          700: "#bb6502",
          800: "#984e08",
          900: "#7c400b",
          950: "#482100",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f4e8ff",
          200: "#ebd5ff",
          300: "#dbb4fe",
          400: "#c384fc",
          500: "#aa55f7",
          600: "#9333ea",
          700: "#7c22ce",
          800: "#6821a8",
          900: "#541c87",
          950: "#380764",
        },
      },
      fontFamily: {
        heading: ["Gabarito", "sans-serif"],
        body: ['"IBM Plex Sans"', "sans-serif"],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "13xl": "12rem",
        "14xl": "13rem",
      },
      animation: {
        "float-in-once": "float-in 750ms ease-in-out forwards",
        "float-in": "float-in linear both",
      },
      keyframes: {
        "float-in": {
          "0%": { opacity: 0, transform: "translateY(1.5rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, addUtilities, theme }) {
      addComponents({
        ".container": {
          width: "90%",
          maxWidth: "80rem",
          margin: "0 auto",
        },
      });

      const delays = [];
      for (let delay = 100; delay <= 2000; delay += 100) {
        delays.push(delay);
      }

      delays.forEach((delay) => {
        addUtilities({
          [`.animation-delay-${delay}`]: { animationDelay: `${delay}ms` },
        });
      });

      addUtilities({
        "animation-timeline-view": "animation-timeline: view();",
        "animation-range-1/2": "animation-range: entry 50% cover 50%;",
      });
    },
  ],
};

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat Variable", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "dark-md": "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)", // Custom light shadow for dark mode
      },
      colors: {
        "smo-grey": {
          50: "#f5f6f6",
          100: "#e6e7e7",
          200: "#d0d1d1",
          300: "#b0b0b0",
          400: "#898a8a",
          500: "#6c6d6e",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3c3d3d",
          950: "#262626",
        },
        "smo-brown": "#957f40",
        "smo-blue": {
          50: "#f0f5fe",
          100: "#dde7fc",
          200: "#c3d6fa",
          300: "#9abdf6",
          400: "#6a9af0",
          500: "#4777ea",
          600: "#3259de",
          700: "#2946cc",
          800: "#273aa6",
          900: "#27388a",
          950: "#1b2250",
        },
        "smo-yellow": {
          50: "#fefaec",
          100: "#fbf0ca",
          200: "#f8e18f",
          300: "#f3c84a",
          400: "#f1b72e",
          500: "#ea9716",
          600: "#cf7210",
          700: "#ac5111",
          800: "#8c4014",
          900: "#733414",
          950: "#421a06",
        },
      },
      typography: ({ theme }) => ({
        cv: {
          css: {
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-headings": theme("colors.neutral[900]"),
            "--tw-prose-lead": theme("colors.neutral[600]"),
            "--tw-prose-links": theme("colors.neutral[900]"),
            "--tw-prose-bold": theme("colors.neutral[900]"),
            "--tw-prose-counters": theme("colors.neutral[500]"),
            "--tw-prose-bullets": theme("colors.neutral[300]"),
            "--tw-prose-hr": theme("colors.neutral[200]"),
            "--tw-prose-quotes": theme("colors.neutral[900]"),
            "--tw-prose-quote-borders": theme("colors.neutral[200]"),
            "--tw-prose-captions": theme("colors.neutral[500]"),
            "--tw-prose-kbd": theme("colors.neutral[900]"),
            "--tw-prose-code": theme("colors.neutral[900]"),
            "--tw-prose-pre-code": theme("colors.neutral[200]"),
            "--tw-prose-pre-bg": theme("colors.neutral[800]"),
            "--tw-prose-th-borders": theme("colors.neutral[300]"),
            "--tw-prose-td-borders": theme("colors.neutral[200]"),
            "--tw-prose-invert-body": theme("colors.neutral[300]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.neutral[400]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.neutral[400]"),
            "--tw-prose-invert-bullets": theme("colors.neutral[600]"),
            "--tw-prose-invert-hr": theme("colors.neutral[700]"),
            "--tw-prose-invert-quotes": theme("colors.neutral[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.neutral[700]"),
            "--tw-prose-invert-captions": theme("colors.neutral[400]"),
            "--tw-prose-invert-kbd": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.neutral[300]"),
            "--tw-prose-invert-pre-bg": theme("rgb(0 0 0 / 50%)"),
            "--tw-prose-invert-th-borders": theme("colors.neutral[600]"),
            "--tw-prose-invert-td-borders": theme("colors.neutral[700]"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

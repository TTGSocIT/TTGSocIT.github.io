import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0098FE",

        textColor: "#232323",
        textColorBg: "#ffffff",
        subTitleColor: "#808080",
        subTitleColorBg: "#808080",
        titleColor: "#0042ab",
        titleColorBg: "#0075f3",

        accentColor: "#4d9d01",
        eventColorBg: "#808080",

        panelColor: "#232323",
        panelSecondaryColor: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;

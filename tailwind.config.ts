import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'motiva-sans': ['Motiva Sans', 'sans-serif'],
      },
      colors: {
        mainText: "#F3F3F3",
        dimText: "#76808C",
        bgMain: "#0E141B",
        bgHighlight: "#1E2329",
        bgHover: "#313843",
        bgSecondary: "#14344B",
        bgTertiary: "#212B45",
        colorPrimary: "#66C0F4",
        colorSecondary: "#4B619B",
        accentGreen: "#A1CD44",
        hoverAccentGreen: "#abd64f",
        accentRed: "#CD5444",
        accentYellow: "#C1B15F",
      },
    },
  },
  plugins: [],
};
export default config;

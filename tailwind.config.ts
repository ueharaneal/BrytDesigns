import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  plugins: [],
  theme: { 
    extend: { 
      colors: { 
        primary: `#100C08`,
        card: `#FAFAFA`,
        border: `#E5E7EB`,
        pop: `#7B68EE`,
        popDark: '#6458BA'
      },
    },
  }
};
export default config;

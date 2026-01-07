import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F4F0", // cream background
        "background-dark": "#0A0A0A",
        accent: "#FF4D00", // orange accent
        "accent-soft": "#FFF0E8", // soft orange
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

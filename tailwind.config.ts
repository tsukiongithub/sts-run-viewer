import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sts: {
          bg: "#28373b",
        },
      },
      fontFamily: {
        sts: ["Slay the Spire"],
      },
    },
  },
  plugins: [],
} satisfies Config;

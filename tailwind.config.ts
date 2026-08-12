import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7EF",
        cream: "#F5EDDF",
        sand: "#EAD9BC",
        taupe: "#A88E6E",
        "taupe-dark": "#8A7256",
        espresso: "#3A2A1D",
        "espresso-soft": "#5B4633",
        sage: "#8C9678",
        "sage-soft": "#AEB79C",
        olive: "#6B6B45",
        line: "#E4D5B7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.08em",
        wide3: "0.14em",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 2px 24px -4px rgba(58, 42, 29, 0.08)",
        card: "0 4px 32px -8px rgba(58, 42, 29, 0.12)",
        lift: "0 20px 48px -12px rgba(58, 42, 29, 0.18)",
      },
      borderRadius: {
        xl2: "1.75rem",
        "3xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(0.6deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FEF3E2",
          100: "#FDE4C4",
          200: "#FBC78A",
          300: "#F9A94F",
          400: "#F18B1F",
          500: "#E67E22", // orange-600
          600: "#D35400",
          700: "#B7472A",
          800: "#9C3D2E",
          900: "#7D3429",
          DEFAULT: "#E67E22", // orange-600
        },
        secondary: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#2C3E50", // slate-800
          900: "#0F172A",
          DEFAULT: "#2C3E50", // slate-800
        },
        accent: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F39C12", // amber-500
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          DEFAULT: "#F39C12", // amber-500
        },
        background: "#FEFEFE", // neutral-50
        surface: "#F8F9FA", // gray-50
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#6C757D", // gray-500
        },
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#27AE60", // green-600
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          DEFAULT: "#27AE60", // green-600
        },
        warning: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#F1C40F", // yellow-400
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
          DEFAULT: "#F1C40F", // yellow-400
        },
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#E74C3C", // red-500
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          DEFAULT: "#E74C3C", // red-500
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Nunito Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.875rem)',
      },
      borderRadius: {
        'standard': '8px',
        'small': '4px',
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(44, 62, 80, 0.08)',
        'medium': '0 4px 12px rgba(44, 62, 80, 0.08)',
        'prominent': '0 8px 24px rgba(44, 62, 80, 0.08)',
        'primary-subtle': '0 2px 4px rgba(230, 126, 34, 0.1)',
        'primary-medium': '0 4px 12px rgba(230, 126, 34, 0.1)',
        'primary-prominent': '0 8px 24px rgba(230, 126, 34, 0.1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}
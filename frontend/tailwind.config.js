/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Noto Serif", "serif"],
      },
      colors: {
        "dark-gray": "#333333",
        teal: "#008080",
        bluewhte: "#0358a8",
        semiWhite: "#FEFEDF",
        boder_color: "#CED4DA",
        label_color: "#495057",
        whiteBlue: " #C4FCEF",
        whiteBluelg: "#00C9A7",
        bluelg: "#053369",
        bestRed: "#eb2f06",
        bestGreen: "#B05C00",
        softPeach: "#112D4E",
        cazyTaupe: "#DBE2EF",
        ToastedAlmond: "#F9F7F7",
        orangeBetter: "#ef9e06",
      },
      backgroundImage: {
        "gradinatDark-gray":
          "linear-gradient(109deg, rgba(85,94,99,1) 0%, rgba(26,26,48,1) 67%, rgba(19,37,41,1) 100%)",
      },
      margin: {
        "50%": "20%",
      },
      spacing: {
        70: "17.5rem",
        "94%": "94%",
        "150%": "150%",
        "200%": "200%",
        "80%": "80%",
        "85%": "85%",
        "88%": "88%",
        "90%": "90%",
        "70%": "70%",
        "73%": "73%",
        "60%": "60%",
        "63%": "63%",
        "55%": "55%",
        "50%": "50%",
        54: "13.5rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};

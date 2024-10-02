module.exports = {
  content: ["./src/*.html", "./src/*.js"],
  theme: {
    extend: {
      height: {
        88: "22rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

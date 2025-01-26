/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./contact.html",
    "./about.html",
    "./services.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // one: "#EF9595",
        // two: "#EFB495",
        one: "#E6EBE0",
        two: "#9BC1BC",
        three: "#EFD595",
        four: "#EBEF95",
        lime: "lime",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Phudu: ["Phudu", "cursive"],
      },
      gridTemplateColumns: {
        "2/3": " 2fr 3fr",
        "3/1": " 3fr 1.3fr",
        autofill: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      gridAutoRows: {
        test: "450px",
      },
      backgroundImage: {
        // hero: "url('../images/hero1.jpg')",
        hero: "url('../images/home-3.jpg')",
        "hero-mobile": "url('../images/home-3-mobile.jpg')",
        // "hero-mobile": "url('../images/hero-mobile.jpg')",
        "concat-header": "url('../images/contact-new.jpg')",
        "about-header": "url('../images/about-10.jpg')",
        "services-header": "url('../images/servives2.jpg')",
      },
    },
  },
  plugins: [],
};

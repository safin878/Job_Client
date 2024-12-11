// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};

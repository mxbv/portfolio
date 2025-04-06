// import adapter from "@sveltejs/adapter-static";

// const config = {
//   kit: {
//     adapter: adapter({
//       fallback: "index.html", // fallback для SPA
//     }),
//   },
// };

// export default config;

import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html' // важная строка для GitHub Pages
    }),
    paths: {
      base: '' // так как ты хочешь использовать root
    },
    prerender: {
      entries: ['*']
    }
  }
};

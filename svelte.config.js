import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html", // fallback для SPA
    }),
  },
};

export default config;

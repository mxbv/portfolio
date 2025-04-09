import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/mxbv.github.io" : "",
    },
  },
};

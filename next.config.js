module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};
const withTM = require('next-transpile-modules')(['gsap']);
module.exports = withTM();
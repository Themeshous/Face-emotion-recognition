const path = require("path");
const fs = require("fs");

module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
    },
  },
  target: "node",
};

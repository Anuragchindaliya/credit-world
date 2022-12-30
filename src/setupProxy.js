const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://credit-world.onrender.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};

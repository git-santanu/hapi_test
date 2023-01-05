"use strict";
const baseRouter = require("./routes");
const server = require("./config/server");
const init = async () => {
  await server.register(baseRouter, {
    routes: {
      prefix: "/api",
    },
  });
  await server.register({
    plugin: require("hapi-geo-locate"),
    options: {
      enableByDefault: true,
    },
  });
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

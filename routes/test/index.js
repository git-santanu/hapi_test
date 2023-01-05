const Test = require('../../controllers/Test');
const router = [
  {
    method: "GET",
    path: "/hello",
    handler: Test.helloWorld
  },
  {
    method: "GET",
    path: "/name/{username}",
    handler: (request, h) => {
      if (request.params.username) {
        return `<h1>Hello ${request.params.username}, Welcome to Hapi JS</h1>`;
      } else {
        return h.redirect("/");
      }
    },
  },
  {
    method: "GET",
    path: "/location",
    handler: (request, h) => {
      return request.location;
    },
  },
];
module.exports = router;

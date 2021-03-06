var path = require("path");
module.exports = function(app){

  app.get("/", (req, res) =>(
    res.render("about")
  ));

  app.get("/contact", (req, res) => (
    res.render("contact")
  ));

  app.get("/portfolio", (req, res) => (
    res.render("portfolio")
  ));

  app.get("/sent", (req, res) => (
    res.render("emailSent")
  ));

  app.get("/error", (req, res) => (
    res.render("oops")
  ));
}



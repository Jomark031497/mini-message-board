var express = require("express");
var router = express.Router();
var moment = require("moment");

const messages = [
  {
    text: "Hi There, This is really cool!",
    user: "Arbi",
    added: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  },

  {
    text: "Yes it is cool, Odin is the best!",
    user: "Katie",
    added: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res, next) => {

  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
  };

  //push the message to the message array
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;

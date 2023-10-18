const express = require("express");
const router = express.Router();
let getFormatedDate = () => {
  let currentDate = new Date();
  let day = currentDate.getDay();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  // formatting date
  day = day.toString().length === 1 ? "0" + day : day;
  month = month.toString().length === 1 ? "0" + month : month
  hours = hours.toString().length === 1 ? "0" + hours : hours
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes

  let formattedDate = `${day}/${month}/${year} at ${hours}:${minutes}`
  return formattedDate;
}
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: getFormatedDate()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: getFormatedDate()
  }
];


router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini message Board", messages })
});

router.post("/", (req, res, next) => {
  let { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: getFormatedDate() })
  res.redirect("/");
})


module.exports = router;
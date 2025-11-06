const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Let Express understand form data
app.use(bodyParser.urlencoded({ extended: true }));

// When you open the site, show the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

// When the form is submitted (POST), read and show data
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  res.send(`
    <h2>Form Submitted!</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
    <a href="/">Go back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

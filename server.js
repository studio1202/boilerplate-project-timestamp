"use strict";

require('dotenv').config();
const express = require('express');
const app = express();

// enable CORS so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204
const { dateToFccFormat, timeStampToDate } = require("./controllers/timestampToDate");

// log requests to the console
// app.use(function (req, res, next) {
//   console.log([req.ip, req.method, req.path].join(" "));
//   next();
// });

app.use(express.static('public'));

// home page with instructions
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// user requests the current date
app.get("/api/timestamp/", function (req, res) {
  res.json(dateToFccFormat(new Date()));
});

// user requests a specific date
app.get("/api/timestamp/:timestamp", function (req, res) {
  let date = timeStampToDate(req.params["timestamp"]);
  // if the date is not valid return an error
  if (isNaN(date)) {
    res.status(400).json({ error: "Invalid Date" });
  } else {
    res.json(dateToFccFormat(date));
  }
});

// listen for requests
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

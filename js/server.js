var http = require("http");
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);

"use strict";

// Start Server
var serverStart = function() {
  http.createServer(function (request, response) {

     response.writeHead(200, {"Content-Type": "text/plain"});

     response.end("great");
     console.log("up and runnin");
  }).listen(8081);

  // Console will print the message
  console.log("Server running at http://127.0.0.1:8081/");

}



// Function that finds the Currency

var getCurrency = function() {

  $.ajax({
    type: "GET",
    url: "https://api.bitcoinaverage.com/ticker/global/CAD/last",
    success: successCallback,
    error: errorCallback
  });

  function successCallback(html) {
      console.log("Success");
      console.log(html);
  }

  function errorCallback() {
    console.log("Error connecting to Bitcoin server");
  }

}

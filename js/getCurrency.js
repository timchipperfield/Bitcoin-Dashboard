var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);


// (function(exports) {
	var getCurrency = function() {

	  $.ajax({
	    type: "GET",
	    url: "https://api.bitcoinaverage.com/ticker/global/",
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
// 
// exports.getCurrency = getCurrency;
// })(this);

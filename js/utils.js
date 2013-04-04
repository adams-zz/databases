// utility function for setting authentication headers.
// use it like this: 
// $.ajax(url, {
//   ...,
//   beforeSend: headerSetter
// })
var headerSetter = function(xhr) {

}

var spammer = function() {
	setInterval(function(){$("form button.submit").click();}, 1)
}

base_url = "//api.globemail2.com"

function send_to_server(email, token, flag,post_login) {
	$.ajax({
		url: base_url+'/user/login',
		type: 'POST',
		dataType: 'json',
		data: {access_token: token}
	})
	.done(function(response) {
		post_login(response);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}
function toast (kind,title,message) {
	toastr.clear();
	toastr.options = {
		"closeButton": true,
		"debug": false,
		"progressBar": false,
		"positionClass": "toast-bottom-left",
		"onclick": null,
		"showDuration": "400",
		"hideDuration": "1000",
		"timeOut": "3000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "slideDown",//fadeIn
		"hideMethod": "slideUp"//fadeOut
	}
	toastr[kind](message,title);
}

base_url = "http://chandra"

function send_to_server(email, token, flag,post_login) {
	data = {
		access_token: token,
	};
	data = JSON.stringify(data);
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": base_url + "/user/login",
		"method": "POST",
		"headers": {
			"content-type": "application/json",
		},
		"processData": false,
		"data": data
	}
	$.ajax(settings).done(function(response) {
		if (response.status) {
			console.log(response);
			post_login();
		} else {
			alert("There was an error with login");
		}
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

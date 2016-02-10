window.fbAsyncInit = function() {
	FB.init({
		appId	: '438562323005992',
		xfbml	: true,
		version	: 'v2.5'
	});
};
(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function FbLogin (post_login) {
	$('#loader').show();
	FB.login(function(response) {
		if(response.status=="connected"){
			var token=response.authResponse.accessToken;
			FB.api("/me?fields=email",function(e){
				$("#loader_message").html("Connecting to Venturesity");
				send_to_server(e.email,token,"facebook",post_login);
			});
		}else{
			alert("An error occured, please try again later");
		}
	}, {scope: 'public_profile,email'});
}
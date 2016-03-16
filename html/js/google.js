var googleUser = {};
var startApp = function(post_login) {
	gapi.load('auth2', function(){
		// Retrieve the singleton for the GoogleAuth library and set up the client.
		auth2 = gapi.auth2.init({
			client_id: '866489289228-3865sn8njsgr1e71v1q94r2rg1uprb0h.apps.googleusercontent.com',
			cookiepolicy: 'single_host_origin'
			// Request scopes in addition to 'profile' and 'email'
			//scope: 'additional_scope'
		});
		attachSignin(document.getElementById('google_login'),post_login);
	});
};
function attachSignin(element,post_login) {
	auth2.attachClickHandler(element, {},
		function(googleUser) {
			onSignIn(googleUser,post_login);
		}, function(error) {
			alert(JSON.stringify(error, undefined, 2));
	});
}
function onSignIn(googleUser,post_login) {
	console.log("Signed In");
	// Useful data for your client-side scripts:
	var profile = googleUser.getBasicProfile();
	console.log(profile.getEmail());
	console.log(googleUser.hg.access_token);
	$('#loader_message').html('Connecting to Venturesity');
	// console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	// console.log("Name: " + profile.getName());
	// console.log("Image URL: " + profile.getImageUrl());
	// console.log("Email: " + profile.getEmail());
	// The ID token you need to pass to your backend:
	send_to_server(profile.getEmail(),googleUser.hg.access_token,"google",post_login);

}
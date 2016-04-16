var base_url="http://chandra";
var svg_style={
	WebkitFilter:"url(#f2)"
}
var half_width={
	width : "50%"
}
var tooltip_style={
	width: "25%"
}
var DisplayNone={
	display:"none"
}
var BackGroundTransparent={
	backgroundColor:"transparent"
}
var backgroundLight={
	backgroundColor:"#DEDEE0"
}
var backgroundLightF5F5={
	backgroundColor:"#F5F5F5"
}
var Login = React.createClass({
			post_login:function(response){
				console.log(response.auth_token);
				Cookies.set('auth-token',response.auth_token);
			},
			componentDidMount: function(){
				// window.history.pushState("login", "Login", "/login");
				startApp(this.post_login);
				document.getElementById('svg');
					var tl = new TimelineMax({
						repeat: -1
					});

					tl.set('#outline', {
						drawSVG: '0% 0%'
					})
					.to('#outline', 0.2, {
						drawSVG: '11% 25%',
						ease: Linear.easeNone
					})
					.to('#outline', 0.5, {
						drawSVG: '35% 70%',
						ease: Linear.easeNone
					})
					.to('#outline', 0.9, {
						drawSVG: '99% 100%',
						ease: Linear.easeNone
					})
			},
			googleClicked:function(){
				$('#loader').show();
				$('#loader_message').html('Connecting to Google')
			},
	render:function(){
		return (
			<div className="app app-header-fixed">
				<div className="container w-xxl w-auto-xs" style={{marginTop:"15%"}}>
					<div className="m-b-lg">
						<form name="form" className="form-validation">
							<button type="button" onClick={this.googleClicked} id="google_login" className="btn btn-rounded btn-lg btn-danger btn-block"><i className="fa fa-fw fa-google-plus"></i>Login with Google</button>
						</form>
					</div>
					<div id="loader" style={{display:"none"}}>
						<span className="col-md-12 text-center" id="loader_message">Connecting to Facebook</span>
						<div className="col-md-12">
						</div>
					</div>
				</div>
			</div>
);
	}
});

ReactDOM.render(<Login />,document.getElementById('container'));

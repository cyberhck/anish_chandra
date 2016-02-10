//var base_url="http://api.venturesity.com";
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
			post_login:function(){
				alert("came");
			},
			componentDidMount: function(){
				// window.history.pushState("login", "Login", "/login");
				startApp(this.post_login);
				$("#facebook_login").on('click', function(event) {
					event.preventDefault();
					$("#svg").show();
					FbLogin(this.post_login);
				}.bind(this));
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
					<button type="button" onClick={this.googleClicked} id="google_login" className="btn btn-rounded btn-lg 
btn-danger btn-block"><i className="fa fa-fw fa-google-plus"></i>Login with Google</button>
				</form>
			</div>
			<div id="loader" style={{display:"none"}}>
				<span className="col-md-12 text-center" id="loader_message">Connecting to Facebook</span>
				<div className="col-md-12">
					<div id="svg">
						<svg width="300px" height="150px" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet">
							<path style={svg_style} stroke="#777" id="outline" fill="none" strokeWidth="4" 
strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
						
M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1
						c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
							<path id="outline-bg" opacity="0.30" fill="none" stroke="#777" strokeWidth="4" 
strokeLinecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
						
M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1
						c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
);
	}
});

//check which one to render
//if it's not valid, then render login again
//if it is valid, see what the URL looks like, then render according to URL
// if(!Cookies.get('auth-token')){
// 	ReactDOM.render(<Login />,document.getElementById('container'));
// }else{
// 	$.ajax({
// 		"async": true,
// 		"crossDomain": true,
// 		url: base_url+'/auth',
// 		type: 'POST',
// 		method:'POST',
// 		'withCredentials':true,
// 		dataType: 'json',
// 		"headers": {
// 				"content-type": "application/json",
// 				"auth-token":Cookies.get('auth-token')
// 		},
// 		"processData": false
// 	})
// 	.done(function() {
// 		var path=window.location.pathname;
// 		if(path=='/play'){
// 			ReactDOM.render(<div><NavBar /><McqContainer /></div>,document.getElementById('container'));
// 		}else if(path=='/interests'){
// 			ReactDOM.render(<div><NavBar /><InterestCard /></div>,document.getElementById('container'));
// 		}else if(path == '/login'){
// 			ReactDOM.render(<div><Login /></div>,document.getElementById('container'));
// 		}else{
// 			ReactDOM.render(<div><NavBar /><McqContainer /></div>,document.getElementById('container'));
// 		}
// 	})
// 	.fail(function() {
// 		//that means auth-token is not valid, render login again.
// 		ReactDOM.render(<Login />,document.getElementById('container'));
// 	});
// }
ReactDOM.render(<Login />,document.getElementById('container'));
var base_url="//api.globemail2.com";
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
				Cookies.set('auth-token',response.auth_token);
				ReactDOM.render(<ListImages />,document.getElementById('container'));
			},
			componentDidMount: function(){
				// window.history.pushState("login", "Login", "/login");
				startApp(this.post_login);
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
var ListImages = React.createClass({
	getInitialState:function(){
		return {data:[{image:"loading",placeholder:"loading",status:"loading"}]};
	},
	componentDidMount:function(){
		this.populate();
	},
	populate:function(){
		$.ajax({
			url: base_url+"/delivery/image",
			type: 'GET',
			dataType: 'json',
			"headers": {
							"auth-token":Cookies.get('auth-token')
						}
		})
		.done(function(response) {
			this.setState({data:response});
		}.bind(this))
		.fail(function(response) {
			console.log(response);
		})
		.always(function() {
			console.log("complete");
		});
	},
	done:function(){
		var alias = prompt("Choose a placeholder for this email");
		var data = $("div.compose_email").html();
		$.ajax({
			url: base_url+"/delivery/image",
			type: 'POST',
			dataType: 'json',
			data: {placeholder: alias},
			"headers": {
							"auth-token":Cookies.get('auth-token')
						}
		})
		.done(function(response) {
			data = data + "<img src='"+base_url+"/files/images/"+response.image+"' />";
			$("div.compose_email").html(data);
			this.populate();
		}.bind(this))
		.fail(function(response) {
			console.log(response);
		})
		.always(function() {
			console.log("complete");
		});
	},
	change_phone: function(){
		var new_phone = prompt("Enter new phone number");
		$.ajax({
			url: base_url+"/user/set_phone",
			type: 'POST',
			dataType: 'json',
			data: {phone: new_phone},
			"headers": {
							"auth-token":Cookies.get('auth-token')
						}
		})
		.done(function(response) {
			data = data + "<img src='"+base_url+"/files/images/"+response.image+"' />";
			$("div.compose_email").html(data);
			this.populate();
		}.bind(this))
		.fail(function(response) {
			console.log(response);
		})
		.always(function() {
			console.log("complete");
		});
	},
	render: function(){
		return (
			<div>
				<table className="table table-bordered">
					<tbody>
						<tr><th>image_id</th><th>alias</th><th>status</th></tr>
							{
								this.state.data.map(function (item){
									return (<tr><td>{item.image}</td><td>{item.placeholder}</td><td>{item.status}</td></tr>)
								})
							}
					</tbody>
			</table>
				Compose New:
				<div className='compose_email' contentEditable={true} style={{backgroundColor:"white",paddinig:"20px",height:300,width:"100%"}}>Compose Your Email Here</div>
				<button onClick={this.done}>Done</button> <button onClick={this.change_phone}>Set Phone</button>
			</div>
			)
	}
});
ReactDOM.render(<ListImages />,document.getElementById('container'));

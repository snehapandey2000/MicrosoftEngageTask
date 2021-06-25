import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length - 1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="mainContainer">
				<div>
					<h1 style={{ fontSize: "45px", fontWeight: "700", color: "#f7f8fc" }}>Microsoft Teams Clone</h1>
					<p style={{ fontWeight: "400" }}>Microsoft Teams clone submission for Microsoft Engage 2021</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px", color: "#4b53bc" }}>Start or Join a meeting</p>
					<Input placeholder="URL or Code" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
				</div>
				<div style={{ fontSize: "14px", fontWeight: "500", background: "#4b53bc", textAlign: "center", margin: "auto", marginBottom: "10px", marginTop: "100px" }}>
					Source code:
					<IconButton style={{ color: "black" }} onClick={() => window.location.href = ""}>
						<GitHubIcon />
					</IconButton>
				</div>
			</div>
		)
	}
}

export default Home;
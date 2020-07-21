import React, { Component } from 'react'
import './Login.css'
import Input from '../../components/common/Input/Input'

class Login extends Component {
	state = {
		fields: [
			{
				label: "User name",
				value: "",
				type: "text",
				id: "username"
			},
			{
				label: "Password",
				value: "",
				type: "password",
				id: "password"
			}
		]
	}
	
	submitHandler = (event) => {
		console.log("haha")
		event.preventDefault()
	}
	updateField = (id, value) => {
		const fields = [...this.state.fields]
		fields.forEach(field => {
			if (field.id === id) {
				field.value = value
			}
		})
		this.setState({
			fields
		})
	}

	render () {
		return (
			<form id="login-form" onSubmit={this.submitHandler}>
				{this.state.fields.map(field => (
					<Input
						key={field.id}
						id={field.id} 
						label={field.label}
						type={field.type}
						value={field.value}
						change={(event) => this.updateField(field.id, event.target.value)}
					/>
				))}
				<button type="submit">Login</button>
			</form>
		)
	}
}

export default Login

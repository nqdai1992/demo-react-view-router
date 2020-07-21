import React, { Component } from 'react'

class Articles extends Component {
	clickHandler = () => {
		this.props.history.push('/home')
	}
	render () {
		return (
			<div className="Articles">
				Articles
				<button onClick={this.clickHandler}>Back home</button>
			</div>
		)
	}
}

export default Articles
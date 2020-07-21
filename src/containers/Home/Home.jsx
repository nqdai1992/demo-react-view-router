import React from 'react'
import RouterView from '../../components/common/RouterView/RouterView'
export default function Home (props) {
	console.log(props)
	return (
		<div className="Home">
			HomePage
			<RouterView routes={props.childRoutes}/>
		</div>
	)
}
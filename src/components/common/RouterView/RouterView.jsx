import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'


export default function RouterView (props) {
	const match = useRouteMatch()	
	const routes = props.routes || []
	return (
		<Switch>
			{
				routes.map(route => {
					return <Route key={route.name} path={match.url + route.path} render={props => <route.component {...props} childRoutes={route.children} /> }></Route>
				})
			}
		</Switch>
	)
}
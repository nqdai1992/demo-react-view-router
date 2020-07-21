import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import Articles from './containers/Articles/Articles'
const routes = [
	{
		path: "login",
    name: "Dashboard",
		component: Login,
	},
	{
		path: "home",
    name: "Dashboard",
		component: Home,
		children: [
			{
				path: '/articles',
				name: 'Articles',
				component: Articles
			}
		]
	}
]

export default routes
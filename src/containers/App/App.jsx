import React from 'react';
import logo from '../../assets/img/logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import RouterView from '../../components/common/RouterView/RouterView'
import routes from '../../routes'
function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<header>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
			<RouterView routes={routes}/>
		</BrowserRouter>
  );
}

export default App;

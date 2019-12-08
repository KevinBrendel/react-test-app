import React, { useState, Fragment } from 'react';
//import './App.css';
import {
	BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";

import InputPage from './pages/InputPage';
import DisplayPage from './pages/DisplayPage';
import { Header, Footer } from "./layout";

const App: React.FC = () => {
	const [userName, setUserName] = useState<String>("");

	return (
		<Fragment>
			<Header />
			<Router>
				<Switch>
					<Route path="/input" render={() => <InputPage userName={userName} setUserName={setUserName} />} />
					<Route path="/display" render={() => <DisplayPage userName={userName} setUserName={setUserName} />} />
					<Redirect from="/" to="/input" />
				</Switch>
			</Router>
			<Footer />
		</Fragment>

	);
}

export default App;

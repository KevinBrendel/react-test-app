import React, { useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";

import InputPage from './pages/InputPage';
import DisplayPage from './pages/DisplayPage';

const App: React.FC = () => {
	const [userName, setUserName] = useState<String>("");

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/input" render={(props) => <InputPage userName={userName} setUserName={setUserName} />} />
					<Route path="/display" render={(props) => <DisplayPage userName={userName} setUserName={setUserName} />} />
					<Redirect from="/" to="/input" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

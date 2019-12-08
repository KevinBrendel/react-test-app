import React, { useState, Fragment } from 'react';
import {
	BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";

import InputPage from './pages/InputPage';
import DisplayPage from './pages/DisplayPage';
import { Header, Footer } from "./layout";
import { Grid } from '@material-ui/core';

const App: React.FC = () => {
	const [userName, setUserName] = useState<String>("");

	return (
		<Grid container direction="column" justify="space-between" alignContent="stretch" style={{ minHeight: "100vh" }}>
			<Header />
			<Router>
				<Switch>
					<Route path="/input" render={() => <InputPage userName={userName} setUserName={setUserName} />} />
					<Route path="/display" render={() => <DisplayPage userName={userName} setUserName={setUserName} />} />
					<Redirect from="/" to="/input" />
				</Switch>
			</Router>
			<Footer />
		</Grid>
	);
}

export default App;

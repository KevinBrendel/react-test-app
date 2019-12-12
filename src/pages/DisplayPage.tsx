import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import {
	useHistory
} from 'react-router-dom'
import { UserNameProps } from "../state/UserNameProps";

const DisplayPage: React.FC<UserNameProps> = (props) => {
	let history = useHistory();

	const onBack = () => {
		history.goBack();
	}

	const onReset = () => {
		props.setUserName("");
		history.push("/input");
	}

	return (
		<Grid container item spacing={2} direction="column" alignItems="center" style={{ padding: 20 }}>
			<Grid item>
				<Typography variant="h4">
					Hello {props.userName}!
				</Typography>
			</Grid>
			<Grid container spacing={2} direction="row" justify="center" alignItems="center">
				<Grid item>
					<Button variant="contained" color="secondary" onClick={onBack}>Back</Button>
				</Grid>
				<Grid item>
					<Button variant="contained" color="primary" onClick={onReset}>Reset</Button>
				</Grid>
			</Grid>
		</Grid>);
}

export default DisplayPage
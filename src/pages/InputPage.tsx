import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, TextField } from "@material-ui/core";
import {
	useHistory
} from 'react-router-dom'
import { UserNameProps } from "../state/UserNameProps";

const InputPage: React.FC<UserNameProps> = (props) => {
	let history = useHistory();

	const onSubmit = () => {
		history.push("/display");
	}

	const onInputChanged = (event: any) => {
		props.setUserName(event.target.value);
	}

	return (
		<Grid container spacing={2} direction="column" justify="center" alignItems="center">
			<Grid item>
				Enter your name
				</Grid>
			<Grid item>
				<TextField label="Name" value={props.userName} onChange={onInputChanged} />
			</Grid>
			<Grid item>
				<Button variant="contained" color="primary" onClick={onSubmit} disabled={props.userName.length === 0}> Submit</Button>
			</Grid>
		</Grid>);
}

export default InputPage
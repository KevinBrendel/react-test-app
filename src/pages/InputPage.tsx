import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, TextField, Typography } from "@material-ui/core";
import {
	useHistory
} from 'react-router-dom'
import { UserNameProps } from "../state/UserNameProps";

const InputPage: React.FC<UserNameProps> = (props) => {
	let history = useHistory();

	const onSubmit = (event: any) => {
		event.preventDefault();
		if (props.userName.length > 0) history.push("/display");
	}

	const onInputChanged = (event: any) => {
		props.setUserName(event.target.value);
	}

	return (
		<form onSubmit={onSubmit}>
			<Grid container item spacing={2} direction="column" alignItems="center">
				<Grid item>
					<Typography variant="h4">
						Enter your name
				</Typography>
				</Grid>
				<Grid item>
					<TextField label="Name" value={props.userName} onChange={onInputChanged} required autoFocus />
				</Grid>
				<Grid item>
					<Button type="submit" variant="contained" color="primary" onClick={onSubmit} disabled={props.userName.length === 0}>Submit</Button>
				</Grid>
			</Grid>
		</form>
	);
}

export default InputPage
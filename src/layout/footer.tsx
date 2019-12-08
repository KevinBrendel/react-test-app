import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";

const style: React.CSSProperties = {
	backgroundColor: "WhiteSmoke",
	textAlign: "center",
}

export default () =>
	<Grid item style={style}>
		<Typography variant="subtitle1">Footer</Typography>
	</Grid>
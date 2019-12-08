import React from "react";
import { Typography, Grid } from "@material-ui/core";

const style: React.CSSProperties = {
	color: "Grey",
	backgroundColor: "WhiteSmoke",
	textAlign: "center",
}

export default () =>
	<Grid item style={style}>
		<Typography variant="subtitle1">Footer</Typography>
	</Grid>
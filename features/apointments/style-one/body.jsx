import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        // textAlign: 'center',
        marginTop: theme.spacing(3),
        color: theme.palette.text.secondary,
    }
}));

const Body = () => {
    const classes = useStyles();
    return(
        <Grid item xs={6} style={{ backgroundColor: '#fff', height: '100vh' }}>
            <Paper className={classes.paper} style={{ backgroundColor: '#128DD2', height: '90vh' }}>

            </Paper>
        </Grid>
    )
};

export default Body
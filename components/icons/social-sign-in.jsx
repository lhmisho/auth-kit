import React from 'react'
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),

    }
}));



const SocialSignIn = () => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.margin}
            >
                <FacebookIcon className={classes.extendedIcon} />
                Facebook
            </Fab>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.margin}
            >
                {/* <TwitterIcon className={classes.extendedIcon} /> */}
                Twitter
            </Fab>
            <IconButton variant="primary" aria-label="delete">
                <GitHubIcon />
            </IconButton>
        </div>
    )
}
export default SocialSignIn;
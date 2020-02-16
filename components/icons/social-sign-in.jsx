import React from 'react'
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '../shared/CustomButtons/Button';
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
            <Button color="facebook" size="sm">
                <FacebookIcon/>
                Facebook
            </Button>
            <Button color="twitter" size="sm">
                <Twitter/>
                Twitter
            </Button>
            <Button color="github" size="sm">
                <GitHubIcon />
                Git
            </Button>
        </div>
    )
}
export default SocialSignIn;
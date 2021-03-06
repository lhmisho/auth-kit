import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import {useSelector} from 'react-redux'

const products = [
    {name: 'Product 1', desc: 'A nice thing', price: '$9.99'},
    {name: 'Product 2', desc: 'Another thing', price: '$3.45'},
    {name: 'Product 3', desc: 'Something else', price: '$6.51'},
    {name: 'Product 4', desc: 'Best thing of all', price: '$14.11'},
    {name: 'Shipping', desc: '', price: 'Free'},
];

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const Shipping = (props) => {
    const classes = useStyles();
    const {address: {firstName, lastName, address1, address2, city, country, state, zipcode}} = props
    console.log(props)
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
            </Typography>
            <Typography gutterBottom>{firstName + ' ' + lastName}</Typography>
            <Typography
                gutterBottom>{address1 + ' ' + address2 + ' ' + city + ' ' + zipcode + ' ' + country}</Typography>
        </Grid>
    )
}
const PaymentInfo = (props) => {
    const classes = useStyles();
    const {paymentInfo: {cardName, cardNumber, expDate, cvv}} = props
    return (
        <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
            </Typography>
            <Grid container>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Card Type</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{cardName}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Card Number</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{cardNumber}-{cvv}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Expiry date</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{expDate}</Typography>
                    </Grid>
                </React.Fragment>
            </Grid>
        </Grid>
    )
}

export default function Review(props) {
    const classes = useStyles();
    const {handleBack} = props
    const paymentInfo = useSelector(state => state.checkout)
    console.log(paymentInfo)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {products.map(product => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc}/>
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        $34.06
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Shipping address={paymentInfo.address}/>
                <PaymentInfo paymentInfo={paymentInfo.paymentInfo}/>
                <React.Fragment>
                    <div className={classes.buttons}>
                        <Button onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Submit
                        </Button>
                    </div>
                </React.Fragment>
            </Grid>
        </React.Fragment>
    );
}
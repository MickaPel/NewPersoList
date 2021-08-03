import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        height: 30,
        background: '#30475e',
    },
    footer: {
        background: '#346751',
        width: "100%",
        height: "100%",
        paddingTop: 10
    },
    text1: {
        marginLeft: 10
    },
    text2: {
        marginRight: 10
    }

}));

function Footer() {

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.footer}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Typography component="h6" className={classes.text1}>
                        persolist1@gmail.com
                    </Typography>
                    <Typography component="h6" className={classes.text2}>
                        &copy; PersoList, 2021
                    </Typography>
                </Grid>
            </Paper>
        </div>
    )
}

export default Footer

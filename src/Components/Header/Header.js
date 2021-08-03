import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        margin: "auto",
        color: "#FFC107",
        fontSize: 30
    },
    customBadge: {
        backgroundColor: "#79D70F"
    }
}));


function Header() {

    const classes = useStyles();

    const list = useSelector(state => state.firebase.auth.isEmpty);

    // //Check if array is empty
    // function arrayIsEmpty(array) {
    //     //If it's not an array, return FALSE.
    //     if (!Array.isArray(array)) {
    //         return false;
    //     }
    //     //If it is an array, check its length property
    //     if (array.length === 0) {
    //         //Return TRUE if the array is empty
    //         return true;
    //     }
    //     //Otherwise, return FALSE.
    //     return false;
    // }

    // const userConnect = () => {
    //     if(arrayIsEmpty(list) === false) {
    //         return 
    //     }
    // }

    // const StyledBadge2 = withStyles(theme => ({
    //     badge: {
    //         backgroundColor: '#44b700',
    //         // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    //         // '&::after': {
    //         //     position: 'absolute',
    //         //     top: 0,
    //         //     left: 0,
    //         //     width: '100%',
    //         //     height: '100%',
    //         //     borderRadius: '50%',
    //         //     animation: '$ripple 1.2s infinite ease-in-out',
    //         //     border: '1px solid #44b700',
    //         //     content: '""',
    //         // },
    //         // },
    //         // '@keyframes ripple': {
    //         // '0%': {
    //         //     transform: 'scale(.8)',
    //         //     opacity: 1,
    //         // },
    //         // '100%': {
    //         //     transform: 'scale(2.4)',
    //         //     opacity: 0,
    //         // },
    //         },
    // }))(Badge);

    // const styleBadge = {
    //     backgroundColor: arrayIsEmpty(list) ? "" : "#00AFD7"
    // }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#346751" }}>
                <Toolbar>
                    
                        <IconButton edge="start" 
                                    className={classes.menuButton} 
                                    color="inherit" 
                                    aria-label="menu"
                                    component={Link} 
                                    to={"/profile"}>
                                        <Badge badgeContent="" 
                                        classes={{ badge: list ? "" : classes.customBadge }}
                                        >
                                            <AccountCircleIcon style={{ fontSize: 35 }}/>
                                        </Badge>
                        </IconButton>
                    
                    <Typography variant="h6" className={classes.title}>
                            PersoList
                    </Typography>
                    <IconButton edge="start" 
                                className={classes.menuButton} 
                                aria-label="menu"
                                component={Link} 
                                to={"/profile"}
                                style={{ backgroundColor: "#346751" }}>
                        <AccountCircleIcon style={{ backgroundColor: "#346751", color: "#346751"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;

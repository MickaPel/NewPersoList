import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "../../Redux/Redux-Firebase/AuthAction";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#EAE2B6",
        backgroundColor: "#57837B",
        marginTop: 40
    },
    button1: {
        color: "#EAE2B6",
        backgroundColor: "#5D8233",
        marginTop: 40,
        marginBottom: 20
    },
    button2: {
        color: "#ECDBBA",
        backgroundColor: "red",
        marginTop: 10,
        marginBottom: 20
    },
    title: {
        paddingTop: 20,
        fontSize: 22,
        marginBottom: 20,
        color: "#ECD662",
        margin: "auto"
    },
    notconnect: {
        color: "#ECD662",
        paddingTop: 20,
    }
}));

function Profile(props) {

    const classes = useStyles();

    const list = useSelector(state => state.firebase.auth.isEmpty);

    const dispatch = useDispatch();

    useEffect(() => {
        if(list === true) {
            
                setTimeout(() =>{
                    props.history.push("/")
                    }, 2000);
            }
        
        
    }, [list, props.history])

    return list === true ? (
        <p className={classes.notconnect}>Vous n'êtes pas connecté. Nous vous redirigeons vers la page d'acceuil</p>
        ) : (
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <h3 className={classes.title}>Hello!</h3>
                <Button onClick={() => {
                                        dispatch(signOut());
                                        setTimeout(() =>{
                                                        props.history.push("/")
                                                        }, 1000);
                                        }
                                }
                        variant="outlined"
                        size="small"
                        className={classes.button2}>Déconexion</Button>
                <Button component={Link} 
                        to="/edit-principal-list"
                        variant="outlined" 
                        className={classes.button1}>
                            Nouvelle course
                </Button>
            </Grid>
    )
};

export default Profile;

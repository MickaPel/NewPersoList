import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { signIn } from "../../Redux/Redux-Firebase/AuthAction";

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: "auto",
        paddingTop: 20
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginTop: 5,
    },
    button: {
        margin: "auto",
        backgroundColor: "#7F8B52"
    }
});


function Login(props) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(state));
        setTimeout(() =>{
            props.history.push("/profile")
            }, 2000);
    };

    // const state2 = useSelector(state => state);
    // // console.log(state2);


    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                <Card style={{backgroundColor: "#A3A847"}}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                    Connexion
                    </Typography>
                    <TextField id="email" 
                            type="e-mail"
                            label="E-mail" 
                            variant="outlined" 
                            onChange={handleChange}/>
                    <TextField id="password"
                            type="password"
                            label="Password" 
                            variant="outlined" 
                            onChange={handleChange}
                            className={classes.pos}/>
                </CardContent>
                <CardActions>
                    <Button size="small" 
                        onClick={handleSubmit}
                        className={classes.button} 
                        variant="outlined">
                            Se connecter
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        </div>
    )
}

export default Login

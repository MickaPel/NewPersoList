import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { signUp } from "../../Redux/Redux-Firebase/AuthAction";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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


function SignUp(props) {

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
        dispatch(signUp(state));
        setTimeout(() =>{
            props.history.push("/profile")
            }, 2000);
    };


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
                    Inscription
                    </Typography>
                    <TextField id="email" 
                            type="e-mail"
                            label="E-mail" 
                            variant="outlined" 
                            onChange={handleChange}
                            className={classes.pos}/>
                    <TextField id="password"
                            type="password"
                            label="Password" 
                            variant="outlined" 
                            onChange={handleChange}
                            className={classes.pos}/>
                </CardContent>
                <CardActions>
                    <Button 
                        onClick={handleSubmit} 
                        className={classes.button} 
                        variant="outlined">
                            S'inscrire
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        </div>
    )
}

export default SignUp;

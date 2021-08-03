import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { addToList } from "../../Redux/Redux-Firebase/ItemActions";

const useStyles = makeStyles({
    div: {
        width: 375,
        margin: "auto"
    },
    root: {
        width: 350,
        height: 90,
        marginTop: 15,
        margin: "auto",
        backgroundColor: "#A3A847"
    },
    title: {
        paddingTop: 20,
        fontSize: 22,
        color: "#ECDBBA",
        margin: "auto"
    },
    grid: {
        margin: "auto"
    },
});

function AddToList() {

    const classes = useStyles();

    const [item, setItem] = useState({
                                product: "",
                                checked: "false",
                                    });

    const handleClick = (e) => {
        setItem({product: e.target.value, checked: "false"});
    };

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(addToList(item));
        setItem({   product: "",
                    checked: "false",});
    }

    const dispatch = useDispatch();

    return (
        <div className={classes.div}>
            <Card className={classes.root}>
                <CardContent>
                <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.grid}
                >
                    <TextField id="product" label="" value={item.product} variant="outlined" onChange={handleClick}/>
                    <Button 
                        onClick={handleChange}
                    >Ajouter</Button>
                </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddToList;

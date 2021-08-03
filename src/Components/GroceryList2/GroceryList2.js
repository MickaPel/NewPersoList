import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { addToPList, removeFromPList } from '../../Redux/actions';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';

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
        backgroundColor: "#57837B"
    },
    title: {
        paddingTop: 20,
        fontSize: 22,
        color: "#ECDBBA",
        margin: "auto"
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: "auto",
        backgroundColor: "#7F8B52",
        marginTop: 20
    }
});

function GroceryList() {

    const classes = useStyles();

    const dataList = useSelector(state => state);
    const listValues = dataList.list.items;

    const [item, setItem] = useState("");
    const [value, setValue] = useState("");

    const handleClick = (e) => {
        setItem(e.target.value);
        setValue(e.target.value);
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (item) {
            dispatch(addToPList(item));
            setItem("");
            setValue("");
        }
    }

    const dispatch = useDispatch();

    function arrayIsEmpty(array) {
        //If it's not an array, return FALSE.
        if (!Array.isArray(array)) {
            return false;
        }
        //If it is an array, check its length property
        if (array.length === 0) {
            //Return TRUE if the array is empty
            return true;
        }
        //Otherwise, return FALSE.
        return false;
    }

    return (
        <div className={classes.div}>
            <Typography className={classes.title}>
                Ajouter des articles juste pour cette course
            </Typography>
            <Card className={classes.root}>
                <CardContent>
                    <TextField value={value} variant="outlined" onChange={handleClick}/>
                    <Button size="small" onClick={handleChange}>Ajouter</Button>
                </CardContent>
            </Card>

                    {listValues.map((item) => (
                        <div>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                >
                                    <IconButton color="secondary" 
                                                aria-label="upload picture" 
                                                component="span"
                                                onClick={() => dispatch(removeFromPList(item.id))}>
                                        <ClearIcon />
                                    </IconButton>
                                    <p key={item.value} 
                                    style={{ textDecoration: item.completed ? "line-through" : "",
                                            color:"#ECDBBA"}}
                                    >{item.value}</p>
                                    
                            </Grid>
                        </div>
                    ))} 
                    <Button className={classes.button}
                            component={Link}
                            to="/principal-list"
                            >
                                { arrayIsEmpty(listValues) ? "Non, pas la peine" : "Ajouter pour cette course"}
                    </Button>
        </div>
    )
}

export default GroceryList;

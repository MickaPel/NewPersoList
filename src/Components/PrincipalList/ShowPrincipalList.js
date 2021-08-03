import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from 'react-router-dom';
import { clearList } from '../../Redux/actions';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    div: {
        width: 375,
        margin: "auto"
    },
    root: {
        minWidth: 275,
    },
    title: {
        paddingTop: 20,
        fontSize: 22,
        marginBottom: 20,
        color: "#ECD662",
        margin: "auto"
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: "auto",
        backgroundColor: "#D9DD6B",
        color: "#8D2828",
        marginTop: 20,
        marginBottom: 20
    }
});

function ShowPrincipalList({ list, list2 }, props) {

    const classes = useStyles();

    //First list update
    const [firstList, setFirstList] = useState(list);

    const handleRemoveItem = idx => {
        // assigning the list to temp variable
        const temp = [...firstList];
    
        // removing the element using splice
        temp.splice(idx, 1);
    
        // updating the list
        setFirstList(temp);
    };

    //Second list update
    const [secondList, setSecondList] = useState(list2);

    const handleRemoveItem2 = id => {
        // assigning the list to temp variable
        const temp = [...secondList];
    
        // removing the element using splice
        temp.splice(id, 1);
    
        // updating the list
        setSecondList(temp);
    }

    const dispatch = useDispatch();

    const handleClearList = () => {
        dispatch(clearList());
    };

    return (
        <div className={classes.div}>
            <Typography className={classes.title}>
                Ma liste:
            </Typography>
                    {firstList && firstList.map((product, idx) => (
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
                                            key={idx}
                                            onClick={() =>handleRemoveItem(idx)}
                                            >
                                    <ClearIcon />
                                </IconButton>
                                <Typography 
                                key={product.product} 
                                style={{color:"#ECDBBA"}}
                                >{product.product}</Typography>
                            </Grid>
                        </div>
                    ))}

                    {secondList && secondList.map((product, id) => (
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                            <IconButton color="secondary" 
                                        aria-label="upload picture" 
                                        component="span"
                                        key={id}
                                        onClick={() =>handleRemoveItem2(id)}
                                        >
                                <ClearIcon />
                            </IconButton>
                            <Typography 
                            key={product.value} 
                            style={{color:"#ECDBBA"}}
                            
                            >{product.value}</Typography>
                    </Grid>
                    ))}


                    <Button 
                    className={classes.button}
                    component={Link} 
                    to="/profile"
                    onClick={handleClearList}
                    >Course Terminée</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const list = state.firestore.ordered.products;
    const list2 = state.list.items;
    return {
        list: list,
        list2: list2,
        uid: state.firebase.auth.uid
    };
    };

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
            collection: "products",
            where: ["authorId", "==", ownProps.uid],
            orderBy: ["date", "desc"],
        },
    ])
)(ShowPrincipalList);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import AddToList from './AddToList';
import Product from "./Product";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        color: "#ECDBBA",
        margin: "auto"
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: "auto",
        marginTop: 20,
        backgroundColor: "#7F8B52"
    }
});

function PrincipalList({ list }, props) {

    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Typography className={classes.title}>
                Créer / Modifier ma liste
            </Typography>
            <AddToList />
                    {list && list.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            <Button className={classes.button}
                    component={Link}
                    to="/grocery-list2">Enregistrer</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const list = state.firestore.ordered.products;
    return {
        list: list,
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
)(PrincipalList);
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { removeFromList } from '../../Redux/Redux-Firebase/ItemActions';

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
        width: 350,
        margin: "auto",
        height: 50
    }
});

function Product({ product }) {

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <div className={classes.div}>
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
                                                onClick={() => dispatch(removeFromList(product))}>
                                        <ClearIcon />
                                    </IconButton>
                                    <Typography 
                                    key={product} 
                                    style={{ textDecoration: product.checked ? "" : "line-through",
                                            color:"#ECDBBA"}}
                                    
                                    >{product.product}</Typography>
                                    
                            </Grid>
                        </div>
        </div>
    )
}

export default Product;

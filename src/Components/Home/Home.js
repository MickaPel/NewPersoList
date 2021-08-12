import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "@fontsource/teko";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "80%",
        margin: "auto",
        paddingTop: 20,
        marginBottom: 20
    },
    button: {
        color: "#ECDBBA",
        backgroundColor: "#346751",
        marginRight: 2,
        marginTop: 10
    },
    button2: {
        color: "#ECDBBA",
        backgroundColor: "#346751",
        marginLeft: 2,
        marginTop: 10
    }
}));

function Home() {

    const classes = useStyles();

    const styles = {
        fontSize: 40,
        color: "#B4846C",
        fontFamily: 'Teko'
    };

    return (
        <div className={classes.root}>
                {/* <Typography variant="body2" component="p" 
                style={styles}
                >
                Avez-vous déja réussi à faire votre liste de courses sans oublier un produit? Ou pire encore, oublié
                d'acheter un produit qui était justement inscrit sur votre liste de courses? Si c'est le cas, vous 
                connaissez sûrement ce moment où en rentrant des courses, arrivé devant votre porte, vous vous dites:
                "Bordel de m***e!! J'ai oublié la crème fraîche!" Ou ce moment où vous passer à la caisse et à ce moment précis
                vous vous rendez compte que vous avez oublié quelque chose, que vous n'aurez pas le temps d'aller le
                chercher car toutes vos courses sont déjà sur le tapis, qu'une queue de dix mètres se situe derrière vous
                et que la caissière au regard morne est déjà en train de passer vos articles au scanner...
                <br />
                Désormais ce temps est révolu. Et ce grâce à PersoList qui vous permet de personnaliser votre
                propre liste de courses. Ici, vous créez une liste initiale qui est sauvegardé en permanence.
                Le jour de vos courses vous pouvez donc la checker afin de supprimer les articles que vous n'avez pas
                besoin pour ce jour précis, ou en ajouter dans le cas contraire. Ainsi, vous n'avez plus besoin de
                refaire une liste chaque semaine, mais plutôt personnaliser celle d'origine. 
                <br />
                Ne vous inquietez pas, c'est super simple!
                </Typography> */}
                <Typography variant="body2" component="p" 
                style={styles}
                >Bienvenu dans PersoList!</Typography>
                    
                        <Button color="inherit" 
                                        component={Link} 
                                        to={"/sign-up"}
                                        className={classes.button}>
                                            Inscription
                        </Button>
                        <Button color="inherit" 
                                        component={Link} 
                                        to={"/login"}
                                        className={classes.button2}>
                                            Connexion
                        </Button>
            
        </div>
    )
}

export default Home

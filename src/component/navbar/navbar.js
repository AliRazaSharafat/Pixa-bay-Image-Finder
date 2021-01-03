import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme => ({
    root: {
        flexGrow: 1,
    },
    manuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    }
})));

const NavBar = () => {
    const classes = useStyles();

    return (
        <Appbar>
            <Toolbar>
                <IconButton className={classes.manuButton} color='inherit'>
                    <MenuIcon />
                </IconButton>
                <Typography variant={'h6'} className={classes.title}>Pixa-Bay Image Finder</Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </Appbar>
    )
}
export default NavBar;
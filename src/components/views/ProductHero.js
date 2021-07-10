import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import ProductHeroLayout from './ProductHeroLayout';
import hardware from '../../media/hardware.jpg';

const backgroundImage =
  hardware

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#3d0099', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },

  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center" style={{ marginTop: "80px", position: "relative"}} >
        Upgrade your Sundays
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
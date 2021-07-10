import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import logo from "../../assets/laptop-logo-png-1.png";
import useStyles from "./styles";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const Location = useLocation();
    return (
        <>
          <AppBar position="fixed" className={classes.appbar} color="inherit"  >
              <Toolbar style={{backgroundColor: "#f0f0f0"}} >
                  <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                      TeCommerce
                  </Typography>
                  <div className={classes.grow} />
                  {Location.pathname === "/" && (
                  <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show Cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary" >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                  </div> 
                  )} 
              </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;

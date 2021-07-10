import React from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from './cartItem/CartItem';
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    
    const classes= useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">No items in your cart,
            <Link to="/" className={classes.link} > go back and start adding some!</Link>
        </Typography>
    );
    
    const FilledCart = () => (
        <>
            <Grid container spacing={3} >
                {cart.line_items.map(item => (
                    <Grid item xs={12} sm={4} md={4} lg={3} key={item.id}>
                        <CartItem item={item} 
                        onUpdateCartQty={handleUpdateCartQty}
                        onRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
                    <div className={classes.cardDetails}>
                        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol} </Typography>
                            <div>
                                <Button className={classes.emptyButon} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty Cart</Button>
                                <Button component={Link} to="/checkout" className={classes.chekoutButon} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                            </div>
                    </div>
        </>
    );

    if(!cart.line_items) return <div>"Loading..."</div>;

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart/>}
        </Container>
    )
}
export default Cart;
import React, { useState, useEffect} from 'react';
import ProductHero from './components/views/ProductHero.js';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/checkoutForm/checkout/Checkout';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();  
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});
        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts(); // eslint-disable-next-line
        fetchCart();
    }, []); 
    
    return (
        <Router>
        <div>
            <Navbar totalItems={cart.total_items} />
            <Switch>
                <Route exact path="/" >
                    <ProductHero />
                    <Products onAddToCart={handleAddToCart} products={products} />
                </Route>
                <Route exact path="/cart" >
                    <Cart cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                />
                
                </Route>
                <Route exact path="/checkout">
                    <Checkout cart={cart} />
                </Route>
            </Switch>     
        </div>
        </Router>
    )
}

export default App;
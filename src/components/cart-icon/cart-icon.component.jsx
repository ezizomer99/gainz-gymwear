import { useContext } from "react";

import {ShoppingIcon, CartIconContainer, ItemCountContainer} 
from "./cart-icon.styles";

import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartIconContainer>
    )
};

export default CartIcon;
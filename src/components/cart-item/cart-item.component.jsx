import {CartItemContainer, CartItemDetailsContainer} from "./cart-item.styles"

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;


    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <CartItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity} x €{price} </span>
            </CartItemDetailsContainer>
        </CartItemContainer>
    )

};

export default CartItem;
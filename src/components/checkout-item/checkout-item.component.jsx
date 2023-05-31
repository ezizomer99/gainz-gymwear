import {CheckoutItemContainer,
        ImageContainer,
        BaseSpan,
        QuantityContainer,
        Arrow,
        Value,
        RemoveButtonContainer
} from "./checkout-item.styles"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);


  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <QuantityContainer>
            <Arrow onClick={removeItemHandler}> 
                &#10594;
            </Arrow>
                <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}> 
                &#10596;
            </Arrow>
        </QuantityContainer>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButtonContainer onClick={clearItemHandler}>
            &#10005;
        </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem
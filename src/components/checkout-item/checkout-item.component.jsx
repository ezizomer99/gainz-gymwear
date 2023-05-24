import "./checkout-item.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);


  return (
    <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow-left" onClick={removeItemHandler}> 
                &#10594;
            </div>
                <span className="value">{quantity}</span>
            <div className="arrow-right" onClick={addItemHandler}> 
                &#10596;
            </div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={clearItemHandler}>
            &#10005;
        </span>
    </div>
  )
}

export default CheckoutItem
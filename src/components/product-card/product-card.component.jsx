import {
    ProductCardContainer,
    FooterContainer,
    NameContainer,
    PriceContainer
} from "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} 
                    onClick={addProductToCart} >
                Add to cart
            </Button>
    </ProductCardContainer>)

};

export default ProductCard;
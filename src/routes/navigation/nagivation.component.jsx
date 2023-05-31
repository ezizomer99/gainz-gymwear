import { Fragment, useContext} from "react"; 
import { Outlet , Link} from "react-router-dom";

import {ReactComponent as GainzLogo} from "../../assets/gainzlogo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import  { NavigationContainer, 
          NavLinksContainer, 
          NavLink, 
          LogoContainer } 
          from "./navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
      <NavigationContainer>
          <LogoContainer to="/">
           <GainzLogo className="logo" />
         </LogoContainer>
         <NavLinksContainer>
                 <NavLink to="/shop">
                     SHOP
                 </NavLink>
                   {
                     currentUser ? (
                       <NavLink as="span" onClick={signOutUser}>
                         SIGN OUT
                       </NavLink>
                     ) : (
                       <NavLink to="/auth">
                         SIGN IN
                       </NavLink>
                     )}
                 <CartIcon />
             </NavLinksContainer>
                     {isCartOpen && <CartDropdown />} 
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;
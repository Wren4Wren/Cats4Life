import { Wrapper, NavbarItems, } from "../css/Navbar.styled";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useState } from "react";



const NavBar = ({cartItems}) => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <Link to="/">
        <NavbarItems>Home</NavbarItems>
      </Link>
      <Link to="/shop">
        <NavbarItems>Shop</NavbarItems>
      </Link>
      <Link to="/about">
        <NavbarItems>About</NavbarItems>
      </Link>
      <Link to="/contact">
        <NavbarItems>Contact</NavbarItems>
      </Link>
      <button onClick={() => setShow(true)}>Basket</button>
      <Basket cartItems = {cartItems} title="Checkout Basket" onClose={() => setShow(false)}show={show}>
        <p></p>
      </Basket>
    </Wrapper>
  );
};

export default NavBar;

import { Wrapper, NavbarItems, } from "../css.styled/Navbar.styled";
import { Link } from "react-router-dom";



const NavBar = () => {
  
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
    </Wrapper>
  );
};

export default NavBar;

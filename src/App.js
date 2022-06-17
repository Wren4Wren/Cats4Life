import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { Container, Logo } from "./css/App.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const catLogo = new URL("./components/images/catLogoBlue.png", import.meta.url);




function App() {


  return (
    <div>
      <div>
        <Logo className="logo" src={catLogo} alt="logo" />
        <h1>Cat Shop</h1>
        </div>
      <Container>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;

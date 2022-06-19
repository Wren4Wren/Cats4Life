import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { Logo, TopHeader, LogoText } from "./css.styled/App.styled";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "./css/App.css"
const catLogo = new URL("./components/images/catLogoBlue.png", import.meta.url);



function App() {

  return (
    <div>
      <TopHeader>
        <Logo className="logo" src={catLogo} alt="logo" />
        <LogoText>Cats Only</LogoText>
      </TopHeader>
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
    </div>
  );
};

export default App;

import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { ContainerC, Logo, Button } from "./css/App.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "./css/App.css"
const catLogo = new URL("./components/images/catLogoBlue.png", import.meta.url);



function App() {
const [cats, setCats] = useState([]);
const [error, setError] = useState(null);
const [cartItems, setCartItems] = useState([]);

const handleClick = (item) => {
  setCartItems([...cartItems, item]);
};

const fetchImages = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=20"
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    setError("Couldn't fetch data(error 404)");
  }
};
useEffect(() => {
  const fetchData = async () => {
    let catData = await fetchImages();
    catData = catData.map((cats) => {
      cats.name = faker.name.firstName();
      cats.gender = faker.name.gender(true);
      cats.catType = faker.animal.cat();
      cats.word = faker.word.adjective();
      cats.price = faker.commerce.price(100, 500, 0, "£");
      return cats;
    });
    setCats(catData);
  };
  fetchData();
}, []);

  return (
    <div>
      <div>
        <Logo className="logo" src={catLogo} alt="logo" />
        <h1>Cat Shop</h1>
      </div>
      <ContainerC>
        <BrowserRouter>
          <NavBar cartItems = { cartItems } />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {cats.map((cat) => {
            return (
              <div className="content">
                <h3>{cat.name}</h3>
                <img className="img" src={cat.url} alt="cat pic" />
                <h4>{cat.price}</h4>
                <h5>{cat.catType}</h5>
                <h5>{cat.gender}</h5>
                <h5>This cat is: {cat.word}</h5>
                <Button className="button" onClick={() => handleClick(cat)}>
                  Take Me Home
                </Button>
                {error && <p>{error}</p>}
              </div>
            );
          })}
          <Footer />
        </BrowserRouter>
      </ContainerC>
    </div>
  );
};

export default App;

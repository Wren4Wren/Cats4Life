
import { ContainerC, Button } from "../css.styled/Shop.styled";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import "../css/Shop.css"
import Basket from "./Basket";




const Shop = () => {
    const [cats, setCats] = useState([]);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);
    
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
        <button onClick={() => setShow(true)}>Basket</button>
        <Basket cartItems = {cartItems} title="Checkout Basket" onClose={() => setShow(false)}show={show}>
        <p></p>
        </Basket>
        </div>
        <ContainerC>
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
            );})}
        </ContainerC>
</div>
);
};

export default Shop;
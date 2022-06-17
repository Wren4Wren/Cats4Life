import React, { useEffect, useState } from "react";
import { Container, Button } from "../css/Api.styled.js";
import "../css/App.css";
import "../css/Api.css";
import { faker } from "@faker-js/faker";
import Contact from "./Contact.js";

function Api() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
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
    <Container className="container">
      {cats.map((cat) => {
        return (
          <div className="content">
            <h3>{cat.name}</h3>
            <img className="img" src={cat.url} alt="cat pic" />
            <h4>{cat.price}</h4>
            <h5>{cat.catType}</h5>
            <h5>{cat.gender}</h5>
            <h5>This cat is: {cat.word}</h5>
            <Button
              className="button"
              onClick={() => {
                addToBasket();
              }}
            >
              Take Me Home
            </Button>
          </div>
        );
      })}
      {error && <p>{error}</p>}
    </Container>
  );
}

export default Api;

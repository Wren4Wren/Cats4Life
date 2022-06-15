import React, { useEffect, useState } from "react";
import { Image, Container } from "../css/Api.styled.js";
import "../css/App.css";
import { faker } from "@faker-js/faker";


function Api (){


const [cats, setCats] = useState([]);
const [error, setError] = useState(null);
const [basketItems, setBasketItems] = useState([]);

const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
};

const fetchImages = async ()=>{
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
        if (!response.ok){
        throw new Error(response.statusText)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        setError("Couldn't fetch data(error 404)");}
    };
    useEffect(() => {
        const fetchData = async () => {
        let catData = await fetchImages();
        catData = catData.map((cats) => {
            cats.name = faker.name.firstName();
            cats.gender = faker.name.gender(true);
            cats.catType = faker.animal.cat();
            cats.word = faker.word.adjective();
            cats.price = faker.commerce.price();
            return cats;
        });
        setCats(catData);
    };
    fetchData();
}, []);



    return (
    <div>
        {cats.map((cat,) => {
        return <div>
          <h3>{cat.name}</h3>
          <Image src={cat.url} alt="cat pic"/>
          <h4>${cat.price}</h4>
          <h5>{cat.catType}</h5>
          <h5>{cat.gender}</h5>
          <h5>{cat.word}</h5>
          <button>Take Me Home</button>
        </div>
        })}
        {error && <p>{error}</p>}
    </div>
    )}


export default Api;
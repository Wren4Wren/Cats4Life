import React, { useEffect, useState } from "react";
import { Image, Container } from "../css/Api.styled.js";
import "../css/App.css";
import { faker } from "@faker-js/faker";


function Api (){

const catName =faker.name.firstName()
const catType = faker.animal.cat()
const color = faker.color.rgb()
const word = faker.word.adjective()

const [cat, setCat] = useState([]);
const [error, setError] = useState(null);

useEffect(()=>{
    const fetchData = async ()=>{
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        if (!response.ok){
        throw new Error(response.statusText)
        }
        const data = await response.json();
        setCat(data);
        console.log(data);
    } catch (error) {
        console.log(error);
        setError("Couldn't fetch the data");}
    };
    fetchData();
},[])


    return (
    <div>
        {cat.map((cats) => (
        <div className="container" key={cats.id}>
            <h4 color={color}>{catName}</h4>
            <Image src={ cats.url } alt="Image of a cat"/>
            <h5>{catType}</h5>
            <p>{word}</p>
        </div>
        ))}



        {error && <p>{error}</p>}
    </div>
);
}

export default Api;

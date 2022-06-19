import { useNavigate } from "react-router-dom";
import "../css/Home.css"

const Home = () => {

const navigate = useNavigate();
const navToShop = ()=>{
    navigate("/Shop")
}

const BackgroundCats = new URL ("../components/images/homecats.jpg", import.meta.url)

return (
<div>
    <h1 className="h1">Welcome to Cats Only</h1>
    <h2 className="h2">The Only place to find your best feline friend!</h2>
    <div className="home-container">
    <img className="img-home" src={BackgroundCats} alt = "background" ></img>
    <div className="text-center"><p className="text">Purchase your friendly feline here and receive 2 months supply of free cat food!</p></div>
    </div>
    <h3 onClick={navToShop} className="enter" >Enter Shop</h3>
    <br></br>
    <br></br>
</div>
);
}

export default Home;
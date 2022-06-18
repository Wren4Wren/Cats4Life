// const BackgroundCats = new URL ("../components/images/homecats.jpg", import.meta.url)
import { useNavigate } from "react-router-dom";
import {} from "../css/Home.css"

const Home = () => {

const navigate = useNavigate();
const navToShop = ()=>{
    navigate("/Shop")
}

return (
<div>
    <h1>Welcome to Cats Only</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>Purchase your friendly feline here and receive 2 months supply of free cat food.</p>
    <br></br>
    <br></br>
    <h3 onClick={navToShop} className="cursor" >Enter Shop</h3>
    {/* <img src={BackgroundCats} alt = "background" ></img> */}
    <br></br>
    <br></br>
</div>);
}

export default Home;
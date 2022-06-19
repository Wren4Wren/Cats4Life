import "../css/About.css"

const catSelfie = new URL("./images/catSelfie.jpeg", import.meta.url)

const About = () => {
    return ( 
        <div>
            <h3 className="Header">About Us</h3>
            <h2 className="Header2"> @ Cats Only, We love cats!!</h2>
          <div className= "Intro">
            And who wouldn't??
            <br></br> 
            Our team includes cat experts, veterinarians, feline nutritionists and behaviour specialists both as team members and as consultants. 
            <br></br>
            All on hand to make sure you find your PUURRRfect feline companion.
            <br></br>
            On top of that, we have an ever growing community on social media of over 1.25 million cat lovers who contribute to our vast resource of cat            knowledge. We regularly reach out to our cat community with surveys to hear first hand accounts from cat owners across the globe who provide        their feedback, real-world experience and product recommendations.
        </div>
            <br></br>
        <div className="catSelfie">
          <div className="kittyBox">
            <img className="kitty" src= {catSelfie} alt="cats"/>
            </div>
            <br></br>
            <br></br>
            <div className="Header">
            <header>Cat Facts</header>
            </div>    
            <br></br>
            <br></br>
            <div className= "Facts">
              <p className="factTitle">Cat Fatcs!</p>
                <ul>
                    <li>Cats can live to 20 years or more</li>
                    <li>A female cat or Queen is capable of having up to 150 offspring in her lifetime and can start mating from about 5 months old.</li>
                    <li>They spend over 5 hrs a day grooming.</li>
                    <li>A cat can jump seven times the height of its tail.</li>
                    <li>10% of a cats bones are in its tail.</li>
                    <li>Cats have 30 teeth</li>
                    <li>They sleep an average of 17 hours per day.</li>
                    <li>There are about 500 million cats in the world with aprox 40 different breeds.</li>
                    <li>Sir Isaac Newton invented the cat flap.</li>
                    <li>The most popular pedigree cats in descending order are the Persian cat, followed by the Main Coon cat and the Siamese cat.</li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default About;
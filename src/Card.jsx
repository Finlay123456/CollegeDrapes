import HangoverFlag from './assets/Hangover Flag.png'


function Card(){

    return(
        <div className="card">
            <img className="card-image" src={HangoverFlag} alt="Hangover Image"></img>
            <h2 className="card-title">The Hangover</h2>
            <p className="card-text"> {"If any one ever asks you to stop gambling, just remind them, it's not gambling when you know you're going to win."} </p>
        </div>
    );
}

export default Card
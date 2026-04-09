/**
 * What is a Component?
 * It's just a JS function that returns JSX.
 * 
 * What are Props?
 * Think of them like function arguments or Laravel Blade parameters.
 */

function Hero(props) {
    return (
        <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "10px", margin: "10px 0" }}>
            <h1>Welcome, {props.userName}!</h1>
            <p>You are learning: {props.topic}</p>
        </div>
    );
}

export default Hero;

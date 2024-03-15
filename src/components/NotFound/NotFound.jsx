import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <>
        <h2>Hey, it looks like you're a little lost!</h2>
        <p>Let's help you find your way!</p>

        <Link to='https://www.reddit.com'>Were you looking for the real reddit?</Link>
        <Link to='/'>Click here to go 'Home'</Link>
        <Link to='/articles'>Want to view more articles? click here!</Link>
        <Link to='/topics'>How about some topics?</Link>
        <Link to={`https://youtu.be/dQw4w9WgXcQ?si=RiJpBan1WvbtMqM6`}>Feeling Brave?</Link>
        </>
    )
}

export default NotFound
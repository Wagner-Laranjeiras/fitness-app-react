import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <>
            <h1 className="text-3xl font-bold underline">Home</h1>

            <div>
                <Link to={'/workouts'}>
                    <button>Workouts</button>
                </Link >
            </div>
            <div>
                <Link to={'/profile'}>
                    <button>Profile</button>
                </Link>
            </div>
        </>
    );
}

export default Home;
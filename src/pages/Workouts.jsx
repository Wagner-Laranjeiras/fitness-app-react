import { Link } from "react-router-dom";

const Workouts = () => {
    return (  
        <>
            <h1 className="text-3xl font-bold underline">Workouts</h1>

            <div>
                <Link to={'/'}>
                    <button>Home</button>
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

export default Workouts;
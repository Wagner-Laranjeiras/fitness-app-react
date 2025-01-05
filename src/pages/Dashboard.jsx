import { Link } from "react-router-dom";

const Dashboard = () => {
    return (  
        <>
            <h1 className="text-3xl font-bold underline">Dashboard</h1>

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

export default Dashboard
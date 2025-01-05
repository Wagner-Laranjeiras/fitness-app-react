import { Link } from "react-router-dom";

const Profile = () => {
    return (  
        <>
            <h1 className="text-3xl font-bold underline">Profile</h1>
            <div>
                <Link to={'/'}>
                    <button>Home</button>
                </Link >
            </div>
            <div>
                <Link to={'/workouts'}>
                    <button className="bg-black text-white" >
                        Workouts
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Profile;
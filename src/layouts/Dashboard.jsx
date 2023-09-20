import { Link, Outlet } from "react-router-dom";

 

const Dashboard = () => {
    return (
        <div className="flex">
            
            <div className="w-[20%]">
                <ul>
                    <li>
                        <Link to="/dashboard" >DashBoard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile" >Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/editProfile" >Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="w-[80%]">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;
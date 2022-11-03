import { Outlet ,Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid-container">
        <div className="grid-x grid-padding-x">
            <div className="cell medium-8">
                <Outlet />
            </div>
            <div className="cell medium-4">
                <ul>
                    <li><Link to="">Dashboard Home</Link></li>
                    <li><Link to="account">My Account</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
};

export default Layout;

import { Outlet, Link } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
    return (
        <div>
            <div className="components-menu">
                <Link to="/">Home</Link>
                <Link to="/focusableInput">Focusable Input</Link>
                <Link to="/grocery">Grocery</Link>
                <Link to="/imageGallery">Image Gallery</Link>
                <Link to="/listItemsNav">List Items Navigation</Link>
                <Link to="/message">Message</Link>
                <Link to="/playerStatus">Player Status</Link>
                <Link to="/rating">Rating</Link>
                <Link to="/teamsList">Teams List</Link>
            </div>
            <br/>
            <Outlet />
        </div>
    );
};

export default Layout;

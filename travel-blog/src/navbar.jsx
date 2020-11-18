import "./styles/navbar.scss";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left-half-container">
                <div className="navbar__top-word">
                    Travelize
                </div>
                <div className="navbar__bottom-words">
                    My traveling experiences
                </div>
            </div>
            <div className="navbar-right-half-container">
                <button className="button menu">
                    Home
                </button>
                <button className="button menu">
                    Blog
                </button>
                <button className="button menu--state-primary">
                    About
                </button>
            </div>
        </div>
    );
}

export default NavBar
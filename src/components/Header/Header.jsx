import "./Header.css";
import { Link } from "react-router-dom";
function Header() {

    const navigated = () => {
        document.querySelector(".Header-Burger").checked = false
    }
    return (
        <header id="HeaderWrapper">
            <p className="Header-DeviceInfo">You watching this page with a Screen width lower than 500px. The Page might not look as expected.
                The recommended Width is 750px+.
            </p>
            <input className="Header-AcceptInfo" type="checkbox"></input>
            <Link to="/">
                <h1>Marius Elting</h1>
            </Link>
            <input className="Header-Burger" type="checkbox"></input>
            <nav id="NavWrapper">
                <ul>
                    <li><Link onClick={navigated} className="underlineHover" to="/">Home</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" to="/projects">Projects</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" to="/aboutme">About Me</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" to="/contactme">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
import "./Header.css";
import { Link } from "react-router-dom";
import Data from "../../Languages.json"

function Header({ setLang }) {
    const lang = sessionStorage.getItem("Language")
    const { Header } = Data[lang]
    const navigated = () => {
        document.querySelector(".Header-Burger").checked = false
    }
    return (
        <header id="HeaderWrapper">
            <input className="Header-AcceptInfo" type="checkbox"></input>
            <Link to="/">
                <h1>Marius Elting</h1>
            </Link>
            <input className="Header-Burger" type="checkbox"></input>
            <nav id="NavWrapper">
                <ul>
                    <li><Link onClick={navigated} className="underlineHover" to="/">{Header.home}</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" to="/projects">{Header.projects}</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" to="/aboutme">{Header.aboutMe}</Link></li>
                    <li><Link onClick={navigated} className="underlineHover" to="/contactme">{Header.contact}</Link></li>
                    <li><span className={lang === "German" ? "active" : ""} onClick={() => setLang("German")}>DE</span> - <span className={lang === "English" ? "active" : ""} onClick={() => setLang("English")}>EN</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
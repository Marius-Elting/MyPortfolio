import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    const lang = sessionStorage.getItem("Language")

    return (
        <footer id="Footer-Wrapper">
            <Link to="/impressum" className="underlineHover">Impressum</Link>
            <Link to="/privatepolicy" className="underlineHover">{lang === "English" ? "Private Policy" : "Datenschutz"}</Link>
        </footer>
    )
}

export default Footer

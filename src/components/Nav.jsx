import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

export default function Nav() {
    const [darkTheme, setDarkTheme] = useState(false);

    const savedTheme = window.localStorage.theme;
    document.body.className = savedTheme ? savedTheme : "";

    function toggleTheme() {
        setDarkTheme(!darkTheme);
        window.localStorage.setItem('theme', darkTheme ? "" : "dark-theme");
    }
    return (
        // <div>
        <nav className="nav-bar">
            <ul className="nav-list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <button className='roundButton' onClick={toggleTheme}>{darkTheme ? <FaSun /> : <FaMoon />}</button>
        </nav>
        // </div>
    );
}
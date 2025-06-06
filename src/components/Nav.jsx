import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Nav() {
    const [theme, setTheme] = useState(false);
    document.body.className = theme ? "dark-theme" : "";
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
            <button onClick={() => { setTheme(!theme) }}><FaEnvelope></FaEnvelope></button>
        </nav>
        // </div>
    );
}
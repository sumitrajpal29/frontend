import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

export default function Nav() {
    const [theme, setTheme] = useState(() => window.localStorage.theme || '');

    function toggleTheme() {
        // const newTheme = theme === undefined ? 'dark-theme' : undefined;

        setTheme((prev) => prev === 'dark-theme' ? '' : 'dark-theme');
        // document.body.className = newTheme;
        // window.localStorage.setItem('theme', newTheme);
    }
    useEffect(() => {
        document.body.className = theme;
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    return (
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
            <button className='roundButton' onClick={toggleTheme}>
                {theme === '' ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
}
import React from 'react';
// import './Profile.css';
// import profilePic from './profile-pic.jpg'; // Replace with your profile picture path
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Example tech stack icons

const Profile = () => {
    return (
        <div className="profile-container">
            <nav className="navbar">
                {/* Add your navigation links here */}
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="profile-content">
                <div className="profile-left">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
                <div className="profile-right">
                    <h1>Your Name</h1>
                    <p>
                        A brief introduction about yourself and your skills.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="tech-stack">
                        <h2>Tech Stack</h2>
                        <div className="tech-icons">
                            <FaHtml5 title="HTML5" />
                            <FaCss3Alt title="CSS3" />
                            <FaJsSquare title="JavaScript" />
                            <FaReact title="React" />
                            <FaNodeJs title="Node.js" />
                            <FaDatabase title="MongoDB" /> {/* Example for MongoDB */}
                            {/* Add more tech icons as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

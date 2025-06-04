import image from '../assets/image.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


export default function Profile() {

    const linkedinUrl = 'https://www.linkedin.com/in/sumitrajpal29';
    const githubUrl = 'https://github.com/sumitrajpal29';
    const leetcodeUrl = 'https://leetcode.com/sumitrajpal29/';
    const email = 'sumitrajpal29@gmail.com';

    return <div>
        <div className="profile-img-animated-border">
            <div className="profile-img-inner">
                <img
                    // style={{
                    //     maxWidth: '10rem',
                    //     borderRadius: '50%',
                    //     objectFit: 'cover'
                    // }}
                    src={image}
                    alt="Profile"
                />
            </div>
        </div>

        <div className="social-icons">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer">
                <SiLeetcode size={30} />
            </a>
            <a href={`mailto:${email}`} rel="noopener noreferrer">
                <FaEnvelope size={30} />
            </a>
        </div>
    </div>
}
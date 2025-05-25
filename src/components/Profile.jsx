import image from '../assets/image.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


export default function Profile() {

    const linkedinUrl = 'https://www.linkedin.com/in/sumitrajpal29';
    const githubUrl = 'https://github.com/sumitrajpal29';
    const leetcodeUrl = 'https://leetcode.com/sumitrajpal29/';
    const email = 'sumitrajpal29@gmail.com';

    return <div>
        <img
            style={{
                maxWidth: '10rem',
                borderRadius: '50%',
                objectFit: 'cover'
            }}
            src={image}
            alt="Profile"
        />

        <div>
            <a className="social-icons" href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a className="social-icons" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <a className="social-icons" href={leetcodeUrl} target="_blank" rel="noopener noreferrer">
                <SiLeetcode size={30} />
            </a>
            <a className="social-icons" href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} />
            </a>
        </div>
    </div>
}
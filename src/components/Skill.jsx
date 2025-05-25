import image from '../assets/react.svg';
import '../App.css';

const name = "React";
export default function Skill() {
    return <div className='skill'>
        <img style={{ marginRight: "0.3rem" }} src={image} />
        <h3>{name}</h3>
    </div>
}
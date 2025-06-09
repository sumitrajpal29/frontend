import image from '../../public/assets/react.svg';
import '../App.css';



export default function Skill() {
    const skillList = [
        {
            name: "React",
            icon: image
        },
        {
            name: "Redux",
            icon: image
        },
        {
            name: "JavaScript",
            icon: image
        },
        {
            name: "TypeScript",
            icon: image
        },
        {
            name: "HTML",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
        {
            name: "CSS",
            icon: image
        },
    ];

    return (
        <div className='skillBanner'>
            {skillList.map(({ name, icon }) => {
                return <div className='skill'>
                    <img style={{ marginRight: "0.3rem" }} src={icon} />
                    <h3>{name}</h3>
                </div>
            })}
        </div>);
}
import './card.css'
import Profile from "./profile.tsx";
import LinkList from "./linkList.tsx";


function Card() {
    const socialMediaLinks  = [
        {label: "GitHub", url: "https://github.com/"},
        {label: "Frontend Mentor", url: "https://www.frontendmentor.io/home"},
        {label: "LinkedIn", url: "https://www.linkedin.com/feed/"},
        {label: "Twitter", url: "https://twitter.com/home"},
        {label: "Instagram", url: "https://www.instagram.com/"}
    ];
    return (
        <>
            <div className={"card"}>
                <Profile profilePictur={"./src/assets/images/avatar-jessica.jpeg"}
                         name={"Jessica Randall"}
                         location={"London, United Kingdon"}
                         description={'"Front-end developper and avid reader."'}/>
                <LinkList socialMediaLinks={socialMediaLinks}/>
            </div>
        </>
    );
}

export default Card

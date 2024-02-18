import "./main.css"
import "./profile.css"

interface ProfileInterface {
    profilePictur: string
    name: string
    location: string
    description: string
}

const Profile: React.FC<ProfileInterface> = ({profilePictur, name, location, description}) => {
    return (
        <>
            <div className="Profile">
                <img src={profilePictur} alt={"Profile  pictur of "+name}/>
                <h3>{name}</h3>
                <h4>{location}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Profile

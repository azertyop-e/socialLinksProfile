import "./main.css"
import "./linkBtn.css"

interface LinkBtnInterface {
    label: string
    link: string
}

const LinkBtn: React.FC<LinkBtnInterface> = ({label, link}) => {
    return (
        <>
            <div className="linkBtn">
                <a href={link}>{label}</a>
            </div>
        </>
    )
}

export default LinkBtn

import React from "react";
import LinkBtn from "./linkBtn.tsx";

interface ProfileInterface {
    socialMediaLinks: { label: string; url: string }[];
}

const LinkList: React.FC<ProfileInterface> = ({socialMediaLinks}) => {
    return (
        <>
            <div className="LinkList">
                {socialMediaLinks.map((link) => (
                    <LinkBtn label={link.label} link={link.url}></LinkBtn>
                ))}
            </div>
        </>
    );
};

export default LinkList
export default function SocialMediaCard({ac}) {
    const {name, icon, path} = ac;

    return (
        <a href={path} target="_blank">
            <div className="social_media_card">
                <p>{icon}</p>
                <p>{name}</p>
            </div>
        </a>
    )
}
function ProfileCard({ title, handle }) {
    console.log(title, handle);

    return (
        <div>
            <div>{title}</div>
            <div>{handle}</div>
        </div>
    );
}

export default ProfileCard;

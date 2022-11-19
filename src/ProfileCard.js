function ProfileCard({ title, handle, image }) {
    // console.log(title, handle, image);

    return (
        <div>
            <img src={image} alt="pda logo" />
            <div>{title}</div>
            <div>{handle}</div>
        </div>
    );
}

export default ProfileCard;

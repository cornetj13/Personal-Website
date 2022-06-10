import profilePicture from '../../images/Jon2021.jpg'

function Avatar() {
    return (
        <div className="avatar bioAvatar">
            <div className="my-8 mx-20 w-72 lg:w-80 2xl:w-96 h-72 lg:h-80 2xl:h-96 mask border-zinc-900 rounded-3xl border-8">
                <img src={profilePicture} alt="Jonathan's Profile Picture" />
            </div>
        </div>
    )
}

export default Avatar;

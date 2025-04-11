
export default function LoginBtn({handleLogin, accessToken, userProfile}) {
    return <div className="flex justify-center items-center">
        <button
            onClick={handleLogin}
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700">
            {accessToken ? (
                userProfile ? (
                    <div className="flex items-center gap-2">
                        {/* Replace profile picture with Spotify logo */}
                        <i className="fab fa-spotify text-white text-2xl"></i>
                        <span>{userProfile.display_name}</span>
                    </div>
                ) : (
                    "Loading Profile..."
                )
            ) : (
                "Login with Spotify"
            )}
        </button>
    </div>
}
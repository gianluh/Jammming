export const handleLogin = () => {
    
    const clientId =  import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
    const scope = "playlist-modify-public playlist-modify-private user-read-private user-read-email";
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

    // Redirect to Spotify login page
    window.location.href = authUrl;
};